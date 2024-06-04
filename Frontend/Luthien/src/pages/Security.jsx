import styles from "./../styles/security.module.css";
import EditOption from "../components/EditOption";
import { useState } from "react";

export default function Security() {
  const [disableEdit, setDisableEdit] = useState(false);

  return (
    <div className={styles["container"]}>
      <div className={styles["header"]}>
        <h1>Security</h1>
        <p>
          Change your security settings, set up secure authentication, or delete
          your account.
        </p>
      </div>
      <EditOption
        title={"Password"}
        defaultValue={
          "Reset your password regularly to keep your account secure"
        }
        type={"password"}
        disableEdit={disableEdit}
        setDisableEdit={setDisableEdit}
      />
      <EditOption
        title={"Log out"}
        defaultValue={
          "If you don't want to stay logged in, you can exit from your account"
        }
        type={"logout"}
        disableEdit={disableEdit}
        setDisableEdit={setDisableEdit}
      />
      <EditOption
        title={"Delete account"}
        defaultValue={"Permanently delete your Lothien account"}
        type={"delete"}
        disableEdit={disableEdit}
        setDisableEdit={setDisableEdit}
      />
    </div>
  );
}
