import { Prisma } from "@prisma/client"
import File from "./file"

type FilesContainerProps = {
    files: Prisma.JsonValue[]
}

export default function FilesContainer({ files }: FilesContainerProps) {

    const fileObjects = files.map(file => {
        if (typeof file !== "object") throw Error
        return file as Prisma.JsonObject
    })

    return (
        <div className="container py-4 py-xl-5">
            <div className="row mb-1">
                <div className="col-md-8 col-xl-6 text-center mx-auto">
                    <h4>Allegati</h4>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 row-cols-auto">
                { fileObjects.map(file => <File key={ fileObjects.indexOf(file) } file={ file }/>) }
            </div>
        </div>
    )
}