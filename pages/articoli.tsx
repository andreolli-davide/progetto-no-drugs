import type { GetStaticProps, NextPage } from 'next'
import { articlePreview } from '../components/articoli/article'
import ArticlesContainer, { ArticlesContainerProps } from '../components/articoli/articlesContainer'
import HeroBanner from '../components/articoli/heroBanner'
import Layout from '../components/global/layout'
import { db } from '../utils/database'

const Home: NextPage<ArticlesContainerProps> = ({ articles }) => {
    return (
        <Layout navBarSelected='articoli'>
            <HeroBanner />
            <ArticlesContainer articles={ articles }/>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async () => {

    const articles: articlePreview[] = await db.article.findMany({ select: {  
        id: true, description: true, school: true, 
        schoolClass: true, schoolImage: true, schoolYear: true, title: true
    }})
    
    return {
        props: {
            articles
        },
    };
};

export default Home
