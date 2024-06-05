import EditOption from "../components/EditOption";
import styles from "./../styles/personal-information.module.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "./../services/handleReqs";
import { toast } from "react-toastify";
import { toastError, toastSuccess } from "./../services/notify";
import validator from "validator";
import {
  setEmail,
  setName,
  setPhoto,
  setRole,
  setAddress,
  setDateOfBirth,
  setGender,
  setNationality,
  setPhoneNumber,
  setfavoriteHotels,
} from "./../state management/userSlice";

export default function PersonalInformation() {
  const [disableEdit, setDisableEdit] = useState(false);
  const dispatch = useDispatch();

  const {
    name,
    email,
    photo,
    dateOfBirth,
    phoneNumber,
    nationality,
    gender,
    address,
  } = useSelector((state) => state.user);

  const [nameState, setNameState] = useState("");
  const [emailState, setEmailState] = useState("");
  const [dateOfBirthState, setDateOfBirthState] = useState("");
  const [phoneNumberState, setPhoneNumberState] = useState("");
  const [nationalityState, setNationalityState] = useState("");
  const [genderState, setGenderState] = useState("");
  const [addressState, setAddressState] = useState("");
  const [photoState, setPhotoState] = useState("");

  async function handlePhotoChange(e) {
    setPhotoState(e.target.files[0]);
    const res = await toast.promise(updateUser({ photo: e.target.files[0] }), {
      pending: "Updating...",
      success: "Your profile updated successfully!⚡",
      error: "Try again.⚠️",
    });
    dispatch(setPhoto(res.data.user.photo));
    return true;
  }
  async function handleSaveName() {
    if (nameState) {
      const res = await toast.promise(updateUser({ name: nameState }), {
        pending: "Updating...",
        success: "Your name updated successfully!⚡",
        error: "Try again.⚠️",
      });
      dispatch(setName(nameState));
      return true;
    } else {
      toastError("Enter your name.");
      return false;
    }
  }
  async function handleSaveEmail() {
    if (emailState) {
      if (validator.isEmail(emailState)) {
        const res = await toast.promise(updateUser({ email: emailState }), {
          pending: "Updating...",
          success: "Your email updated successfully!⚡",
        });
        dispatch(setEmail(emailState));
        return true;
      } else {
        toastError("Please provide a valid email.");
        return false;
      }
    } else {
      toastError("Enter your email.");
      return false;
    }
  }
  async function handleSavePhone() {
    console.log(phoneNumberState);
    if (phoneNumberState) {
      if (validator.isMobilePhone(phoneNumberState)) {
        const res = await toast.promise(
          updateUser({ phoneNumber: phoneNumberState }),
          {
            pending: "Updating...",
            success: "Your phone number updated successfully!⚡",
          }
        );
        dispatch(setPhoneNumber(phoneNumberState));
        return true;
      } else {
        toastError("Please provide a valid phone number.");
        return false;
      }
    } else {
      toastError("Enter your phone number.");
      return false;
    }
  }
  async function handleSaveBirthDate() {
    if (dateOfBirthState) {
      if (validator.isDate(dateOfBirthState.replaceAll("/", "-"))) {
        const res = await toast.promise(
          updateUser({ dateOfBirth: dateOfBirthState }),
          {
            pending: "Updating...",
            success: "Your birth date updated successfully!⚡",
          }
        );
        dispatch(setDateOfBirth(dateOfBirthState));
        return true;
      } else {
        toastError("Please provide a valid birth date.");
        return false;
      }
    } else {
      toastError("Enter your birth date.");
      return false;
    }
  }
  async function handleSaveNationality() {
    if (nationalityState) {
      const res = await toast.promise(
        updateUser({ nationality: nationalityState }),
        {
          pending: "Updating...",
          success: "Your nationality updated successfully!⚡",
        }
      );
      dispatch(setNationality(nationalityState));
      return true;
    } else {
      toastError("Please provide your nationality");
      return false;
    }
  }
  async function handleSaveGender() {
    if (genderState) {
      let gen =
        genderState === "I'm a man"
          ? "male"
          : genderState === "I'm a woman"
          ? "female"
          : "not to say";

      const res = await toast.promise(updateUser({ gender: gen }), {
        pending: "Updating...",
        success: "Your gender updated successfully!⚡",
      });
      dispatch(setGender(genderState));
      return true;
    } else {
      toastError("Please provide your gender");
      return false;
    }
  }
  async function handleSaveAddress() {
    if (addressState) {
      const res = await toast.promise(updateUser({ address: addressState }), {
        pending: "Updating...",
        success: "Your address updated successfully!⚡",
      });
      dispatch(setAddress(addressState));
      return true;
    } else {
      toastError("Enter your address.");
      return false;
    }
  }

  return (
    <div className={styles["container"]}>
      <div className={styles["header"]}>
        <div className={styles["left-side"]}>
          <h1>Personal Details</h1>
          <p>Update your info and find out how it's used.</p>
        </div>
        <div className={styles["right-side"]}>
          <div
            className={styles["prof-container"]}
            style={{ background: `URL(${photo})` }}
          >
            <label htmlFor="photo-inp"></label>
            <input
              onChange={handlePhotoChange}
              type="file"
              id="photo-inp"
              name="photo"
              accept={"image/jpeg, image/png, image/jpg"}
            />
          </div>
        </div>
      </div>
      <EditOption
        title={"Name"}
        value={name}
        type={"name"}
        disableEdit={disableEdit}
        setDisableEdit={setDisableEdit}
        setValue={setNameState}
        handleSave={handleSaveName}
      />
      <EditOption
        title={"Email"}
        value={email}
        type={"email"}
        disableEdit={disableEdit}
        setDisableEdit={setDisableEdit}
        setValue={setEmailState}
        handleSave={handleSaveEmail}
      />
      <EditOption
        title={"Phone Number"}
        defaultValue={"Add your phone number"}
        value={phoneNumber}
        type={"phone"}
        disableEdit={disableEdit}
        setDisableEdit={setDisableEdit}
        setValue={setPhoneNumberState}
        handleSave={handleSavePhone}
      />
      <EditOption
        title={"Date of Birth"}
        defaultValue={"Enter your birth date"}
        value={dateOfBirth}
        type={"dateOfBirth"}
        disableEdit={disableEdit}
        setDisableEdit={setDisableEdit}
        setValue={setDateOfBirthState}
        handleSave={handleSaveBirthDate}
      />
      <EditOption
        title={"Nationality"}
        defaultValue={"Select the country you're from"}
        value={nationality}
        type={"nationality"}
        disableEdit={disableEdit}
        setDisableEdit={setDisableEdit}
        setValue={setNationalityState}
        handleSave={handleSaveNationality}
      />
      <EditOption
        title={"Gender"}
        defaultValue={"Select your gender"}
        value={
          gender === "male"
            ? "I'm a man"
            : gender === "female"
            ? "I'm a woman"
            : "I prefer not to say"
        }
        type={"gender"}
        disableEdit={disableEdit}
        setDisableEdit={setDisableEdit}
        setValue={setGenderState}
        handleSave={handleSaveGender}
      />
      <EditOption
        title={"Address"}
        defaultValue={"Add your address"}
        value={address}
        type={"address"}
        disableEdit={disableEdit}
        setDisableEdit={setDisableEdit}
        setValue={setAddressState}
        handleSave={handleSaveAddress}
      />
    </div>
  );
}
