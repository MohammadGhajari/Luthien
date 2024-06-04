import { useState } from "react";
import styles from "./../styles/edit-option.module.css";
import CountrySelectBox from "./CountrySelectBox";
import GenderSelectBox from "./GenderSelectBox";
import PasswordReset from "./PasswordReset";
import DeleteAccount from "./DeleteAccount";

export default function EditOption({
  title,
  defaultValue,
  value,
  type,
  disableEdit,
  setDisableEdit,
  handleSave,
}) {
  const [onEdit, setOnEdit] = useState(false);

  function handleEdit(e) {
    setDisableEdit(true);
    setOnEdit(true);
  }
  function handleCancel(e) {
    setOnEdit(false);
    setDisableEdit(false);
  }

  return (
    <div className={styles["option-container"]}>
      <div className={styles["title-container"]}>
        <h4>{title}</h4>
      </div>
      <div
        className={`${styles["content"]} ${onEdit && styles["edit-content"]}`}
      >
        {!onEdit ? (
          <p>{value || defaultValue}</p>
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: `${type === "logout" ? "center" : "none"}`,
              flexDirection: `${type === "logout" ? "row" : "column"}`,
              gap: `${type === "logout" ? "5rem" : "0.4rem"}`,
              width: "100%",
            }}
          >
            {type === "password" ? (
              ""
            ) : type === "delete" ? (
              ""
            ) : type === "logout" ? (
              <label>Click the following button for log out.</label>
            ) : (
              <label htmlFor="name-inp">{title}</label>
            )}

            {type === "nationality" ? (
              <CountrySelectBox defaultValue={value} />
            ) : type === "gender" ? (
              <GenderSelectBox defaultValue={value} />
            ) : type === "password" ? (
              <PasswordReset />
            ) : type === "logout" ? (
              <button className={styles["logout-btn"]}>Logout</button>
            ) : type === "delete" ? (
              <DeleteAccount />
            ) : (
              <input
                placeholder={title}
                type="text"
                id="name-inp"
                defaultValue={value}
              />
            )}
          </div>
        )}
      </div>
      <div
        className={`${styles["btn-container"]} ${
          onEdit && styles["edit-btn-container"]
        }`}
      >
        {!onEdit ? (
          <button
            disabled={disableEdit}
            onClick={handleEdit}
            className={`${styles["edit-btn"]} ${styles["btn"]} ${
              disableEdit && styles["btn-forbidden"]
            }`}
          >
            {type === "password"
              ? "Reset"
              : type === "logout"
              ? "Logout"
              : type === "delete"
              ? "Delete "
              : "Edit"}
          </button>
        ) : (
          <>
            <button onClick={handleCancel} className={styles["btn"]}>
              Cancel
            </button>
            <button className={`${styles["btn"]} ${styles["save-btn"]}`}>
              Save
            </button>
          </>
        )}
      </div>
    </div>
  );
}
