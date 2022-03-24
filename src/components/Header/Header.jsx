import styles from './Header.module.scss'

function Header() {
    return (
        <header className={styles.header}>
            <img src="https://www.logodesign.net/images/illustration-logo.png" alt="logo"></img>
            <h1 className={styles.title}>В-Курсе</h1>
        </header>
    );
}

export default Header;