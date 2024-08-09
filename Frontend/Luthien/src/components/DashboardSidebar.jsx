import { IoPerson } from "react-icons/io5";
import { FaUserLock } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FiActivity } from "react-icons/fi";
import { useSelector } from "react-redux";
import styles from "./../styles/dashboard-sidebar.module.css";
import { GoCodeReview } from "react-icons/go";
import { SlWallet } from "react-icons/sl";
import { FaWallet } from "react-icons/fa";
import { FaKey } from "react-icons/fa6";
import { FaHotel } from "react-icons/fa6";

export default function DashboardSidebar() {
  const { role } = useSelector((state) => state.user);

  return (
    <aside className={styles["container"]}>
      <NavLink
        className={styles["nav-links"]}
        to={"/dashboard/personal-information"}
      >
        <span>
          <IoPerson />
        </span>
        <span>Personal details</span>
      </NavLink>
      <NavLink className={styles["nav-links"]} to={"/dashboard/activity"}>
        <span>
          <FiActivity />
        </span>
        <span>Your Activity</span>
      </NavLink>
      {role === "admin" && (
        <NavLink
          className={styles["nav-links"]}
          to={"/dashboard/checking-reviews"}
        >
          <span>
            <GoCodeReview />
          </span>
          <span>Checking Reviews</span>
        </NavLink>
      )}
      <NavLink className={styles["nav-links"]} to={"/dashboard/wallet"}>
        <span>
          <FaWallet />
        </span>
        <span>Wallet</span>
      </NavLink>
      <NavLink className={styles["nav-links"]} to={"/dashboard/security"}>
        <span>
          <FaUserLock />
        </span>
        <span>Security</span>
      </NavLink>
      <NavLink className={styles["nav-links"]} to={"/dashboard/reserved-rooms"}>
        <span>
          <FaKey />
        </span>
        <span>Reserved rooms</span>
      </NavLink>
      {role === "hotelier" && (
        <NavLink className={styles["nav-links"]} to={"/dashboard/my-hotel"}>
          <span>
            <FaHotel />
          </span>
          <span>My Hotel</span>
        </NavLink>
      )}
    </aside>
  );
}
