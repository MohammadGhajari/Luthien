import { login } from "./../services/handleReqs";
import validator from "validator";
import LoginForm from "../components/LoginForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toastError } from "./../services/notify";
import { toast } from "react-toastify";
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
  setId,
} from "./../state management/userSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Login() {
  const [emailInp, setEmailInp] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  async function handleSubmit(e) {
    e.preventDefault();

    if (!validator.isEmail(emailInp))
      return toastError("Please provide a valid email.");

    const res = await toast.promise(login({ email: emailInp, password }), {
      pending: "Logging in...",
      success: "Welcome to our community!👋",
      error: "Try again.⚠️",
    });

    if (res.status === "success") {
      dispatch(setName(res.data.user.name));
      dispatch(setEmail(res.data.user.email));
      dispatch(setId(res.data.user.id));
      dispatch(setRole(res.data.user.role));
      dispatch(setPhoto(res.data.user.photo));
      dispatch(setAddress(res.data.user.address));
      dispatch(setDateOfBirth(res.data.user.dateOfBirth));
      dispatch(setGender(res.data.user.gender));
      dispatch(setNationality(res.data.user.nationality));
      dispatch(setPhoneNumber(res.data.user.phoneNumber));
      dispatch(setfavoriteHotels(res.data.user.favoriteHotels));

      navigate("/");
    }
  }

  return (
    <LoginForm
      setEmailInp={setEmailInp}
      setPassword={setPassword}
      handleSubmit={handleSubmit}
      type={"login"}
    />
  );
}
