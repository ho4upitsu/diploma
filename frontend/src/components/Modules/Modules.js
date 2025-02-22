import { useEffect, useState } from "react";
import Module from "./Module/Module";
import styles from "./Modules.module.css";
import Modal from "../ModuleModal/ModuleModal";

function Modules() {
    const [modules, setModules] = useState([]);
    const [selectedModule, setSelectedModule] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5000/module/getAllModules", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setModules(data);
                console.log(data);
            })
            .catch((error) => console.error(error));
    }, []);

    const handleModuleClick = (module) => {
        setSelectedModule(module);
    };

    const closeModal = () => {
        setSelectedModule(null);
    };

    return (
        <div className={styles.modulesContainer}>
            {modules.map((module) => (
                <div key={module._id} onClick={() => handleModuleClick(module)}>
                    <Module module={module} />
                </div>
            ))}
            {selectedModule && (
                <Modal module={selectedModule} onClose={closeModal} />
            )}
        </div>
    );
}

export default Modules;
