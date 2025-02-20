import styles from "./ProgrammerInfo.module.css";
import firstPlace from "./placeImgs/firstPlace.png";
import secondPlace from "./placeImgs/secondPlace.png";
import thirdPlace from "./placeImgs/thirdPlace.png";
function ProgrammerInfo({ username, points, place }) {
    return (
        <div className={styles.programmerContainer} key={username}>
            {place === 1 ? (
                <img
                    className={styles.placeIcon}
                    src={firstPlace}
                    alt="First Place"
                />
            ) : place === 2 ? (
                <img
                    className={styles.placeIcon}
                    src={secondPlace}
                    alt="Second Place"
                />
            ) : place === 3 ? (
                <img
                    className={styles.placeIcon}
                    src={thirdPlace}
                    alt="Third Place"
                />
            ) : (
                <h1 className={styles.programmerPlace}>{place}</h1>
            )}

            <h1 className={styles.programmerName}>{username}</h1>
            <h1 className={styles.programmerPoints}>{points}</h1>
        </div>
    );
}

export default ProgrammerInfo;
