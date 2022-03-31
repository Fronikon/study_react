import styles from "./Profile.module.scss";
import Description from "./Description/Description";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

function Profile(props) {
    return (
        <div className={styles.profile}>
            <div className={styles.mainInfo}>
                <img className={styles.avatar} src="https://image.similarpng.com/very-thumbnail/2021/05/Lion-shield-luxury-logo-icon-on-transparent-background-PNG.png" alt="avatar" />
                <Description />
            </div>
            <MyPostsContainer store={props.store}/>
        </div>
    );
}

export default Profile;