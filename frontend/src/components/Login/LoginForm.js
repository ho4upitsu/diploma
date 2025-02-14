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
                <input className={styles.submitButton} type={"submit"} />
            </form>
        </div>
    );
}

export default LoginForm;
