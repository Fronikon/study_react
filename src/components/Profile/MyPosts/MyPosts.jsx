import styles from "./MyPosts.module.scss";
import Post from "./Post/Post";

function MyPosts(props) {
    let postsElements = props.posts.map( (cur) => <Post key={cur.id} comment={cur.comment} />)

    return (
        <div className={styles.myPosts}>
            <h3 className="title">Посты:</h3>
            <div className={styles.container}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;