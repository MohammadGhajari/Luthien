import EditOption from "../components/EditOption";
import styles from "./../styles/personal-information.module.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser, getCurrentUser } from "./../services/handleReqs";
import { toast } from "react-toastify";
import { toastError } from "./../services/notify";
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
import { getTime } from "../util/time";

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

  async function handlePhotoChange(e) {
    const currentUser = await getCurrentUser();

    const res = await toast.promise(
      updateUser({
        photo: e.target.files[0],
        activity: [
          ...currentUser.data.data.activity,
          {
            type: "updateProfile",
            data: {},
            date: getTime(),
          },
        ],
      }),
      {
        pending: "Updating...",
        success: "Your profile updated successfully!⚡",
        error: "Try again.⚠️",
      }
    );
    dispatch(setPhoto(res.data.user.photo));
    return true;
  }
  async function handleSaveName() {
    if (nameState) {
      const currentUser = await getCurrentUser();

      const res = await toast.promise(
        updateUser({
          name: nameState,
          activity: [
            ...currentUser.data.data.activity,
            {
              type: "updateName",
              data: {
                lastName: currentUser.data.data.name,
                newName: nameState,
              },
              date: getTime(),
            },
          ],
        }),
        {
          pending: "Updating...",
          success: "Your name updated successfully!⚡",
          error: "Try again.⚠️",
        }
      );
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
        const currentUser = await getCurrentUser();

        const res = await toast.promise(
          updateUser({
            email: emailState,
            activity: [
              ...currentUser.data.data.activity,
              {
                type: "updateEmail",
                data: {
                  lastEmail: currentUser.data.data.email,
                  newName: emailState,
                },
                date: getTime(),
              },
            ],
          }),
          {
            pending: "Updating...",
            success: "Your email updated successfully!⚡",
          }
        );
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
        const currentUser = await getCurrentUser();

        const res = await toast.promise(
          updateUser({
            phoneNumber: phoneNumberState,
            activity: [
              ...currentUser.data.data.activity,
              {
                type: "updatePhoneNumber",
                data: {
                  lastPhone: currentUser.data.data.phoneNumber,
                  newPhone: phoneNumberState,
                },
                date: getTime(),
              },
            ],
          }),
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
        const currentUser = await getCurrentUser();

        const res = await toast.promise(
          updateUser({
            dateOfBirth: dateOfBirthState,
            activity: [
              ...currentUser.data.data.activity,
              {
                type: "updateBirthday",
                data: {
                  lastBirth: currentUser.data.data.dateOfBirth,
                  newBirth: dateOfBirthState,
                },
                date: getTime(),
              },
            ],
          }),
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
      const currentUser = await getCurrentUser();

      const res = await toast.promise(
        updateUser({
          nationality: nationalityState,
          activity: [
            ...currentUser.data.data.activity,
            {
              type: "updateNationality",
              data: {
                lastNationality: currentUser.data.data.nationality,
                newNationality: nationalityState,
              },
              date: getTime(),
            },
          ],
        }),
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

      const currentUser = await getCurrentUser();
      const res = await toast.promise(
        updateUser({
          gender: gen,
          activity: [
            ...currentUser.data.data.activity,
            {
              type: "updateGender",
              data: {
                lastGender: currentUser.data.data.gender,
                newGender: gen,
              },
              date: getTime(),
            },
          ],
        }),
        {
          pending: "Updating...",
          success: "Your gender updated successfully!⚡",
        }
      );
      dispatch(setGender(genderState));
      return true;
    } else {
      toastError("Please provide your gender");
      return false;
    }
  }
  async function handleSaveAddress() {
    if (addressState) {
      const currentUser = await getCurrentUser();
      const res = await toast.promise(
        updateUser({
          address: addressState,
          activity: [
            ...currentUser.data.data.activity,
            {
              type: "updateAddress",
              data: {
                lastAddress: currentUser.data.data.address,
                newAddress: addressState,
              },
              date: getTime(),
            },
          ],
        }),
        {
          pending: "Updating...",
          success: "Your address updated successfully!⚡",
        }
      );
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
