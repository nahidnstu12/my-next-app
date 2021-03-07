import Link from "next/link"
import styles from '../../../styles/Article.module.css'

const article = ({article}) => {
    console.log(article)
    return (
        <div className={styles.card}>
            <h1>{article.title}</h1>
            <p>{article.body}</p>
            <br />
            <Link href="/">Go Back</Link>
        </div>
    )
}

export default article


// export const getServerProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
  
//     const article = await res.json()
  
//     return {
//       props: {
//         article,
//       },
//     }
// }

export const getStaticProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
  
    const article = await res.json()
  
    return {
      props: {
        article,
      },
    }
}

export const getStaticPaths = async () =>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  
    const articles = await res.json()

    const ids = articles.map(art => art.id)
    const paths = ids.map(id => ({
        params:{ id: id.toString()}
    }))

    return {
        paths,
        fallback:false
    }
}
  