import styles from "./../styles/review-cart.module.css";

import { IoMdStar, IoIosStarOutline } from "react-icons/io";

export default function ReviewCart() {
    return (
        <div className={styles.container}>
            <img src="./../../public/sample data/4.jpeg" alt="photo" />
            <h2>User Name</h2>
            <div className={styles["ratings"]}>
                <span>4.3/5</span>
                <div className={styles["starts-conainer"]}>
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoIosStarOutline />
                    <IoIosStarOutline />
                </div>
            </div>
            <p>
                “ Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime placeat ”
            </p>
        </div>
    );
}
