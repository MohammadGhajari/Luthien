import styles from "./../styles/hotel-reviews.module.css";
import ReviewCart from "./ReviewCart";

export default function HotelPolicy() {
    return (
        <div id="hotel-reviews" className={styles["container"]}>
            <h1>Reviews</h1>
            <div className={styles["reviews-container"]}>
                <ReviewCart />
                <ReviewCart />
                <ReviewCart />
                <ReviewCart />
            </div>
            <div className={styles["pagination"]}></div>
        </div>
    );
}
