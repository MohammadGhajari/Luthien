import styles from "./../styles/hotel-type-cart.module.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";

export default function HotelTypeCart({ cityName, img }) {
    return (
        <div className={styles["hotel-cart"]}>
            <div>
                <span>
                    <img src={`cities/${img}`} alt={img} />
                </span>
                <h3>{cityName} Hotels</h3>
            </div>
            <span>
                <IoMdArrowDropright />
            </span>
        </div>
    );
}
