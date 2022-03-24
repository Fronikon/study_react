import styles from "./MyPosts.module.scss";
import Post from "./Post/Post";

function MyPosts() {
    return (
        <div className={styles.myPosts}>
            <h3 className="title">Посты:</h3>
            <div className={styles.container}>
                <Post coment="Hello World!" />
                <Post coment="Прикольная стена." />
                <Post coment="Прикольная стена." />
                <Post coment="Прикольная стена." />
                <Post coment="Прикольная стена." />
                <Post coment="Прикольная стена." />
                <Post coment="Прикольная стена." />
                <Post coment="Прикольная стена." />
                <Post coment="Прикольная стена." />
                <Post coment="Прикольная стена." />
            </div>
        </div>
    );
}

export default MyPosts;