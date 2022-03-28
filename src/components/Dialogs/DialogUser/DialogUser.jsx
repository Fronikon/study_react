import styles from "./DialogUser.module.scss";
import { NavLink } from 'react-router-dom';

function DialogUser(props) {
    return (
        <div className={styles.dialog}>
            <img src={props.avatar} alt="avatar" />
            <NavLink to={props.id} className={navData => navData.isActive ? styles.active : ''}>
                {props.name}
            </NavLink>
        </div>
    )
}

export default DialogUser;