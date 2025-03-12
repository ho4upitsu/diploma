import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginForm.module.css";

function LoginForm() {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate();

    const loginUserHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || "Something went wrong");
            }
            setPassword("");
            setEmail("");
        } catch (error) {}
    };
    return (
        <div className={styles.loginContainer}>
            <h1 className={styles.header}>Log In</h1>

            <form className={styles.loginForm} onSubmit={loginUserHandler}>
                <input
                    className={styles.input}
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className={styles.input}
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className={styles.buttonContainer}>
                    <button type="submit" className={styles.button}>
                        Log in
                    </button>
                    <button
                        type="button"
                        className={styles.button}
                        onClick={() => navigate("/register")}
                    >
                        Not registered
                    </button>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;
