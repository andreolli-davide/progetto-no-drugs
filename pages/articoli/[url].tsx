import { Article } from "@prisma/client"
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next"
import { ParsedUrlQuery } from "querystring"
import Layout from "../../components/global/layout"
import { db } from "../../utils/database"

type articlePageProps = {
    article: Article
}

interface queryParams extends ParsedUrlQuery {
    url: string
}

export default function ArticlePage ({ article }: articlePageProps) {
    return (
        <Layout navBarSelected='articoli'>
            <h1>{ article.title }</h1>
            <h4>{ article.description }</h4>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps<articlePageProps, queryParams> = async (context) => {

    const { url } = context.params as queryParams
    
    const article: Article | null = await db.article.findUnique({ where: { url:  url } })
    if (article == null) throw Error
    
    return {
        props: {
            article
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    
    const articlesUrls = await db.article.findMany({ select: { url: true } })

    return {
        paths: articlesUrls.map<{ params: { url: string } }>(article => {
            return { params: { url: article.url } }
        }),
        fallback: "blocking"
    }
}