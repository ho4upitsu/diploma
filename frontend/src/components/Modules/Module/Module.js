import styles from "./Module.module.css";
function Module({ module }) {
    const { name, description } = module;
    return (
        <div className={styles.moduleContainer}>
            <h1 className={styles.moduleHeader}>{name}</h1>
            <p className={styles.moduleDescription}>{description}</p>
        </div>
    );
}

export default Module;
