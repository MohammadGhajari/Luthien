import { login } from "./../services/handleReqs";
import validator from "validator";
import LoginForm from "../components/LoginForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toastError } from "./../services/notify";
import { toast } from "react-toastify";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        if (!validator.isEmail(email))
            return toastError("Please provide a valid email.");

        const res = await toast.promise(login({ email, password }), {
            pending: "Logging in...",
            success: "Welcome to our community!👋",
            error: "Try again.⚠️",
        });
        if (res === "success") navigate("/");
    }

    return (
        <LoginForm
            setEmail={setEmail}
            setPassword={setPassword}
            handleSubmit={handleSubmit}
            type={"login"}
        />
    );
}
