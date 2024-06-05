import styles from "./../styles/page-not-found.module.css";
import { NavLink } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className={styles["container"]}>
      <h1>404</h1>
      <p>it seems the page you're looking for, is not found.😢</p>
      <NavLink className={styles["nav"]} to={"/"}>
        Back to home
      </NavLink>
    </div>
  );
}
