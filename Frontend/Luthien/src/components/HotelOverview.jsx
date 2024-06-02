import styles from "./../styles/hotel-overview.module.css";
import { IoArrowBackOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function HotelOverview({ name, stars, ratings, desc }) {
  const navigation = useNavigate();

  return (
    <div id="hotel-overview" className={styles["overview-container"]}>
      <div className={styles["overview-header"]}>
        <button onClick={() => navigation(-1)}>
          <IoArrowBackOutline />
        </button>
        <button>
          <span>
            <FaRegHeart />
          </span>{" "}
          <span>Save</span>
        </button>
      </div>
      <div className={styles["gallery"]}>
        <img src="./../../public/sample data/1.jpeg" alt="photo" />
        <img src="./../../public/sample data/2.jpg" alt="photo" />
        <img src="./../../public/sample data/3.jpg" alt="photo" />
        <img src="./../../public/sample data/4.jpeg" alt="photo" />
        <img src="./../../public/sample data/1.jpeg" alt="photo" />
      </div>

      <div className={styles["hotel-description"]}>
        <h1>{name}</h1>
        <div className={styles["hotel-stars"]}>
          <IoStar />
          <IoStar />
          <IoStar />
          <IoStar />
        </div>
        <p>{desc}</p>
        <div className={styles["hotel-score-container"]}>
          <span
            style={{
              backgroundColor: `${
                ratings >= 4
                  ? "#35c709c8"
                  : ratings >= 3 && ratings < 4
                  ? "#d7d70dcb"
                  : "#ec2c12ca"
              }`,
            }}
          >
            {ratings}
          </span>

          <label>
            {ratings >= 4
              ? "Awsom"
              : ratings >= 3 && ratings < 4
              ? "Good"
              : "Not bad"}
          </label>
          <a href="#hotel-reviews">
            <span>See all 152 reviews</span>{" "}
            <span>
              <MdOutlineKeyboardArrowRight />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
