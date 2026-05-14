import Header from "./components/Header.tsx";
import UserProfile from "./features/profile/UserProfile.tsx";
import GallerySection from "./features/gallery/GallerySection.tsx";
import { useState } from "react";
import styles from "./styles/Gallery.module.css";

function App() {
    const handleClick = () => {
        changeVisibility(!isVisible);
    }

    const [isVisible, changeVisibility] = useState<boolean>(true);


    return (
        <>
            <Header />
            <UserProfile />
            <div className={styles.menu}>
                <button className={styles.button} onClick={handleClick}>+</button>
                {isVisible &&
                    <div  className={styles.modal}>
                        <div className={styles.modalContainer}>
                            <button className={styles.modalCloseButton} onClick={handleClick}>x</button>
                            <div className={styles.modalForm}>
                                <h2>Create new</h2>
                                <input type={"text"} />
                                <input type={"text"} />
                                <button className={styles.button} onClick={handleClick}>Create</button>
                            </div>
                        </div>
                    </div>
                }
            </div>
            <GallerySection />
        </>
    );
}

export default App
