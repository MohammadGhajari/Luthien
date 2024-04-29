import styles from "./../styles/header.module.css";
import Logo from "./Logo";
import { FaRegMoon } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { BsExclamationCircle } from "react-icons/bs";
import { FaQuestion } from "react-icons/fa6";
import { useSelector } from "react-redux";

export default function Header() {
    const { FAQElement } = useSelector((state) => state.scroll);

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <Logo size={80} color={"var(--color-grey-3)"} />
                <button className={styles["darkmode-btn"]}>
                    <FaRegMoon />
                </button>
                <div className={styles["nav-container"]}>
                    <NavLink
                        to="/about-us"
                        className={`${styles["about-us-btn"]} ${styles["nav-btn"]}`}
                    >
                        <span>About Us</span>
                        <BsExclamationCircle />
                    </NavLink>
                    <span className={styles.divider}></span>
                    <NavLink
                        onClick={() =>
                            FAQElement.scrollIntoView({ behavior: "smooth" })
                        }
                        className={`${styles["faq-btn"]} ${styles["nav-btn"]}`}
                    >
                        <span>FAQ</span>
                        <FaQuestion />
                    </NavLink>
                </div>
            </div>
            <div className={styles.right}>
                <NavLink
                    to="/login"
                    className={`${styles["login-btn"]} ${styles["nav-btn"]}`}
                >
                    <span>Login|Signup</span>
                    <IoMdLogIn />
                </NavLink>
            </div>
        </div>
    );
}
