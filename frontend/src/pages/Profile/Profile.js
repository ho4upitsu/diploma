import ProfileComponent from "../../components/Profile/Profile";
import Topbar from "../../components/Topbar/Topbar";
import UserStats from "../../components/UserStats/UserStats";
import styles from "./Profile.module.css";

function Profile() {
    return (
        <>
            <Topbar />
            <div className={styles.profileContainer}>
                <ProfileComponent />
                <UserStats />
            </div>
        </>
    );
}

export default Profile;
