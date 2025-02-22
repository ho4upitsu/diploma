import styles from "./ModuleModal.module.css";

function Modal({ module, onClose }) {
    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div
                className={styles.modalContent}
                onClick={(e) => e.stopPropagation()}
            >
                <h2>{module.name}</h2>
                <p>{module.description}</p>
                <button onClick={onClose}>Закрити</button>
            </div>
        </div>
    );
}

export default Modal;
