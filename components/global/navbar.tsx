import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link';

export type NavBarProps = {
    selected?: "articoli" | "informazioni" | "nuovoArticolo" | undefined
}

export default function NavBar({ selected }: NavBarProps) {

    const { user, error } = useUser()

    return (
        <nav className="navbar navbar-light navbar-expand-md py-3">
            <div className="container"><Link href="/articoli" passHref={ true }><div className="navbar-brand d-flex align-items-center"><span className="bs-icon-sm bs-icon-rounded bs-icon-primary d-flex justify-content-center align-items-center me-2 bs-icon">
                <svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="bi bi-bezier" fill="currentColor"><path d="M8,19a3,3,0,0,1-3-3V8A3,3,0,0,1,8,5,1,1,0,0,0,8,3,5,5,0,0,0,3,8v8a5,5,0,0,0,5,5,1,1,0,0,0,0-2Zm7.71-3.29a1,1,0,0,0,0-1.42L13.41,12l2.3-2.29a1,1,0,0,0-1.42-1.42L12,10.59,9.71,8.29A1,1,0,0,0,8.29,9.71L10.59,12l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l2.29,2.3a1,1,0,0,0,1.42,0ZM16,3a1,1,0,0,0,0,2,3,3,0,0,1,3,3v8a3,3,0,0,1-3,3,1,1,0,0,0,0,2,5,5,0,0,0,5-5V8A5,5,0,0,0,16,3Z" /></svg>
            </span><span>Progetto No Drugs</span></div></Link><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navcol-1">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item"><a className={selected === "articoli" ? "nav-link active" : "nav-link"} href="/it/articoli">Articoli</a></li>
                        <li className="nav-item"><a className={selected === "informazioni" ? "nav-link active" : "nav-link"} href="/it/informazioni">Informazioni</a></li>
                        { user && <li className="nav-item"><a className={selected === "nuovoArticolo" ? "nav-link active" : "nav-link"} href="/it/articoli/new">Nuovo Articolo</a></li> }
                    </ul>
                    { !user ?  
                        <Link href="/api/auth/login" passHref><button className="btn btn-primary" type="button">Login</button></Link> : 
                        <Link href="/api/auth/logout" passHref><button className="btn btn-primary" type="button">Logout</button></Link> 
                    }
                </div>
            </div>
        </nav>
    );
}