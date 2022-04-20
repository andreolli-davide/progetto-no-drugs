import 'bootstrap/dist/css/bootstrap.css'
import '../styles/Navbar-With-Button.css'
import '../styles/Home.module.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
