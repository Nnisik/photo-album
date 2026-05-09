import styles from "../../styles/Gallery.module.css";
import {IGalleryCardProps} from "../../types/IGalleryCardProps.ts";
import {FC, useState} from "react";
import redHeart from "../../assets/images/svg/heart-liked.svg";
import emptyHeart from "../../assets/images/svg/heart.svg";

const GalleryCard:FC<IGalleryCardProps> = (props) => {

    const handleClick = () => {
        setLikeState(!likeState);
        likeState ? setLike(postLikes - 1) : setLike(postLikes + 1);
    }

    const [likeState, setLikeState] = useState<boolean>(false);
    const [postLikes, setLike] = useState<number>(props.likes);

    return (
        <div className={styles.gridCard}>
            <img src={props.image.url} alt={props.image.altText} />
            <div className={styles.postInfo}>
                <h3>{props.caption}</h3>
                <div>
                    <img
                        src={likeState ? redHeart : emptyHeart }
                        alt={"Like button"}
                        onClick={handleClick}
                    />
                    <p>{postLikes}</p>
                </div>
            </div>
        </div>
    )
}

export default GalleryCard;