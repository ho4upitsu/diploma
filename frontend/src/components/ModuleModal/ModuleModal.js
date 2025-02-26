import styles from "./ModuleModal.module.css";
import { useEffect, useState } from "react";

function Modal({ module, onClose }) {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch(
            `http://localhost:5000/task/getTaskGroupsByModuleId/${module._id}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
            .then((response) => response.json())
            .then((data) => {
                setTasks(data);
            })
            .catch((error) => console.error(error));
    }, [module._id]);
    console.log(module._id);
    console.log(tasks);
    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div
                className={styles.modalContent}
                onClick={(e) => e.stopPropagation()}
            >
                {tasks.map((tasks) => (
                    <div key={tasks._id}>
                        <h2>{tasks._id}</h2>
                    </div>
                ))}
                <button onClick={onClose}>Закрити</button>
            </div>
        </div>
    );
}

export default Modal;
