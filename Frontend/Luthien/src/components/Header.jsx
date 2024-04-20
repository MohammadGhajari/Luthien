import styles from "./../styles/header.module.css";
import Logo from "./Logo";
import { FaRegMoon } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";

export default function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.leftSide}>
                <Logo size={90} color={"var(--color-grey-3)"} />
                <button className={styles["darkmode-btn"]}>
                    <FaRegMoon />
                </button>
            </div>
            <div className={styles.rightSide}>
                <button className={styles["login-btn"]}>
                    <p>Login|Signup</p>
                    <IoMdLogIn />
                </button>
            </div>
        </div>
    );
}
