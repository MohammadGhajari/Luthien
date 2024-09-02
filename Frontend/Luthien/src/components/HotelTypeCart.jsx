import { useState } from "react";
import styles from "./../styles/hotel-type-cart.module.css";
import { IoMdArrowDropright } from "react-icons/io";
import { NavLink } from "react-router-dom";

export default function HotelTypeCart({ cityName, img, dataaos }) {
  return (
    <NavLink
      data-aos={dataaos}
      to={`/hotels/city/${cityName}`}
      className={styles["hotel-cart"]}
    >
      <div>
        <h3>{cityName} Hotels</h3>
      </div>
      <span>
        <IoMdArrowDropright />
      </span>
    </NavLink>
  );
}
