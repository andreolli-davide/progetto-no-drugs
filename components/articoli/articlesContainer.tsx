import { GetStaticProps, InferGetStaticPropsType } from "next"
import Article, { articlePreview } from "./article"

export type ArticlesContainerProps = {
    articles: articlePreview[]
}

export default function ArticlesContainer({ articles }: ArticlesContainerProps) {


    return (
        <div className="container py-4 py-xl-5">
            { articles.length !== 0 ? 
                
                <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
                    { articles.map((value, index) => ( <Article article={value} key={ index }/> )) }
                </div> : <h2 className="text-center">Ops... non ci sono articoli</h2>
            }
        </div>
    )
}