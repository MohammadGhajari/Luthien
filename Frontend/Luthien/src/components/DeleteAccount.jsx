import { useState } from "react";
import styles from "./../styles/delete-account.module.css";
export default function DeleteAccount({ toType, handleDeleteAccount }) {
  const [value, setvalue] = useState("");

  return (
    <div className={styles["container"]}>
      <p>type "Luthien/{toType}"" in the following input</p>
      <div className={styles["delete-container"]}>
        <input
          onChange={(e) => setvalue(e.target.value)}
          type="text"
          className={styles["password-input"]}
          placeholder="type..."
        />
        <button
          onClick={handleDeleteAccount}
          className={`${
            value !== `Luthien/${toType}` && styles["disable-btn"]
          }`}
          disabled={value !== `Luthien/${toType}`}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
