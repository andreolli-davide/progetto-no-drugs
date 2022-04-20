import Image from "next/image"

export type article = {
    title: string,
    description: string,
    schoolClass: string,
    school: string,
    schoolImage: string,
    schoolYear: string
}

type ArticleProps = {
    article: article
}

export default function Article({ article }: ArticleProps) {
    return (
        <div className="col">
            <div className="p-4"><span className="badge rounded-pill bg-primary mb-2">{ article.schoolYear }</span>
                <h4>{ article.title }</h4>
                <p>{ article.description }</p>
                <div className="d-flex">
                    <Image className="rounded-circle flex-shrink-0 me-3 fit-cover" width="50" height="50" src={ article.schoolImage } alt={ article.school }/>
                    <div>
                        <p className="fw-bold mb-0">{ article.schoolClass }</p>
                        <p className="text-muted mb-0">{ article.school }</p>
                    </div>
                </div>
            </div>
        </div>
    )
}