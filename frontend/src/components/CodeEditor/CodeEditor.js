import React, { useState } from "react";
import MonacoEditor from "@monaco-editor/react";
import styles from "./CodeEditor.module.css";

const CodeEditor = () => {
    const [code, setCode] = useState("// Напишіть свій код тут");
    const [response, setResponse] = useState("");

    const handleEditorChange = (value) => {
        setCode(value || ""); // Уникаємо null або undefined
    };

    function sendCode(event) {
        event.preventDefault(); // Запобігає перезавантаженню сторінки
        fetch("http://localhost:5000/code/execute", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ code }),
        })
            .then((response) => response.json())
            .then((data) => setResponse(data))
            .catch((error) => console.error(error));
    }

    return (
        <div className={styles.container}>
            <h1>Code Editor</h1>
            <MonacoEditor
                height="60vh"
                language="javascript"
                theme="vs-dark"
                className={styles.editor}
                defaultValue="// Напишіть свій код тут"
                onChange={handleEditorChange}
                options={{ selectOnLineNumbers: true, automaticLayout: true }}
            />
            <form onSubmit={sendCode}>
                <button type="submit">Send</button>
            </form>
            {response && <p>{response}</p>}
        </div>
    );
};

export default CodeEditor;
