import { useRef } from "react";
import styles from "./MyPosts.module.scss";
import Post from "./Post/Post";

function MyPosts(props) {
    let postsElements = props.posts.map((cur) => <Post key={cur.id} comment={cur.comment} />)
    let newPostElement = useRef();

    function addPost() {
        props.addPost();
    }

    function onPostChange() {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    
    return (
        <div className={styles.myPosts}>
            <div className={styles.new_post}>
                <textarea ref={newPostElement}
                    onChange={onPostChange}
                    value={props.newTextPost}
                    cols="40"
                    rows="5"
                    placeholder="Описание..."></textarea>
            </div>
            <button onClick={addPost}>Новый пост</button>
            <h3 className="title">Посты:</h3>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;