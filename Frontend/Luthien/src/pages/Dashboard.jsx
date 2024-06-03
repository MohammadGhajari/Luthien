import styles from "./../styles/dashboard.module.css";
import { IoPerson } from "react-icons/io5";
import { FaUserLock } from "react-icons/fa";

export default function Dashboard() {
  return (
    <div className={styles["container"]}>
      <aside>
        <div>
          <span>
            <IoPerson />
          </span>
          <span>Personal details</span>
        </div>
        <div>
          <span>
            <FaUserLock />
          </span>
          <span>Security</span>
        </div>
      </aside>
      <div className={styles["content"]}>
        <h1>Personal Details</h1>
      </div>
    </div>
  );
}
