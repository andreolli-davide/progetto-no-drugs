import { Article } from "@prisma/client"
import { GetStaticPaths, GetStaticProps } from "next"
import Error from "next/error"
import { ParsedUrlQuery } from "querystring"
import Layout from "../../components/global/layout"
import FilesContainer from "../../components/files/fileContainer"
import { db } from "../../utils/database"

type articlePageProps = {
    article: Article | null
}

interface queryParams extends ParsedUrlQuery {
    url: string
}

export default function ArticlePage({ article }: articlePageProps) {

    if (!article) return <Error statusCode={ 404 } />

    return (
        <Layout pageTitle={article.title} navBarSelected='articoli' seoDescription={article.description}>
            <div className="container d-flex flex-column align-items-center py-4 py-xl-5">
                <div className="row mb-1" style={{ width: "100%", marginBottom: "12px" }}>
                    <div className="col-md-8 col-xl-6 text-center mx-auto">
                        <h2>{article.title}</h2>
                        <p className="w-lg-50">{article.description}</p>
                    </div>
                </div>
            </div>
            <div className="container" dangerouslySetInnerHTML={{ __html: article.content }} />
            <FilesContainer files={ article.files }/>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps<articlePageProps, queryParams> = async (context) => {

    const { url } = context.params as queryParams

    const article: Article | null = await db.article.findUnique({ where: { url: url } })

    return {
        props: {
            article
        },
        revalidate: 60
    }
}

export const getStaticPaths: GetStaticPaths = async () => {

    const articlesUrls = await db.article.findMany({ 
        select: { url: true }
    })

    return {
        paths: articlesUrls.map<{ params: { url: string } }>(article => {
            return { params: { url: article.url } }
        }),
        fallback: "blocking"
    }
}