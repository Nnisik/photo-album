import styles from "../../styles/Gallery.module.css";
import { useEffect } from "react";
import GalleryCard from "./GalleryCard.tsx";
import { useGalleryStore } from "../../store/useGalleryStore.ts";

const GallerySection = () => {
    const { items, get } = useGalleryStore();

    useEffect(() => {
        get();
    }, [get]);

    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                {items.map((post, key) => (
                    <GalleryCard
                        key={key}
                        id={post.id}
                        type={post.type}
                        caption={post.caption}
                        image={post.image}
                        likes={post.likes}
                    />
                ))}
            </div>
        </div>
    );
}

export default GallerySection;