import { NavLink } from "react-router-dom";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { RiLoginCircleLine } from "react-icons/ri";
import styles from "./../styles/login-form.module.css";

export default function LoginForm({
    setName,
    setEmailInp,
    setPassword,
    setPasswordConfirm,
    type,
    handleSubmit,
}) {
    return (
        <div className={styles.outer}>
            <form className={styles.container} onSubmit={handleSubmit}>
                <h1>{type === "login" ? "Login" : "Sign up"}</h1>
                {type === "signup" && (
                    <div>
                        <label for="name">
                            <FaRegUser />
                            Name
                        </label>
                        <input
                            className={styles["login-input"]}
                            type="text"
                            id="name"
                            placeholder="name"
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                )}
                <div>
                    <label for="email">
                        <MdOutlineMail />
                        Email
                    </label>
                    <input
                        className={styles["login-input"]}
                        type="email"
                        id="email"
                        placeholder="email"
                        onChange={(e) => setEmailInp(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label for="password">
                        <RiLockPasswordLine />
                        Password
                    </label>
                    <input
                        className={styles["login-input"]}
                        type="password"
                        id="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {type === "signup" && (
                    <div>
                        <label for="password-confirm">
                            <RiLockPasswordLine />
                            Password confirm
                        </label>
                        <input
                            className={styles["login-input"]}
                            type="password"
                            id="password-confirm"
                            placeholder="Password confirm"
                            onChange={(e) => setPasswordConfirm(e.target.value)}
                            required
                        />
                    </div>
                )}

                <button className={styles["submit-btn"]}>
                    <RiLoginCircleLine />{" "}
                    <span>{type === "login" ? "Login" : "Sign up"}</span>
                </button>

                {type === "login" ? (
                    <p>
                        do'nt have an account?{" "}
                        <NavLink className={styles.link} to={"/signup"}>
                            Create account
                        </NavLink>
                    </p>
                ) : (
                    <p>
                        do you have an account?{" "}
                        <NavLink className={styles.link} to={"/login"}>
                            login
                        </NavLink>
                    </p>
                )}
            </form>
        </div>
    );
}
