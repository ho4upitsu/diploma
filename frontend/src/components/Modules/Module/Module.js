import styles from "./Module.module.css";
import easyIcon from "./DifficultyImages/easy.png";
import mediumIcon from "./DifficultyImages/medium.png";
import hardIcon from "./DifficultyImages/hard.png";

function Module({ module }) {
    const { name, description, difficulty } = module;

    const getDifficultyIcon = () => {
        switch (difficulty) {
            case "easy":
                return easyIcon;
            case "medium":
                return mediumIcon;
            case "hard":
                return hardIcon;
            default:
                return null;
        }
    };

    return (
        <div className={styles.moduleContainer}>
            <h1 className={styles.moduleHeader}>{name}</h1>
            <div className={styles.difficultyContainer}>
                <img
                    src={getDifficultyIcon()}
                    alt={difficulty}
                    className={styles.difficultyIcon}
                />
                <p className={styles.difficultyText}>
                    {difficulty.toUpperCase()}
                </p>
            </div>
            <p className={styles.moduleDescription}>{description}</p>
        </div>
    );
}

export default Module;
