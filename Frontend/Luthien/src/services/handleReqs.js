import axios from "axios";
import { toastError, toastSuccess } from "./../services/notify";
import { setCookie } from "../helper/cookie";

const domain = "http://127.0.0.10:8000";
export function signup(data) {
  return new Promise(async function (resolve, reject) {
    try {
      const res = await axios.post(`${domain}/api/users/signup`, data);
      if (res.data.status === "success") {
        resolve("success");
      } else {
        if (res.data.message.includes("duplicate key error")) {
          toastError("User exists with this email. try another email address.");
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
        setCookie("jwt", res.data.token, 7);
        console.log(res);
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
      if (res.data.status === "success") {
        toastSuccess("Logged out successfully.");
        setCookie("jwt", "", 7);
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

export async function getCurrentUser() {
  const res = await axios.get(`${domain}/api/users/me`, {
    withCredentials: true,
  });
  return res.data;
}

export async function getHotelReviews(hotelName) {
  const res = await axios.get(
    `${domain}/api/reviews/hotelReviews/${hotelName}`
  );
  return res.data.data;
}

export async function updateUser(data) {
  return new Promise(async function (resolve, reject) {
    try {
      console.log(data);
      const res = await axios.patch(`${domain}/api/users/updateMe`, data, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(res);
      if (res.data.status === "success") {
        resolve(res.data);
      } else {
        toastError("This email address is used before.");
        reject(res.data);
      }
    } catch (err) {
      if (err.message === "Network Error") {
        toastError("Too many requests.");
      } else {
        toastError(err.message);
      }
    }
  });
}

export async function resetPassword(data) {
  return new Promise(async function (resolve, reject) {
    try {
      const res = await axios.patch(`${domain}/api/users/resetPassword`, data, {
        withCredentials: true,
      });
      console.log(res);
      if (res.data.status === "success") {
        resolve(res.data);
      } else {
        toastError("Current password is incorrect.");
        reject(res.data);
      }
    } catch (err) {
      if (err.message === "Network Error") {
        toastError("Too many requests.");
      } else {
        toastError(err.message);
      }
    }
  });
}

export async function deleteAccount() {
  return new Promise(async function (resolve, reject) {
    try {
      const res = await axios.delete(`${domain}/api/users/deleteMe`, {
        withCredentials: true,
      });
      console.log(res);
      if (res.status === 204) {
        resolve("success");
      } else {
        toastError("Error in delete account.");
        reject("error");
      }
    } catch (err) {
      if (err.message === "Network Error") {
        toastError("Too many requests.");
      } else {
        toastError(err.message);
      }
    }
  });
}

export async function getFavoriteHotels(hotels) {
  let data = [];
  for (let i = 0; i < hotels.length; i++) {
    const res = await axios.get(`${domain}/api/hotels/${hotels[i]}`);
    data.push(res.data.data.data);
  }
  return data;
}
