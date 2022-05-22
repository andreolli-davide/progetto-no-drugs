import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useS3Upload } from "next-s3-upload";
import Error from "next/error";
import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";
import Editor from "../../components/editor/editor";
import Layout from "../../components/global/layout";

type File = {
    name: string,
    url: string
}

export default function NewArticlePage() {

    const [title, setTitle] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [schoolClass, setSchoolClass] = useState<string>("")
    const [content, setContent] = useState<string>("")
    const [files, setFiles] = useState<File[]>([])

    const [sendButtonDisabled, setSendButtonDisabled] = useState<boolean>()

    const { uploadToS3 } = useS3Upload({ endpoint: '/api/upload' });

    const handleFileChange = async ({ target }: ChangeEvent) => {

        setSendButtonDisabled(true) // Attende il caricamento dei file

        const _files = (target as HTMLInputElement).files
        if (!_files) return;

        const updatedFileList = files

        for (let i = 0; i < _files.length; i++) {
            const _file = _files.item(i)
            if (!_file) return

            const { url } = await uploadToS3(_file)
            const file: File = { name: _file.name, url }

            updatedFileList.push(file)
        }

        setFiles(updatedFileList)
        setSendButtonDisabled(false)
    }

    const handleSendClick = async (e: FormEvent) => {

        e.preventDefault()

        console.log("title", title)
        console.log("description", description)
        console.log("schoolClass", schoolClass)
        console.log("content", content)
        console.log("files", files)

        console.log(e)

        if (!content || content === "") alert("Inserisci il contenuto dell'articolo")

        const body = {
            title,
            description,
            schoolClass,
            content,
            files
        }

        const response = await fetch("/api/new", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        })

        if ( response.ok ) window.location.replace(`/it/articoli/${(await response.json()).url}`)
    }

    return (
        <Layout pageTitle="Nuovo Articolo" navBarSelected="nuovoArticolo" >
            <section className="position-relative py-4 py-xl-5">
                <div className="container position-relative">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                            <div className="card mb-5">
                                <div className="card-body p-sm-5">
                                    <h2 className="text-center mb-4">Nuovo articolo</h2>
                                    <form onSubmit={handleSendClick}>
                                        <div className="mb-3">
                                            <input className="form-control" required={true} type="text" id="title-input" name="title" placeholder="Titolo" value={title} onChange={e => setTitle(e.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <textarea className="form-control" required={true} id="descrizione-input" name="descrizione" rows={4} placeholder="Descrizione" value={description} onChange={e => setDescription(e.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <input className="form-control" required={true} type="text" id="classe-input" name="classe" placeholder="Classe" value={schoolClass} onChange={e => setSchoolClass(e.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <Editor onChange={ setContent }/>
                                        </div>
                                        <div className="mb-3">
                                            <input type="file" multiple={true} onChange={handleFileChange} className="form-control"/>
                                        </div>
                                        <div className="mb-3">
                                            <ul className="list-group">
                                                { files.map(file => <li className="list-group-item" key={ file.url }><Link href={ file.url }>{ file.name }</Link></li>) }
                                            </ul>
                                        </div>
                                        <div><button id="submit" className="btn btn-primary d-block w-100" type="submit" disabled={ sendButtonDisabled }>Crea articolo</button></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export const getServerSideProps = withPageAuthRequired();