import { useState } from "react";
import styles from "./../styles/checkbox.module.css";
export default function CheckBox({ label, svg = <></> }) {
    const [checked, setChecked] = useState(false);

    return (
        <label className={styles["container-label"]} htmlFor="check">
            <span>
                <span>{svg}</span>
                <span>{label}</span>
            </span>
            <div
                onClick={() => setChecked((checked) => !checked)}
                id="check"
                className={
                    styles["check-box-container"] +
                    " " +
                    `${checked ? styles["complete-status"] : ""}`
                }
            >
                <div
                    className={
                        styles["check-status"] +
                        " " +
                        `${checked ? styles["check-complete-status"] : ""}`
                    }
                ></div>
            </div>
        </label>
    );
}
