import { useEffect } from "react";
import ModulesComponent from "../../components/Modules/Modules";
import Topbar from "../../components/Topbar/Topbar";
import ModulesText from "../../components/ModulesText/ModulesText";
import styles from "./Modules.module.css"; // Підключаємо стилі

function Modules() {
    useEffect(() => {
        // При вході на сторінку блокуємо скролінг основної сторінки
        document.body.style.overflow = "hidden";

        return () => {
            // Після виходу зі сторінки повертаємо скролінг
            document.body.style.overflow = "auto";
        };
    }, []);
    return (
        <div className={styles.pageContainer}>
            <Topbar />
            <div className={styles.content}>
                <div className={styles.modulesWrapper}>
                    <ModulesComponent />
                </div>
                <div className={styles.modulesTextWrapper}>
                    <ModulesText />
                </div>
            </div>
        </div>
    );
}

export default Modules;
