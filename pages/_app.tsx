import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/Navbar-With-Button.css'
import '../styles/Home.module.css'
import '../styles/editor.scss'
import type { AppProps } from 'next/app'
import { UserProvider } from '@auth0/nextjs-auth0'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <UserProvider>
            <Component {...pageProps} />
        </UserProvider>
    )
}

export default MyApp
