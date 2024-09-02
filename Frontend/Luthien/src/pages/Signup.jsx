import { signup } from "./../services/handleReqs";
import validator from "validator";
import LoginForm from "../components/LoginForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toastError } from "./../services/notify";
import { toast } from "react-toastify";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validator.isEmail(email)) {
      return toastError("Please provide a valid email.");
    }
    if (password !== passwordConfirm)
      return toastError("Password and password confirm must be the same.");
    if (password.length < 8)
      return toastError("Password length must be greater than 8.");

    setIsLoading(true);
    try {
      const res = await toast.promise(
        signup({ name, email, password, passwordConfirm }),
        {
          pending: "Signning up...",
          success: "Welcome to our community!👋",
          error: "Try again.⚠️",
        }
      );
      if (res === "success") navigate("/login");
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  function emptyFunc(e) {
    e.preventDefault();
  }
  return (
    <LoginForm
      setName={setName}
      setEmailInp={setEmail}
      setPassword={setPassword}
      setPasswordConfirm={setPasswordConfirm}
      handleSubmit={!isLoading ? handleSubmit : emptyFunc}
      type={"signup"}
    />
  );
}
