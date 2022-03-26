import styles from "./DialogItem.module.scss";
import { NavLink } from 'react-router-dom';

function DialogItem(props) {
    return (
        <div className={styles.dialog}>
            <NavLink to={props.id} className={navData => navData.isActive ? styles.active : ""}>
                {props.name}
            </NavLink>
        </div>
    )
}

export default DialogItem;