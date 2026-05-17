import styles from "../styles/Gallery.module.css";

const InputFieldErrorMessage = () => {
    return (
        <p className={styles.error}>Field is empty</p>
    );
}

export default InputFieldErrorMessage;