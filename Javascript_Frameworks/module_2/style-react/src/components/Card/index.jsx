import { useState } from "react";

import styles from "./Card.module.css";
import { placeholderCardImg } from "../../assets/db";

function Card({ title, description, imageUrl, imageAlt, link }) {
    const [imageLoaded, setImageLoaded] = useState(true); // Track image loading state

    const handleImageLoadError = () => {
        setImageLoaded(false); // Indicate error occurred
    };
    return (
        <div className={styles.card}>
            {imageLoaded ? (
                <img
                    src={imageUrl}
                    alt={imageAlt}
                    className={styles.cardImage}
                    onError={handleImageLoadError}
                    onLoad={() => setImageLoaded(true)} // Set loaded state on success
                />
            ) : (
                <img
                    src={placeholderCardImg}
                    alt={"Placeholder Image"}
                    className={styles.cardImage}
                />
            )}
            <div className={styles.cardBody}>
                <h2 className={styles.cardTitle}>{title}</h2>
                <p className={styles.cardText}>{description}</p>
            </div>
        </div>
    );
}

export default Card;
