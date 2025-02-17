import { useEffect, useState } from "react";
import TestTask from "./TestTask/TestTask";
import styles from "./TestTasks.module.css";

function TestTasks() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/test/getAllTestTasks", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setTasks(data);
                console.log(data);
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        <div>
            <h1 className={styles.taskHeader}>Test Tasks</h1>
            <ul className={styles.taskOptionsContainer}>
                {tasks.map((task, index) => (
                    <TestTask task={task} key={index} />
                ))}
            </ul>
        </div>
    );
}

export default TestTasks;
