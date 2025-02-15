import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./RegisterForm.module.css";

function RegisterForm() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmedPassword, setConfirmedPassword] = useState("");

    const navigate = useNavigate(); // Хук для навігації

    const registerUserHandler = async (e) => {
        e.preventDefault();
        try {
            if (password !== confirmedPassword) {
                throw new Error("Passwords do not match");
            }
            const response = await fetch(
                "http://localhost:5000/auth/register",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ username, email, password }),
                }
            );

            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || "Something went wrong");
            }

            console.log("User registered:", data);

            // Очищуємо поля після успішної реєстрації
            setUsername("");
            setEmail("");
            setPassword("");
            setConfirmedPassword("");

            // Редірект на головну сторінку або в особистий кабінет
        } catch (error) {
            console.error("Error registering user:", error);
        }
    };

    return (
        <div className={styles.loginContainer}>
            <h1 className={styles.header}>Register</h1>

            <form className={styles.loginForm} onSubmit={registerUserHandler}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
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
                <input
                    className={styles.input}
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmedPassword}
                    onChange={(e) => setConfirmedPassword(e.target.value)}
                />
                <div className={styles.buttonContainer}>
                    <button className={styles.button} type="submit">
                        Register
                    </button>
                    <button
                        className={styles.button}
                        type="button"
                        onClick={() => navigate("/login")}
                    >
                        Already have an account
                    </button>
                </div>
            </form>
        </div>
    );
}

export default RegisterForm;
