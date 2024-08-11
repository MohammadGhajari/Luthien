import { useState } from "react";
import styles from "./../styles/edit-option.module.css";
import CountrySelectBox from "./CountrySelectBox";
import GenderSelectBox from "./GenderSelectBox";
import PasswordReset from "./PasswordReset";
import DeleteAccount from "./DeleteAccount";
import HotelierInputFields from "./HotelierInputFields";

export default function EditOption({
  title,
  defaultValue,
  value,
  type,
  disableEdit,
  setDisableEdit,
  handleSave,
  setValue,
  setPassword,
  setPasswordConfirm,
  setCurrPassword,
  hanldeLogout,
  toType,
  handleDeleteAccount,
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
  async function handleClickSave() {
    let result;
    if (hanldeLogout) {
      result = await hanldeLogout();
    }
    if (handleSave) {
      result = await handleSave();
    }

    if (result) {
      setOnEdit(false);
      setDisableEdit(false);
    }
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
              alignItems: `${
                type !== "logout"
                  ? "none"
                  : window.innerWidth > 650
                  ? "center"
                  : "flex-start"
              }`,
              flexDirection: `${
                type === "logout" && window.innerWidth > 650 ? "row" : "column"
              }`,
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
              <CountrySelectBox setValue={setValue} defaultValue={value} />
            ) : type === "gender" ? (
              <GenderSelectBox setValue={setValue} defaultValue={value} />
            ) : type === "password" ? (
              <PasswordReset
                setPassword={setPassword}
                setPasswordConfirm={setPasswordConfirm}
                setCurrPassword={setCurrPassword}
              />
            ) : type === "logout" ? (
              <button
                onClick={handleClickSave}
                className={styles["logout-btn"]}
              >
                Logout
              </button>
            ) : type === "delete" ? (
              <DeleteAccount
                toType={toType}
                handleDeleteAccount={handleDeleteAccount}
              />
            ) : (
              // <input
              //   onChange={(e) => setValue(e.target.value)}
              //   placeholder={title}
              //   type="text"
              //   id="name-inp"
              //   defaultValue={value}
              // />

              <HotelierInputFields
                setValue={setValue}
                placeholder={title}
                defaultValue={value}
                width="100%"
                height="3.5rem"
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
            <button
              onClick={handleClickSave}
              className={`${styles["btn"]} ${styles["save-btn"]}`}
            >
              Save
            </button>
          </>
        )}
      </div>
    </div>
  );
}
