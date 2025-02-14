import styles from "./Login.module.css";
import LoginForm from "../../components/Login/LoginForm";

function Login() {
    return (
        <div className={styles.container}>
            <LoginForm />
        </div>
    );
}

export default Login;
