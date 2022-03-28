import styles from "./MessagesUser.module.scss";

function MessagesUser(props) {
    

    return (
    <div className={styles.message_wrapper}>
        <img src="#" alt="avatar" />
        <div className={styles.message}>{props.message}</div>
    </div>
    )
}

export default MessagesUser;