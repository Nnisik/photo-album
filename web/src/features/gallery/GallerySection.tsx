import styles from "../../styles/Gallery.module.css";
import {useState, useEffect,useCallback} from 'react'
import GalleryCard from "./GalleryCard.tsx";
import {IGalleryCardProps} from "../../types/IGalleryCardProps.ts";

const GallerySection = () => {

    const [items, setItems] = useState<IGalleryCardProps[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    const fetchPosts = useCallback(async () => {
        setLoading(true);
        try {
            const res = await fetch('http://localhost:3000/posts');

            if (!res.ok) {
                setError(true);
                throw new Error('Server fetch error');
            }

            const data: IGalleryCardProps[] = await res.json();
            setItems(data);
        } catch (err) {
            setError(true);
            console.error(err);
        }
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }, []);

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div className={styles.container}>
            { loading ?
                <p> Getting your beautiful pics...</p> :
                error ?
                    <p> Ops, can't get your posts. Wait a few seconds or reload page. </p> :
                    <div className={styles.grid}>
                        { items.map((post, key) => (
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
            }
        </div>
    );
}

export default GallerySection;