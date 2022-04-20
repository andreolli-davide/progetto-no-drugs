import type { NextPage } from 'next'
import ArticlesContainer from '../components/articoli/articlesContainer'
import HeroBanner from '../components/articoli/heroBanner'
import Layout from '../components/global/layout'

const Home: NextPage = () => {
    return (
        <Layout navBarSelected='articoli'>
            <HeroBanner />
            <ArticlesContainer />
        </Layout>
    )
}

export default Home
