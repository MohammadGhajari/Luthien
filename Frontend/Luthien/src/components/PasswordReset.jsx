import { useState } from "react";
import styles from "./../styles/password-reset.module.css";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function PasswordReset({
  setPassword,
  setPasswordConfirm,
  setCurrPassword,
}) {
  const [showCurr, setshowCurr] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showCon, setShowCon] = useState(false);

  return (
    <div className={styles["container"]}>
      <div className="curr-pass-container">
        <label htmlFor="curr-pass">Current Password</label>
        <div className={styles["inp-container"]}>
          <input
            onChange={(e) => setCurrPassword(e.target.value)}
            type={`${showCurr ? "text" : "password"}`}
            id="curr-pass"
          />
          <button onClick={() => setshowCurr(!showCurr)}>
            {showCurr ? <FiEye /> : <FiEyeOff />}
          </button>
        </div>
      </div>
      <div className="new-pass-container">
        <label htmlFor="new-pass">New Password</label>
        <div className={styles["inp-container"]}>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type={`${showNew ? "text" : "password"}`}
            id="new-pass"
          />
          <button onClick={() => setShowNew(!showNew)}>
            {showNew ? <FiEye /> : <FiEyeOff />}
          </button>
        </div>
      </div>
      <div className="con-pass-container">
        <label htmlFor="con-pass">Confirm Password</label>
        <div className={styles["inp-container"]}>
          <input
            onChange={(e) => setPasswordConfirm(e.target.value)}
            type={`${showCon ? "text" : "password"}`}
            id="con-pass"
          />
          <button onClick={() => setShowCon(!showCon)}>
            {showCon ? <FiEye /> : <FiEyeOff />}
          </button>
        </div>
      </div>
    </div>
  );
}
