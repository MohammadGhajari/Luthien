import { useState } from "react";
import styles from "./../styles/hotel-reviews.module.css";
import ReviewCart from "./ReviewCart";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

export default function HotelPolicy() {
    const [reviews, setReviews] = useState([
        {
            name: "ali",
            img: "./../../public/sample data/4.jpeg",
            rating: 2,
            review: "that was.",
        },
        {
            name: "ghasem",
            img: "./../../public/sample data/4.jpeg",
            rating: 5,
            review: "that was a very good and awsome hotel with all the passagers needed for a very good experience in the hotel.",
        },
        {
            name: "gholy",
            img: "./../../public/sample data/4.jpeg",
            rating: 2,
            review: "that was a very good and awsome hotel with all the passagers needed for a very good experience in the hotel.",
        },
        {
            name: "hasan",
            img: "./../../public/sample data/4.jpeg",
            rating: 3.8,
            review: "that was a very goodlkasfdlkajfl lkjfl sdj ll;kjgl;k gj;ljkf;l gkjdfl;kgj ;ldfjg ldfj;l kjg;dlf kjg; lkjg;ldfjk ;lkj ;lhkjdf;ljh ;ldfgj h;ljf ;lk and awsome hotel with all the passagers needed for a very good experience in the hotel.",
        },
        {
            name: "kazem",
            img: "./../../public/sample data/4.jpeg",
            rating: 2.4,
            review: "that was a very good and awsome hotel with all the passagers needed for a very good experience in the hotel.",
        },
    ]);
    const [currentH, setCurrentH] = useState(0);
    const [currentO, setCurrentO] = useState(0);
    const [currentCart, setCurrentCart] = useState(1);

    function handleNext() {
        if (currentCart < reviews.length - 1) {
            setCurrentH(currentH - 100);
            setCurrentO(currentO - 2);
            setCurrentCart(currentCart + 1);
        } else {
            setCurrentCart(0);
            setCurrentH(100);
            setCurrentO(2);
        }
    }
    function handlePrev() {
        if (currentCart > 0) {
            setCurrentH(currentH + 100);
            setCurrentO(currentO + 2);
            setCurrentCart(currentCart - 1);
        } else {
            setCurrentCart(reviews.length - 1);
            setCurrentH(-100 * (reviews.length - 2));
            setCurrentO(-2 * (reviews.length - 2));
        }
    }
    return (
        <div id="hotel-reviews" className={styles["container"]}>
            <h1>Reviews</h1>
            <div className={styles["reviews-container"]}>
                {reviews.map((review, i) => (
                    <ReviewCart
                        key={i}
                        name={review.name}
                        img={review.img}
                        rating={review.rating}
                        review={review.review}
                        style={`translate(calc(${i * 100 + currentH}% + ${
                            2 * (i + 1) + currentO
                        }rem), 0)`}
                        isCurrent={currentCart === i}
                    />
                ))}
            </div>
            <div className={styles["pagination"]}>
                <button onClick={handlePrev}>
                    <MdKeyboardArrowLeft />
                </button>
                <button onClick={handleNext}>
                    <MdKeyboardArrowRight />
                </button>
            </div>
        </div>
    );
}
