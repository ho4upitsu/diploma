import Topbar from "../../components/Topbar/Topbar";
import styles from "./Main.module.css";

function Main() {
    return (
        <div className={styles.container}>
            <Topbar />
            <h1 className={styles.header}>Main Page</h1>
        </div>
    );
}

export default Main;
