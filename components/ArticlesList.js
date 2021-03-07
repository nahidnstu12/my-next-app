import styles from '../styles/Article.module.css'
import ArticleItem from './ArticleItem'

const ArticlesList = ({articles}) => {
    return (
        <div className={styles.grid}>
            {articles.map(art =>
                <ArticleItem key={art.id} article={art} />
            )}
            
        </div>
    )
}

export default ArticlesList
