import styles from './User.module.scss';
import { NavLink } from 'react-router-dom';

function User(props) {
    function follow() {
        props.follow(props.id)
    }

    function unFollow() {
        props.unFollow(props.id)
    }

    return (
        <div className={styles.user}>
            <div className={styles.wrapper_avatar}>
                <NavLink to={'/profile/' + props.id}>
                    <img className={styles.avatar} src={props.avatar === null ? 'https://cdn-icons-png.flaticon.com/512/147/147142.png' : props.avatar} alt="avatar" />
                </NavLink>
                {props.followed ? <button onClick={unFollow} className={styles.follow_button}>Unfollow</button>
                                :<button onClick={follow} className={styles.follow_button}>Follow</button>
                }
            </div>
            <div className={styles.wrapper_info}>
                <span  className={styles.name}>{props.name}</span>
                <p className={styles.status}>{'props.status'}</p>
            </div>
            <div className={styles.wrapper_location}>
                <span className={styles.country}>{'props.location.country'}</span>
                <span className={styles.city}>{'props.location.city'}</span>
            </div>
        </div>
    )
}

export default User;