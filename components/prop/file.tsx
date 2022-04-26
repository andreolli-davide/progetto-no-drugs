import { Prisma } from "@prisma/client"
import Link from "next/link"

type FileProps = {
    file: Prisma.JsonObject
}

export default function File({ file }: FileProps) {

    if (typeof file["name"] !== 'string' || typeof file["url"] !== 'string') throw Error

    return (
        <a href={ file["url"] } >
            <div className="col">
                <div className="d-flex p-2 justify-content-center" style={{ padding: ".5rem" }}>
                    <div className="bs-icon-sm bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon sm" style={{ width: "20px", height: "20px" }}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-bell" style={{ width: "8px", height: "8px" }}>
                        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"></path>
                    </svg></div>
                    <div style={{ padding: "0 .5rem" }}>
                        <p className="mb-0" style={{ margin: "0", marginLeft: "0.px", fontWeight: 500, lineHeight: 1.2 }}>{ file["name"] }</p>
                    </div>
                </div>
            </div>
        </a>
    )
}