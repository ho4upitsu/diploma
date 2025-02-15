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
                <span className={styles.link}>Homepage</span>
                <span className={styles.link}>Timeline</span>
            </div>
        </div>
    );
}

export default Topbar;
