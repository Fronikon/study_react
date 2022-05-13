import styles from './Header.module.scss'
import { NavLink } from 'react-router-dom';

function Header(props) {
    return (
        <header className={styles.header}>
            <img src="https://www.logodesign.net/images/illustration-logo.png" alt="logo"></img>
            <h1 className={styles.title}>В-Курсе</h1>
            <div className={styles.loginContainer}>
            {props.isAuth ? 
                <div>{props.login} - <button onClick={props.logOut}>LogOut</button></div> :
                <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;