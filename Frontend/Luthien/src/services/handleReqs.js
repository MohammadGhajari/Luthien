import axios from "axios";
import toast from "react-hot-toast";
import closableToast from "../components/notifications";

export function signup(data) {
    return new Promise(async function (resolve, reject) {
        try {
            const res = await axios.post(
                "http://127.0.0.10:8000/api/users/signup",
                data
            );
            if (res.data.status === "success") {
                resolve("success");
            } else {
                if (res.data.message.includes("duplicate key error")) {
                    closableToast(
                        "User exists with this email. try another email address."
                    );
                }

                reject("failure");
            }
        } catch (err) {
            // catch block executes, when there is an error in server side.
            if (err.message === "Network Error") {
                closableToast("Too many requests.");
            } else {
                closableToast(err.message);
            }
        }
    });
}

export function login(data) {
    return new Promise(async function (resolve, reject) {
        try {
            const res = await axios.post(
                "http://127.0.0.10:8000/api/users/login",
                data
            );

            console.log(res);
            if (res.data.status === "success") {
                resolve("success");
            } else {
                closableToast("Incorrect email or password.");
                reject("failure");
            }
        } catch (err) {
            // catch block executes, when there is an error in server side.
            if (err.message === "Network Error") {
                closableToast("Too many requests.");
            } else {
                closableToast(err.message);
            }
        }
    });
}

export async function getTrendings() {
    const res = await axios.get("http://127.0.0.10:8000/api/hotels/trending");

    return res.data.data;
}
