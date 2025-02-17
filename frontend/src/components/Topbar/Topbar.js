import styles from "./Topbar.module.css";

function Topbar() {
    return (
        <div className={styles.topbarContainer}>
            <span className={styles.logo}>Logo</span>
            <input
                className={styles.topbarSearchInput}
                type="text"
                placeholder="Search..."
            />
            <div className={styles.links}>
                <span className={styles.link}>Top Programmers</span>
                <span className={styles.link}>Modules</span>
                <span className={styles.link}>Profile</span>
            </div>
        </div>
    );
}

export default Topbar;
