import Head from "next/head";
import Script from "next/script";
import { ReactElement } from "react";
import Footer from "./footer";
import NavBar from "./navbar";

type LayoutProps = {
    navBarSelected?: "articoli" | "informazioni" | undefined,
    pageTitle?: string,
    showFooter?: boolean
    children: ReactElement | ReactElement[]
}

export default function Layout ({ navBarSelected, pageTitle, showFooter, children }: LayoutProps) {
    return (
        <>
            <Head>
                <title>{ pageTitle ? `${pageTitle} | ProgettoNoDrugs` : 'ProgettoNoDrugs'}</title>
            </Head>
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" strategy="lazyOnload"/>
            <NavBar selected={navBarSelected} />
            { children }
            { showFooter && <Footer /> }
        </>
    )
}