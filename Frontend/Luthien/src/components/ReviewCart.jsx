import styles from "./../styles/review-cart.module.css";
import { IoMdStar, IoIosStarOutline } from "react-icons/io";
import AOS from "aos";
import { useEffect } from "react";

export default function ReviewCart({ name, img, rating, review, isCurrent }) {
  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);

  return (
    <div className={`${styles.container}`} data-aos={"fade-up"}>
      <div style={{ background: `URL(${img})` }}></div>
      <h2>{name}</h2>
      <div className={styles["ratings"]}>
        <span>{rating}/5</span>
        <div className={styles["stars-conainer"]}>
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
