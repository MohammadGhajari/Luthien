import { IoPerson } from "react-icons/io5";
import { FaUserLock } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FiActivity } from "react-icons/fi";
import { useSelector } from "react-redux";
import styles from "./../styles/dashboard-sidebar.module.css";
import { GoCodeReview } from "react-icons/go";

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
      <NavLink className={styles["nav-links"]} to={"/dashboard/security"}>
        <span>
          <FaUserLock />
        </span>
        <span>Security</span>
      </NavLink>
    </aside>
  );
}
