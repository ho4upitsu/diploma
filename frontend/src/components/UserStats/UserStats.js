import styles from "./UserStats.module.css";

function UserStats() {
    return (
        <div className={styles.userStastContainer}>
            <h1 className={styles.userStatsHeader}>User Stats</h1>
            <ul className={styles.userStatsItems}>
                <li>Registration date: 30.12.2004</li>
                <li>Position this month: 1</li>
                <li>Completed modules: 5</li>
                <li>Skipped modules: 3</li>
                <li>Average score: 8.5</li>
                <li>Total score: 500</li>
            </ul>
        </div>
    );
}

export default UserStats;
