import styles from "./../styles/security.module.css";
import EditOption from "../components/EditOption";
import { useState } from "react";
import { resetPassword, logout, deleteAccount } from "./../services/handleReqs";
import { toast } from "react-toastify";
import { toastError, toastSuccess } from "./../services/notify";
import { useNavigate } from "react-router-dom";
import { resetUser } from "./../state management/userSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Security() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { email } = useSelector((state) => state.user);

  const [disableEdit, setDisableEdit] = useState(false);

  const [currPassword, setCurrPassword] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  async function handleChangePassword() {
    if (!password || !passwordConfirm || !currPassword) {
      toastError("Fill out all required fields");
      return false;
    }
    if (password === passwordConfirm) {
      const res = await toast.promise(
        resetPassword({
          password: currPassword,
          newPassword: password,
          passwordConfirm: passwordConfirm,
        }),
        {
          pending: "Updating password...",
          success: "Your password updated successfully!⚡",
          error: "Try again.⚠️",
        }
      );
      return true;
    } else {
      toastError("New password and confirm password are not same.");
      return false;
    }
  }
  async function hanldeLogout() {
    if (window.confirm("Are you sure you want to log?")) {
      await toast.promise(logout(), {
        pending: "Logging out...",
        success: "You logged out successfully!⚡",
        error: "Try again.⚠️",
      });
      dispatch(resetUser());
      navigate("/");
      return true;
    }
    return false;
  }
  async function handleDeleteAccount() {
    if (window.confirm("Are you sure you want to delete account?")) {
      await toast.promise(deleteAccount(), {
        pending: "Deleting account...",
        success: "Your account deleted successfully!⚡",
        error: "Try again.⚠️",
      });
      dispatch(resetUser());
      navigate("/");
      return true;
    }
    return false;
  }
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
        setPassword={setPassword}
        setPasswordConfirm={setPasswordConfirm}
        setCurrPassword={setCurrPassword}
        handleSave={handleChangePassword}
      />
      <EditOption
        title={"Log out"}
        defaultValue={
          "If you don't want to stay logged in, you can exit from your account"
        }
        type={"logout"}
        disableEdit={disableEdit}
        setDisableEdit={setDisableEdit}
        hanldeLogout={hanldeLogout}
      />
      <EditOption
        title={"Delete account"}
        defaultValue={"Permanently delete your Lothien account"}
        type={"delete"}
        disableEdit={disableEdit}
        setDisableEdit={setDisableEdit}
        toType={email}
        handleDeleteAccount={handleDeleteAccount}
      />
    </div>
  );
}
