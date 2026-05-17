import Header from "./components/Header.tsx";
import UserProfile from "./features/profile/UserProfile.tsx";
import GallerySection from "./features/gallery/GallerySection.tsx";
import { useState } from "react";
import styles from "./styles/Gallery.module.css";

function App() {
    const handleFormSubmit = () => {
        if (imageCaption === "" || imageURL === "") {
            alert("Some fields were left empty");
            return;
        }

        const newPostData = {
            caption: imageCaption,
            image_url: imageURL
        };

        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newPostData)
        };
        fetch('http://localhost:3000/posts', requestOptions)
            .then(response => response.json())
            .then(() => {
                setImageCaption("");
                setImageURL("");
                handleVisibility;
            })
            .catch((err) => console.error(err));
    };

    const [isVisible, changeVisibility] = useState<boolean>(false);

    const [imageCaption, setImageCaption] = useState<string>("");
    const [imageURL, setImageURL] = useState<string>("");

    const handleVisibility = () => {
        changeVisibility(!isVisible);
    }

    const handleImageCaptionChange = (e) => {
        setImageCaption(e.target.value);
    }

    const handleImageURLChange = (e) => {
        setImageURL(e.target.value);
    }

    return (
        <>
            <Header />
            <UserProfile />
            <div className={styles.menu}>
                <button className={styles.button} onClick={handleVisibility}>+</button>
                {isVisible &&
                    <div  className={styles.modal}>
                        <div className={styles.modalContainer}>
                            <button className={styles.modalCloseButton} onClick={handleVisibility}>x</button>
                            <div className={styles.modalForm}>
                                <h2>Create new</h2>
                                <input
                                    type={"text"}
                                    value={imageCaption}
                                    onChange={handleImageCaptionChange}
                                />
                                <input
                                    type={"text"}
                                    value={imageURL}
                                    onChange={handleImageURLChange}
                                />
                                <button className={styles.button} onClick={handleFormSubmit}>Create</button>
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
