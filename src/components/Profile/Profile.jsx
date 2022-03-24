import styles from "./Profile.module.scss";
import Description from "./Description/Description";
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
    return (
        <div className={styles.profile}>
            <div className={styles.mainInfo}>
                <img className={styles.avatar} src="https://image.similarpng.com/very-thumbnail/2021/05/Lion-shield-luxury-logo-icon-on-transparent-background-PNG.png" alt="avatar" />
                <Description />
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;