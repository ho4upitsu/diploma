import { useEffect, useState } from "react";
import TestTask from "./TestTask/TestTask";
import styles from "./TestTasks.module.css";

function TestTasks() {
    const [tasks, setTasks] = useState([]);
    const [answers, setAnswers] = useState({}); // Стан для відповідей

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

    // Функція для оновлення вибраних відповідей
    const handleAnswerChange = (taskId, answer) => {
        setAnswers((prev) => ({
            ...prev,
            [taskId]: answer,
        }));
    };

    // Функція для відправки відповідей
    const handleSubmit = async () => {
        try {
            const requests = Object.entries(answers).map(([taskId, answer]) =>
                fetch(`http://localhost:5000/test/checkTask/${taskId}`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ answer }),
                })
            );

            const responses = await Promise.all(requests);
            const results = await Promise.all(
                responses.map((res) => res.json())
            );

            console.log("Results:", results);
        } catch (error) {
            console.error("Error submitting answers:", error);
        }
    };

    return (
        <div>
            <h1 className={styles.taskHeader}>Test Tasks</h1>
            <ul className={styles.taskOptionsContainer}>
                {tasks.map((task) => (
                    <TestTask
                        key={task._id}
                        task={task}
                        onAnswerChange={handleAnswerChange}
                    />
                ))}
            </ul>
            <button className={styles.submitButton} onClick={handleSubmit}>
                Submit
            </button>
        </div>
    );
}

export default TestTasks;
