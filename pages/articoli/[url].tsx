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
            <div className="container d-flex flex-column align-items-center py-4 py-xl-5">
                <div className="row mb-1" style={{ width: "100%", marginBottom: "12px" }}>
                    <div className="col-md-8 col-xl-6 text-center mx-auto">
                        <h2>{ article.title }</h2>
                        <p className="w-lg-50">{ article.description }</p>
                    </div>
                </div>
            </div>
            <div className="container" dangerouslySetInnerHTML={{ __html: article.content }}>
            </div>           
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