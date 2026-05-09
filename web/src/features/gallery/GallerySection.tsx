import styles from "../../styles/Gallery.module.css";
import {useEffect, useState} from "react";
import GalleryCard from "./GalleryCard.tsx";
import {IGalleryCardProps} from "../../types/IGalleryCardProps.ts";

const GallerySection = () => {

    const [posts, setPosts] = useState<IGalleryCardProps[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await fetch("../../src/assets/json/data-posts.json");

                if (!res.ok) {
                    throw new Error("Fetch error");
                }

                const data = await res.json();
                setPosts(data);
            } catch (err:any) {
                console.error(err.message);
            }
        }

        fetchPosts();
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                {posts.map((post, key) => (
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