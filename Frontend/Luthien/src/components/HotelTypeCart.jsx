import styles from "./../styles/hotel-type-cart.module.css";
import { IoMdArrowDropright } from "react-icons/io";
import { NavLink } from "react-router-dom";

export default function HotelTypeCart({ cityName, img }) {
  return (
    <NavLink to={`/hotels/city/${cityName}`} className={styles["hotel-cart"]}>
      <div>
        <span>
          <img src={img} alt={cityName} />
        </span>
        <h3>{cityName} Hotels</h3>
      </div>
      <span>
        <IoMdArrowDropright />
      </span>
    </NavLink>
  );
}
