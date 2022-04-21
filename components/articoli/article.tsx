import Image from "next/image"

export type articlePreview = {
    title: string,
    description: string,
    schoolClass: string,
    school: string,
    schoolImage: string,
    schoolYear: string,
    url: string
}

type ArticleProps = {
    article: articlePreview
}

export default function Article({ article }: ArticleProps) {

    return (
        <div className="col">
            <div className="p-4"><span className="badge rounded-pill bg-primary mb-2">{ article.schoolYear }</span>
                <a href={ `articoli/${article.url}` } style={{ color: "inherit", textDecoration: "none" }}>
                    <h4 className="text-dark">{ article.title }</h4>
                    <p className="text-dark">{ article.description }</p>
                </a>
                <div className="d-flex">
                    <div className="me-3">
                        <Image className="rounded-circle flex-shrink-0 fit-cover" width="50" height="50" src={ article.schoolImage } alt={ article.school }/>
                    </div>
                    <div>
                        <p className="fw-bold mb-0">{ article.schoolClass }</p>
                        <p className="text-muted mb-0">{ article.school }</p>
                    </div>
                </div>
            </div>
        </div>
    )
}