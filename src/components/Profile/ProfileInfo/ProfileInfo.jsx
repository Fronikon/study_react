import Preloader from '../../common/Preloader/Preloader';
import styles from './ProfileInfo.module.scss';

function ProfileInfo(props) {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={styles.profileInfo}>
            <div className={styles.avatarContainer}>
                <img className={styles.avatar} src={props.profile.photos.large || 'https://cdn-icons-png.flaticon.com/512/147/147142.png'} alt="avatar" />
            </div>
            <div>
                <div className={styles.nameContainer}>
                    <h3>My name:</h3>
                    <span className={styles.fullName}>{props.profile.fullName}</span>
                </div>
                <div>
                    <h3 className="title">About me:</h3>
                    <p className={styles.description}>{props.profile.aboutMe}</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;

