import Article, { article } from "./article"

export default function ArticlesContainer() {

    const articles: article[] = [
        {
            title: "prova",
            description: "descrizione snfsi sdfn sjsndfk sdkjfn skksjdnf",
            schoolClass: "5A",
            school: "IC Fondo Revò",
            schoolImage: "https://cdn.bootstrapstudio.io/placeholders/1400x800.png",
            schoolYear: "2021-2022"
        },
        {
            title: "prova",
            description: "descrizione snfsi sdfn sjsndfk sdkjfn skksjdnf",
            schoolClass: "5A",
            school: "IC Fondo Revò",
            schoolImage: "https://cdn.bootstrapstudio.io/placeholders/1400x800.png",
            schoolYear: "2021-2022"
        },
        {
            title: "prova",
            description: "descrizione snfsi sdfn sjsndfk sdkjfn skksjdnf",
            schoolClass: "5A",
            school: "IC Fondo Revò",
            schoolImage: "https://cdn.bootstrapstudio.io/placeholders/1400x800.png",
            schoolYear: "2021-2022"
        },
        {
            title: "prova",
            description: "descrizione snfsi sdfn sjsndfk sdkjfn skksjdnf",
            schoolClass: "5A",
            school: "IC Fondo Revò",
            schoolImage: "https://cdn.bootstrapstudio.io/placeholders/1400x800.png",
            schoolYear: "2021-2022"
        }
    ]

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