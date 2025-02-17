import styles from "./TestTask.module.css";

function TestTask({ task }) {
    return (
        <li className="taskItem">
            <h2 className={styles.taskHeader}>{task.title}</h2>
            <div className={styles.taskOptionsContainer}>
                {task.options.map((option, index) => (
                    <label key={index} className={styles.taskOption}>
                        <input
                            type="radio"
                            name={`option-${task._id}`} // Тепер кожен task має унікальне ім'я групи
                            value={option.option}
                        />
                        {option.option}
                    </label>
                ))}
            </div>
        </li>
    );
}

export default TestTask;
