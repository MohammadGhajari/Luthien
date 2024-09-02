import styles from "./../styles/dashboard.module.css";
import { Outlet } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import DashboardSidebar from "./../components/DashboardSidebar";

export default function Dashboard() {
  return (
    <div className={styles["outer-container"]}>
      <div className={styles["container"]}>
        {window.innerWidth > 850 && <DashboardSidebar />}
        <div className={styles["menu-container"]}>
          <button className={styles["menu-btn"]}>
            <AiOutlineMenu />
          </button>
          <div className={styles["menu-content"]}>
            <DashboardSidebar />
          </div>
        </div>
        <div className={styles["content"]}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
