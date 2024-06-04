import { IoPerson } from "react-icons/io5";
import { FaUserLock } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FiActivity } from "react-icons/fi";

import styles from "./../styles/dashboard-sidebar.module.css";

export default function DashboardSidebar() {
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
      <NavLink className={styles["nav-links"]} to={"/dashboard/security"}>
        <span>
          <FaUserLock />
        </span>
        <span>Security</span>
      </NavLink>
      <NavLink className={styles["nav-links"]} to={"/dashboard/activity"}>
        <span>
          <FiActivity />
        </span>
        <span>Your Activity</span>
      </NavLink>
    </aside>
  );
}
