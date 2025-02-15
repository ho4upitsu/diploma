// src/components/CodeEditor/CodeEditor.js
import React, { useState } from "react";
import MonacoEditor from "@monaco-editor/react";

const CodeEditor = () => {
    const [code, setCode] = useState("// Напишіть свій код тут");

    const handleEditorChange = (value, event) => {
        setCode(value);
    };

    return (
        <div>
            <h1>Code Editor</h1>
            <MonacoEditor
                height="60vh"
                width="100vh"
                language="javascript" // Встановлює мову програмування
                theme="vs-dark" // Тема редактора
                value={code}
                onChange={handleEditorChange}
                options={{
                    selectOnLineNumbers: true,
                    automaticLayout: true,
                }}
            />
        </div>
    );
};

export default CodeEditor;
