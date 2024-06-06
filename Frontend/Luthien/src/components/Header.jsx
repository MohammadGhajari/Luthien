import styles from "./../styles/header.module.css";
import Logo from "./Logo";
import { FaRegMoon } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import { NavLink, useNavigate } from "react-router-dom";
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
import { FiActivity } from "react-icons/fi";
import { FaHotel } from "react-icons/fa6";

export default function Header() {
  const { email, photo } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleLogout(e) {
    await logout();
    dispatch(resetUser());
    navigate("/");
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
            <span>
              <BsExclamationCircle />
            </span>
            <span>About Us</span>
          </NavLink>
          <span className={styles.divider}></span>
          <a
            href="#faq"
            className={`${styles["faq-btn"]} ${styles["nav-btn"]}`}
          >
            <span>
              <FaQuestion />
            </span>
            <span>FAQ</span>
          </a>
        </div>
      </div>
      <div className={styles.right}>
        {validator.isEmail(email) ? (
          <>
            <NavLink to={"/became-hotelier"} className={styles["nav-btn"]}>
              <span>
                <FaHotel />
              </span>
              <span>Became a Hotelier</span>
            </NavLink>
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
                <NavLink className={styles["nav-btn"]} to="/favorites">
                  <span>Favorite</span>
                  <span>
                    <MdFavoriteBorder />
                  </span>
                </NavLink>
                <NavLink className={styles["nav-btn"]} to="/dashboard/activity">
                  <span>Activity</span>
                  <span>
                    <FiActivity />
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
          </>
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
