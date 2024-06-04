import styles from "./../styles/dashboard.module.css";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "./../components/DashboardSidebar";

export default function Dashboard() {
  return (
    <div className={styles["outer-container"]}>
      <div className={styles["container"]}>
        <DashboardSidebar />
        <div className={styles["content"]}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
