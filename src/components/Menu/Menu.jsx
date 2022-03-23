import styles from './css/Menu.module.css'

function Menu() {
    return (
        <nav className={styles.menu}>
            <ul>
                <li className={styles.item}>Profile</li>
                <li className={styles.item}>Friends</li>
                <li className={styles.item}>Messages</li>
                <li className={styles.item}>Music</li>
                <li className={styles.item}>Video</li>
                <li className={styles.item}>Settings</li>
            </ul>
        </nav>
    );
}

export default Menu;