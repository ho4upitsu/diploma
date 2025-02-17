import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import "./App.css";
import CodeEditor from "./pages/CodeEditor/CodeEditor";
import TestTasks from "./components/TestTasks/TestTasks";
import Modules from "./pages/Modules/Modules";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/editor" element={<CodeEditor />} />
                    <Route path="/modules" element={<Modules />} />
                    <Route path="/test" element={<TestTasks />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
