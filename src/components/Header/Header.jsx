import styles from './Header.module.scss'
import { NavLink } from 'react-router-dom';

function Header(props) {
    return (
        <header className={styles.header}>
            <img src="https://www.logodesign.net/images/illustration-logo.png" alt="logo"></img>
            <h1 className={styles.title}>В-Курсе</h1>
            <div className={styles.loginContainer}>
            {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
                
            </div>
        </header>
    );
}

export default Header;