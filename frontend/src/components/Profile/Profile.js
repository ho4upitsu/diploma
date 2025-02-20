import styles from "./Profile.module.css";
import pfp from "./profile.webp";

function Profile() {
    return (
        <div className={styles.profileComponentContainer}>
            <div className={styles.profileContainer}>
                <div>
                    <img
                        className={styles.profilePicture}
                        src={pfp}
                        alt="Profile"
                    />
                </div>
                <div>
                    <h1 className={styles.profileHeader}>Profile</h1>
                    <p className={styles.profileText}>
                        This is the profile page
                    </p>
                </div>
            </div>
            <div>
                <h2 className={styles.profileHeader}>Links</h2>
                <ul className={styles.profileLinks}>
                    <li>Github</li>
                    <li>Discord</li>
                    <li>Telegram</li>
                </ul>
            </div>
        </div>
    );
}

export default Profile;
