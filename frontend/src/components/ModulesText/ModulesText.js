import styles from "./ModulesText.module.css";

function ModuleText() {
    return (
        <div className={styles.modulesContainer}>
            <h1 className={styles.modulesHeader}>
                Готовий заглибитися в модулі? 🚀
            </h1>
            {/* <p className={styles.modulesText}>
                Вибирай модуль, вчися у своєму темпі, і рухайся до нових вершин.
                Вчися так, як зручно саме тобі.
            </p> */}
            <p className={styles.modulesText}>🔥 Що чекає на тебе?</p>
            <ul className={styles.modulesList}>
                <li>✔️ Тільки практичні та корисні теми для твого розвитку.</li>
                <li>✔️ Завдання, які допоможуть засвоїти матеріал на 100%.</li>
                <li>
                    ✔️ Можливість вчитися в будь-який час і без жодних
                    дедлайнів.
                </li>
            </ul>
            <p className={styles.modulesText}>
                Ти готовий прокачатися до нових висот? 😎
            </p>
            <p className={styles.modulesText}>
                🔴 Тисни і почни свою подорож до знань прямо зараз!
            </p>
        </div>
    );
}

export default ModuleText;
