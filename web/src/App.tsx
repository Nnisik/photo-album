import Header from "./components/Header.tsx";
import UserProfile from "./features/profile/UserProfile.tsx";
import GallerySection from "./features/gallery/GallerySection.tsx";
import { useState } from "react";
import styles from "./styles/Gallery.module.css";
import InputFieldErrorMessage from "./components/InputFieldErrorMessage.tsx";

function App() {

    const [isVisible, changeVisibility] = useState<boolean>(false);
    const [reqSuccess, setReqSuccess] = useState<boolean>(false);

    const [imageCaption, setImageCaption] = useState<string>("");
    const [imageURL, setImageURL] = useState<string>("");

    const [emptyImageCaption, handleEmptyImageCaption] = useState<boolean>(false);
    const [emptyImageURL, handleEmptyImageURL] = useState<boolean>(false);

    const handleSuccessfullRequest = () => {
        setTimeout(() => {
            handleVisibility();
            setReqSuccess(false);
        }, 1500);
        setReqSuccess(true);
        setImageCaption("");
        setImageURL("");
        handleEmptyImageCaption(false);
        handleEmptyImageURL(false);
    }

    const handleFormSubmit = () => {
        handleEmptyImageCaption(imageCaption === "");
        handleEmptyImageURL(imageURL === "");

        if (emptyImageCaption || emptyImageURL) {
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

        fetch(import.meta.env.API_URL, requestOptions)
            .then(response => response.json())
            .then(() => {
                handleSuccessfullRequest();
            })
            .catch((err) => console.error(err));
    };

    const handleVisibility = () => {
        changeVisibility(!isVisible);
    }

    const handleImageCaptionChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setImageCaption(e.target.value);
    }

    const handleImageURLChange = (e:React.ChangeEvent<HTMLInputElement>) => {
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
                        { reqSuccess ?
                            <div className={styles.modalContainer}>
                                <div className={styles.message}>
                                    <h2>Post successfully created</h2>
                                    <p>This window will close automatically in a few seconds</p>
                                </div>
                            </div> :
                            <div className={styles.modalContainer}>
                                <button className={styles.modalCloseButton} onClick={handleVisibility}>x</button>
                                <div className={styles.modalForm}>
                                    <h2>Create new</h2>
                                    <div>
                                        <h3>Add description</h3>
                                        { emptyImageCaption ? <InputFieldErrorMessage /> : <p> </p>}
                                        <input
                                            type={"text"}
                                            value={imageCaption}
                                            onChange={handleImageCaptionChange}
                                        />
                                    </div>
                                    <div>
                                        <h3>Add link to an image</h3>
                                        { emptyImageCaption ? <InputFieldErrorMessage /> : <p> </p>}
                                        <input
                                            type={"text"}
                                            value={imageURL}
                                            onChange={handleImageURLChange}
                                        />
                                    </div>
                                    <button className={styles.button} onClick={handleFormSubmit}>Create</button>
                                </div>
                            </div>
                        }
                    </div>
                }
            </div>
            <GallerySection />
        </>
    );
}

export default App
