import styles from '../styles/Header.module.css'
const Header = () => {
    return (
        <div>
            <h1 className={styles.title}>Web Dev News</h1>
            <p className={styles.description}>
                Keep up to date with the latest news
            </p>
        </div>
    )
}

export default Header
