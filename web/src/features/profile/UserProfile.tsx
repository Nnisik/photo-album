import styles from "../../styles/User.module.css";
import file from "../../assets/images/jpg/kim-becker-EoCwQ5PerAs-unsplash.jpg"

const UserProfile = () => {
    return (
        <div className={styles.container}>
            <img src={file} alt={"Profile image"} className={styles.profileImage} />
            <div className={styles.userSection}>
                <h3>Username</h3>
                <p>short profile description</p>
            </div>
        </div>
    );
}

export default UserProfile;