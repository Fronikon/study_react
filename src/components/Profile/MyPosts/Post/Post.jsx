import styles from "./Post.module.scss";

function Post(props) {
    return (
        <div className={styles.post}>
            <img className={styles.avatar} src="https://image.similarpng.com/very-thumbnail/2021/05/Lion-shield-luxury-logo-icon-on-transparent-background-PNG.png" alt="avatar" />
            <div className={styles.name}>Дима</div>
            <p className={styles.coment}>{props.coment}</p>
        </div>
    );
}

export default Post;