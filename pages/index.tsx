import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/global/layout'
import NavBar from '../components/global/navbar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <Layout navBarSelected='articoli'>
      <p>Lol</p>
    </Layout>
  )
}

export default Home
