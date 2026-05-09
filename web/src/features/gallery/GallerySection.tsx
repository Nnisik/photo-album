import styles from "../../styles/Gallery.module.css";

const GallerySection = () => {
    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                <div className={styles.gridCard}>
                    <img />
                    <div className={styles.postInfo}>
                        <h3>Post</h3>
                        <p>description</p>
                    </div>
                </div>
                <div className={styles.gridCard}>
                    <img />
                    <div className={styles.postInfo}>
                        <h3>Post</h3>
                        <p>description</p>
                    </div>
                </div>
                <div className={styles.gridCard}>
                    <img />
                    <div className={styles.postInfo}>
                        <h3>Post</h3>
                        <p>description</p>
                    </div>
                </div>
                <div className={styles.gridCard}>
                    <img />
                    <div className={styles.postInfo}>
                        <h3>Post</h3>
                        <p>description</p>
                    </div>
                </div>
                <div className={styles.gridCard}>
                    <img />
                    <div className={styles.postInfo}>
                        <h3>Post</h3>
                        <p>description</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GallerySection;