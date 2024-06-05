import styles from "./../styles/header.module.css";
import Logo from "./Logo";
import { FaRegMoon } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { BsExclamationCircle } from "react-icons/bs";
import { FaQuestion } from "react-icons/fa6";
import validator from "validator";
import { useDispatch, useSelector } from "react-redux";
import { resetUser } from "./../state management/userSlice";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { MdOutlineVpnKey } from "react-icons/md";
import { MdOutlineLogout } from "react-icons/md";
import { logout } from "./../services/handleReqs";

export default function Header() {
  const { name, email, photo, role } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  async function handleLogout(e) {
    await logout();
    dispatch(resetUser());
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Logo size={80} color={"var(--color-grey-3)"} marginLeft="3rem" />
        <button className={styles["darkmode-btn"]}>
          <FaRegMoon />
        </button>
        <div className={styles["nav-container"]}>
          <NavLink
            to="/about-us"
            className={`${styles["about-us-btn"]} ${styles["nav-btn"]}`}
          >
            <span>About Us</span>
            <span>
              <BsExclamationCircle />
            </span>
          </NavLink>
          <span className={styles.divider}></span>
          <a
            href="#faq"
            className={`${styles["faq-btn"]} ${styles["nav-btn"]}`}
          >
            <span>FAQ</span>
            <span>
              <FaQuestion />
            </span>
          </a>
        </div>
      </div>
      <div className={styles.right}>
        {validator.isEmail(email) ? (
          <div className={styles["profile-container"]}>
            <button
              className={styles["img-container"]}
              style={{ background: `URL(${photo})` }}
            ></button>

            <div className={styles["menu-container"]}>
              <NavLink className={styles["nav-btn"]} to="/dashboard">
                <span>Dashboard</span>
                <span>
                  <MdOutlineDashboardCustomize />
                </span>
              </NavLink>
              <NavLink className={styles["nav-btn"]} to="/favorite">
                <span>Favorite</span>
                <span>
                  <MdFavoriteBorder />
                </span>
              </NavLink>
              <NavLink className={styles["nav-btn"]} to="/reserved">
                <span>Reserved</span>
                <span>
                  <MdOutlineVpnKey />
                </span>
              </NavLink>
              <button onClick={handleLogout} className={styles["nav-btn"]}>
                <span>Logout</span>
                <span>
                  <MdOutlineLogout />
                </span>
              </button>
            </div>
          </div>
        ) : (
          <NavLink
            to="/login"
            className={`${styles["login-btn"]} ${styles["nav-btn"]}`}
          >
            <span>Login|Signup</span>
            <span>
              <IoMdLogIn />
            </span>
          </NavLink>
        )}
      </div>
    </div>
  );
}
