import { useState } from "react";
import styles from "./../styles/password-reset.module.css";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function PasswordReset() {
  const [showCurr, setshowCurr] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showCon, setShowCon] = useState(false);

  return (
    <div className={styles["container"]}>
      <div className="curr-pass-container">
        <label htmlFor="curr-pass">Current Password</label>
        <div className={styles["inp-container"]}>
          <input type={`${showCurr ? "text" : "password"}`} id="curr-pass" />
          <button onClick={() => setshowCurr(!showCurr)}>
            {showCurr ? <FiEye /> : <FiEyeOff />}
          </button>
        </div>
      </div>
      <div className="new-pass-container">
        <label htmlFor="new-pass">New Password</label>
        <div className={styles["inp-container"]}>
          <input type={`${showNew ? "text" : "password"}`} id="new-pass" />
          <button onClick={() => setShowNew(!showNew)}>
            {showNew ? <FiEye /> : <FiEyeOff />}
          </button>
        </div>
      </div>
      <div className="con-pass-container">
        <label htmlFor="con-pass">Confirm Password</label>
        <div className={styles["inp-container"]}>
          <input type={`${showCon ? "text" : "password"}`} id="con-pass" />
          <button onClick={() => setShowCon(!showCon)}>
            {showCon ? <FiEye /> : <FiEyeOff />}
          </button>
        </div>
      </div>
    </div>
  );
}
