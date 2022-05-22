import { getAccessToken, getSession, handleProfile, useUser, withApiAuthRequired } from "@auth0/nextjs-auth0";
import { NextApiRequest, NextApiResponse } from "next";
import { title } from "process";
import { db } from "../../utils/database";

const snakeCase = (str: string) => {
    const strArr = str.split(' ');
    const snakeArr = strArr.reduce<string[]>((acc, val) => {
        return acc.concat(val.toLowerCase());
    }, []);
    return snakeArr.join('_');
};

export default withApiAuthRequired(async (req: NextApiRequest, res: NextApiResponse) => {

    if (!req.body.title || !req.body.description || !req.body.content || !req.body.schoolClass) {
        res.json(400)
        return
    }

    const session = getSession(req, res)
    if (!session?.user.nickname) throw Error

    const account = await db.account.findUnique({ where: { nickname: session.user.nickname } })
    if (!account) throw Error

    console.log(account)

    const article = {
        url: snakeCase(`${req.body.title}-${Math.random().toString(36).slice(2, 7)}`),
        title: req.body.title,
        description: req.body.description,
        content: req.body.content,
        school: account.school,
        schoolClass: req.body.schoolClass,
        schoolImage: account.image,
        schoolYear: "2021-2022",             // TODO: DA CAMBIARE
        publicationDatetime: new Date().toLocaleString(),
        files: req.body.files
    }

    const { url } = await db.article.create({ data: article })
    res.status(200).json({ result: "ok", url })
})