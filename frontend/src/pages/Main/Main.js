import Topbar from "../../components/Topbar/Topbar";
import styles from "./Main.module.css";

function Main() {
    return (
        <div>
            <Topbar />
            <div className={styles.helloContainer}>
                <h1 className={styles.helloHeader}>
                    Йо, вітаємо у [назва платформи]! 🚀
                </h1>
                <p className={styles.helloText}>
                    Ну що, готовий прокачати свій мозок? Тут усе просто: обираєш
                    модулі, вчишся у своєму темпі, виконуєш завдання і стаєш
                    крутішим у тому, що робиш.
                </p>
                <p className={styles.helloText}>🔥 Що тут цікавого?</p>
                <ul className={styles.helloList}>
                    <li>✔️ Ніякої нудноти — тільки корисні штуки.</li>
                    <li>✔️ Завдання, які реально допоможуть зрозуміти тему.</li>
                    <li>
                        ✔️ Вчися коли хочеш — без жорстких дедлайнів і напрягу.
                    </li>
                </ul>
                <p className={styles.helloText}>
                    Все, що тобі треба — просто натиснути кнопку і почати.
                    Давай, не зволікай, знання самі себе не здобудуть! 😏
                </p>
                <p className={styles.helloText}>🔴 Тисни та вперед до знань!</p>
            </div>
        </div>
    );
}

export default Main;
