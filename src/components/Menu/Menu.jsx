import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss'

function Menu() {
    return (
        <nav className={styles.menu}>
            <ul>
                <li className={styles.item}>
                    <NavLink to="/profile" className={ navData => navData.isActive ? styles.active : ""}>Profile</NavLink>
                </li>

                <li className={styles.item}>
                    <NavLink to="/dialogs" className={ navData => navData.isActive ? styles.active : ""}>Messages</NavLink>
                </li>

                <li className={styles.item}>
                    <a href="#">Friends</a>
                </li>

                <li className={styles.item}>
                    <a href="#">Music</a>
                </li>

                <li className={styles.item}>
                    <a href="#">Video</a>
                </li>
                
                <li className={styles.item}>
                    <a href="#">Settings</a>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;