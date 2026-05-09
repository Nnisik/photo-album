import styles from "../styles/Header.module.css";

const Header = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.logo}>MESTO</h2>
        </div>
    );
}

export default Header;