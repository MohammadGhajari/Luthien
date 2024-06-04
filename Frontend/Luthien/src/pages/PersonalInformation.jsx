import EditOption from "../components/EditOption";
import styles from "./../styles/personal-information.module.css";
import { useState } from "react";

export default function PersonalInformation() {
  const [disableEdit, setDisableEdit] = useState(false);

  return (
    <div className={styles["container"]}>
      <div className={styles["header"]}>
        <div className={styles["left-side"]}>
          <h1>Personal Details</h1>
          <p>Update your info and find out how it's used.</p>
        </div>
        <div className={styles["right-side"]}>
          <div className={styles["prof-container"]}>
            <img src="./../../public/sample data/1.jpeg" alt="profile photo" />
          </div>
        </div>
      </div>
      <EditOption
        title={"Name"}
        value={"Mohammad Ghajari"}
        type={"name"}
        disableEdit={disableEdit}
        setDisableEdit={setDisableEdit}
      />
      <EditOption
        title={"Email"}
        value={"stormborndaenerys0@gmail.com"}
        type={"email"}
        disableEdit={disableEdit}
        setDisableEdit={setDisableEdit}
      />
      <EditOption
        title={"Phone Number"}
        defaultValue={"Add your phone number"}
        value={"+989907434529"}
        type={"phone"}
        disableEdit={disableEdit}
        setDisableEdit={setDisableEdit}
      />
      <EditOption
        title={"Date of Birth"}
        defaultValue={"Enter your birth date"}
        value={""}
        type={"dateOfBirth"}
        disableEdit={disableEdit}
        setDisableEdit={setDisableEdit}
      />
      <EditOption
        title={"Nationality"}
        defaultValue={"Select your country you're from"}
        value={"Iran"}
        type={"nationality"}
        disableEdit={disableEdit}
        setDisableEdit={setDisableEdit}
      />
      <EditOption
        title={"Gender"}
        defaultValue={"Select your gender"}
        value={""}
        type={"gender"}
        disableEdit={disableEdit}
        setDisableEdit={setDisableEdit}
      />
      <EditOption
        title={"Address"}
        defaultValue={"Add your address"}
        value={""}
        type={"phone"}
        disableEdit={disableEdit}
        setDisableEdit={setDisableEdit}
      />
    </div>
  );
}
