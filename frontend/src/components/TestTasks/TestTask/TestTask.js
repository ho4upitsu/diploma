import styles from "./TestTask.module.css";

function TestTask({ task, onAnswerChange }) {
    return (
        <li className="taskItem">
            <h2 className={styles.taskHeader}>{task.title}</h2>
            <div className={styles.taskOptionsContainer}>
                {task.options.map((option, index) => (
                    <label key={index} className={styles.taskOption}>
                        <input
                            type="radio"
                            name={`option-${task._id}`}
                            value={option.option}
                            onChange={(e) =>
                                onAnswerChange(task._id, e.target.value)
                            }
                        />
                        {option.option}
                    </label>
                ))}
            </div>
        </li>
    );
}

export default TestTask;
