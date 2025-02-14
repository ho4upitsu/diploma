import styles from "./LoginForm.module.css";

function LoginForm() {
    return (
        <div className={styles.loginContainer}>
            <h1 className={styles.header}>Log In</h1>

            <form className={styles.loginForm}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Username"
                />
                <input
                    className={styles.input}
                    type="email"
                    placeholder="Email"
                />
                <input
                    className={styles.input}
                    type="password"
                    placeholder="Password"
                />
                <input
                    className={styles.input}
                    type="password"
                    placeholder="Confirm Password"
                />
                <div className={styles.buttonContainer}>
                    <button className={styles.button}>Log in</button>
                    <button className={styles.button}>Not registered</button>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;
