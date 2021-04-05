import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import ArticlesList from '../components/ArticlesList'

export default function Home({articles}) {
  console.log(articles)
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h3>Hello Next Js</h3>
      <ArticlesList articles={articles} />

    </div>
  )
}

export const getStaticProps = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
    const articles = await res.json()

    return{
      props:{
        articles
      }
    }
}