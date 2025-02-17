import { useEffect, useState } from "react";
import Module from "./Module/Module";

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
        <>
            <h1>Modules component</h1>
            {modules.map((module) => (
                <Module key={module._id} module={module} />
            ))}
        </>
    );
}

export default Modules;
