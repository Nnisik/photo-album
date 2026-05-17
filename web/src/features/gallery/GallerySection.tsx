import styles from "../../styles/Gallery.module.css";
import {useEffect, useState} from "react";
import GalleryCard from "./GalleryCard.tsx";
// import { useGalleryStore } from "../../store/useGalleryStore.ts";
import {IGalleryCardProps} from "../../types/IGalleryCardProps.ts";

const GallerySection = () => {

    const fetchPosts = async () => {
        try {
            const res = await fetch('http://localhost:3000/posts');

            if (!res.ok) {
                throw new Error('Server fetch error');
            }
            const data:IGalleryCardProps[] = await res.json();
            setItems(data);
        }
        catch (err) {
            console.error(err);
        }
    }

    const [items, setItems] = useState<IGalleryCardProps[]>([])

    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);

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