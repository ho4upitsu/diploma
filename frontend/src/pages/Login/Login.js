import styles from "./Login.module.css";
import LoginForm from "./LoginForm";

function Login() {
    return (
        <div className={styles.container}>
            <LoginForm />
        </div>
    );
}

export default Login;
