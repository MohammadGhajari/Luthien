import axios from "axios";
import { toastError, toastSuccess } from "./../services/notify";

const domain = "http://127.0.0.10:8000";
export function signup(data) {
    return new Promise(async function (resolve, reject) {
        try {
            const res = await axios.post(`${domain}/api/users/signup`, data);
            if (res.data.status === "success") {
                resolve("success");
            } else {
                if (res.data.message.includes("duplicate key error")) {
                    toastError(
                        "User exists with this email. try another email address."
                    );
                }

                reject("failure");
            }
        } catch (err) {
            // catch block executes, when there is an error in server side.
            if (err.message === "Network Error") {
                toastError("Too many requests.");
            } else {
                toastError(err.message);
            }
        }
    });
}

export function login(data) {
    return new Promise(async function (resolve, reject) {
        try {
            const res = await axios.post(`${domain}/api/users/login`, data);
            if (res.data.status === "success") {
                resolve(res.data);
            } else {
                toastError("Incorrect email or password.");
                reject(res.data);
            }
        } catch (err) {
            // catch block executes, when there is an error in server side.
            if (err.message === "Network Error") {
                toastError("Too many requests.");
            } else {
                toastError(err.message);
            }
        }
    });
}

export function logout() {
    return new Promise(async function (resolve, reject) {
        try {
            const res = await axios.get(`${domain}/api/users/logout`);
            console.log(res);
            if (res.data.status === "success") {
                toastSuccess("Logged out successfully.");
                resolve(res.data);
            } else {
                toastError("Try again.");
                reject(res.data);
            }
        } catch (err) {
            // catch block executes, when there is an error in server side.
            if (err.message === "Network Error") {
                toastError("Too many requests.");
            } else {
                toastError(err.message);
            }
        }
    });
}

export async function getTrendings() {
    const res = await axios.get(`${domain}/api/hotels/trending`);
    return res.data.data;
}

export async function getSearchQuery(city, rooms, startDate, endDate) {
    const data = { city, rooms, startDate, endDate };
    const res = await axios.post(`${domain}/api/hotels/search-query`, data);
    return res.data.data;
}

export async function getDomesticHotels() {
    const res = await axios.get(`${domain}/api/hotels?country=iran`);
    return res.data.data;
}

export async function getForeignHotels() {
    const res = await axios.get(`${domain}/api/hotels?country[ne]=iran`);
    return res.data.data;
}

export async function getHotelById(id) {
    const res = await axios.get(`${domain}/api/hotels?_id=${id}`);
    return res.data.data;
}

export async function getHotelsInCity(city) {
    const res = await axios.get(`${domain}/api/hotels?city=${city}`);
    return res.data.data;
}
