import { useEffect } from "react";
import ModulesComponent from "../../components/Modules/Modules";
import Topbar from "../../components/Topbar/Topbar";
// import Sidebar from "../../components/Sidebar/Sidebar"; // Додаємо ще один компонент
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
                {/* <Sidebar /> Наприклад, меню зліва */}
                <div className={styles.modulesWrapper}>
                    <ModulesComponent />
                </div>
            </div>
        </div>
    );
}

export default Modules;
