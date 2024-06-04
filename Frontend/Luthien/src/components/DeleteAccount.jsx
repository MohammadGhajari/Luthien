import { useState } from "react";
import styles from "./../styles/delete-account.module.css";
export default function DeleteAccount() {
  const [value, setvalue] = useState("");

  return (
    <div className={styles["container"]}>
      <p>type "THIS IS USER NAME" in the following input</p>
      <div className={styles["delete-container"]}>
        <input onChange={(e) => setvalue(e.target.value)} type="text" />
        <button
          className={`${
            value !== "THIS IS USER NAME" && styles["disable-btn"]
          }`}
          disabled={value !== "THIS IS USER NAME"}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
