import { useSelector } from "react-redux";
import styles from "./../styles/wallet.module.css";
import { useState } from "react";
import { toastError } from "../services/notify";
import { updateUser, getCurrentUser } from "../services/handleReqs";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setBalance } from "../state management/userSlice";
import { getTime } from "../util/time";

export default function Wallet() {
  const { balance } = useSelector((state) => state.user);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  async function handleDeposite() {
    if (value <= 0) return toastError("invalid balance");

    const currentUser = await getCurrentUser();

    const res = await toast.promise(
      updateUser({
        balance: balance + +value,
        activity: [
          ...currentUser.data.data.activity,
          {
            type: "deposite",
            data: {
              lastBalance: balance,
              addedBalance: +value,
            },
            date: getTime(),
          },
        ],
      }),
      {
        pending: "Updating balance...",
        success: "Your balance updated successfully!⚡",
        error: "Try again.⚠️",
      }
    );
    dispatch(setBalance(balance + +value));
    setValue("");
  }

  return (
    <div className={styles["container"]}>
      <h1>Wallet</h1>
      <div className={styles["content"]}>
        <h2>
          <span>Balance: </span> <span>${balance}</span>
        </h2>
        <div className={styles["deposite-container"]}>
          <div className={styles["inp-container"]}>
            <label
              htmlFor="depo-lablel"
              className={value.length > 0 ? styles["label-focused"] : ""}
            >
              Amount
            </label>
            <input
              type="number"
              id="depo-lablel"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <button onClick={handleDeposite}>Deposite</button>
        </div>
      </div>
    </div>
  );
}
