import styles from "./../styles/hotel-overview.module.css";
import { IoArrowBackOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function HotelOverview() {
    return (
        <div id="hotel-overview" className={styles["overview-container"]}>
            <div className={styles["overview-header"]}>
                <button>
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
            <div className={styles["navbar"]}>
                <a href="#hotel-overview">Overview</a>
                <a href="#hotel-amenities">Amenities</a>
                <a href="#hotel-location">Location</a>
                <a href="#hotel-rooms">Rooms</a>
                <a href="#hotel-accessibility">Accessibility</a>
                <a href="#hotel-policy">Policies</a>
                <a href="#hotel-reviews">Reviews</a>
            </div>
            <div className={styles["hotel-description"]}>
                <h1>Hotel Name</h1>
                <div className={styles["hotel-stars"]}>
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStar />
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nobis deserunt facilis perspiciatis
                </p>
                <div className={styles["hotel-score-container"]}>
                    <span>4.3</span>
                    {/*score > 4 color green, 3 < score < 4 color yellow score < 3 color red*/}
                    <label>Awsome</label>
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
