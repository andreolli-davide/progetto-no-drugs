import { ReactElement } from "react";
import Footer from "./footer";
import NavBar from "./navbar";

type LayoutProps = {
    navBarSelected?: "articoli" | "informazioni" | undefined,
    children: ReactElement[]
}

export default function Layout ({ navBarSelected, children }: LayoutProps) {
    return (
        <>
            <NavBar selected={navBarSelected} />
            { children }
            <Footer />
        </>
    )
}