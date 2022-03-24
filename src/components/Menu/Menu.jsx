import styles from './Menu.module.scss'

function Menu() {
    return (
        <nav className={styles.menu}>
            <ul>
                <li className={styles.item}>
                    <a href="/profile">Profile</a>
                </li>
                <li className={styles.item}>
                    <a href="/dialogs">Friends</a></li>
                <li className={styles.item}><a href="#">Messages</a>
                </li>
                <li className={styles.item}>
                    <a href="#">Music</a></li>
                <li className={styles.item}><a href="#">Video</a>
                </li>
                <li className={styles.item}>
                    <a href="#">Settings</a>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;