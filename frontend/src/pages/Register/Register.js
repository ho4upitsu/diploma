import styles from "./Register.module.css";
import RegisterForm from "../../components/Register/RegisterForm";
function Register() {
    return (
        <div className={styles.container}>
            <RegisterForm />
        </div>
    );
}

export default Register;
