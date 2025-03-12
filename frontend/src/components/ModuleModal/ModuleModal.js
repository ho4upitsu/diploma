import styles from "./ModuleModal.module.css";
import { useEffect, useState } from "react";

function Modal({ module, onClose }) {
    const [lectule, setLecture] = useState([]);
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch(
            `http://localhost:5000/api/test-task/getTestTasksForModule/${module._id}`,
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

    useEffect(() => {
        console.log("Fetching lecture for module:", module?._id);

        const fetchLecture = async () => {
            if (!module?._id) return;

            try {
                const response = await fetch(
                    `http://localhost:5000/api/lecture/getLectureForModule/${module._id}`,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );
                if (!response.ok) {
                    throw new Error("Failed to fetch lecture");
                }
                const data = await response.json();
                setLecture(data);
            } catch (error) {
                console.error("Error fetching lecture:", error);
            }
        };

        fetchLecture();
    }, [module?._id]);

    console.log(
        `http://localhost:5000/api/lecture/getLectureForModule/${module._id}`
    );

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div
                className={styles.modalContent}
                onClick={(e) => e.stopPropagation()}
            >
                <div>{lectule.name}</div>
                {tasks.map((tasks) => (
                    <div key={tasks._id}>
                        <h2>{tasks.name}</h2>
                    </div>
                ))}
                <button onClick={onClose}>Закрити</button>
            </div>
        </div>
    );
}

export default Modal;
