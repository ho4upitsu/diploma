import styles from "./RegisterForm.module.css";

function RegisterForm() {
    return (
        <div className={styles.loginContainer}>
            <h1 className={styles.header}>Log In</h1>

            <form className={styles.loginForm}>
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
                <div className={styles.buttonContainer}>
                    <button className={styles.button}>Register</button>
                    <button className={styles.button}>Log in</button>
                </div>
            </form>
        </div>
    );
}

export default RegisterForm;
