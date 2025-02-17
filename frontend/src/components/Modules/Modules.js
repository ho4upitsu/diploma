import { useEffect, useState } from "react";
import Module from "./Module/Module";
import styles from "./Modules.module.css";

function Modules() {
    const [modules, setModules] = useState([]);

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
    return (
        <div className={styles.modulesContainer}>
            {modules.map((module) => (
                <Module key={module._id} module={module} />
            ))}
        </div>
    );
}

export default Modules;
