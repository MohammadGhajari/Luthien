import styles from "./../styles/review-cart.module.css";

import { IoMdStar, IoIosStarOutline } from "react-icons/io";

export default function ReviewCart({
    name,
    img,
    rating,
    review,
    style,
    isCurrent,
}) {
    return (
        <div
            className={`${styles.container} ${
                isCurrent && styles["current-cart"]
            }`}
            style={{ transform: style }}
        >
            <img src={img} alt={name} />
            <h2>{name}</h2>
            <div className={styles["ratings"]}>
                <span>{rating}/5</span>
                <div className={styles["starts-conainer"]}>
                    {Array.from({ length: 5 }, (x, i) =>
                        i < Math.round(rating) ? (
                            <IoMdStar key={i} />
                        ) : (
                            <IoIosStarOutline key={i} />
                        )
                    )}
                </div>
            </div>
            <p>“ {review} ”</p>
        </div>
    );
}
