import axios from "axios";
import { toastError, toastSuccess } from "./../services/notify";
import { setCookie } from "../util/cookie";

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
      const res = await axios.post(`${domain}/api/users/login`, data, {
        withCredentials: true,
      });
      if (res.data.status === "success") {
        setCookie("jwt", res.data.token, 7);
        resolve(res.data);
      } else {
        console.log(res.data);

        toastError("Incorrect email or password.");
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
  const data = {
    city,
    rooms,
    startDate: new Date(startDate).getTime(),
    endDate: new Date(endDate).getTime(),
  };
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
      const res = await axios.patch(`${domain}/api/users/updateMe`, data, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (res.data.status === "success") {
        resolve(res.data);
      } else {
        toastError("Error in update user info.");
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

export async function getHotelByName(name) {
  const res = await axios.get(`${domain}/api/hotels?name=${name}`);
  return res.data.data;
}

export async function createHotel(data) {
  try {
    const res = await axios.post(`${domain}/api/hotels`, data);

    return res.data.data;
  } catch (err) {
    if (err.message === "Network Error") {
      toastError("Too many requests.");
    } else {
      toastError("Hotel name is already exists.");
    }
  }
}

export async function updateHotel(id, data) {
  return new Promise(async function (resolve, reject) {
    try {
      const res = await axios.patch(`${domain}/api/hotels/${id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (res.data.status === "success") {
        resolve(res.data);
      } else {
        toastError("Something went wrong.");
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

export async function createReview(data) {
  try {
    const res = await axios.post(`${domain}/api/reviews`, data);
    if (res.data.status === "success") return res.data.data;

    toastError("error in creating review");
  } catch (err) {
    if (err.message === "Network Error") {
      toastError("Too many requests.");
    } else {
      toastError("error in creating review");
    }
  }
}

export async function getHotels() {
  const res = await axios.get(`${domain}/api/hotels`);
  return res.data.data;
}

export async function updateReveiw(id, data) {
  return new Promise(async function (resolve, reject) {
    try {
      const res = await axios.patch(`${domain}/api/reviews/${id}`, data, {
        withCredentials: true,
      });

      if (res.data.status === "success") {
        resolve(res.data);
      } else {
        toastError("Something went wrong.");
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

export async function updateRoom(id, data) {
  return new Promise(async function (resolve, reject) {
    try {
      const res = await axios.patch(`${domain}/api/rooms/${id}`, data, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.data.status === "success") {
        resolve(res.data);
      } else {
        toastError("Something went wrong.");
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

export async function getMyHotel(id) {
  const res = await axios.get(`${domain}/api/hotels?owner=${id}`);
  return res.data.data[0];
}

export async function createRoom(data) {
  try {
    const res = await axios.post(`${domain}/api/rooms`, data);
    if (res.data.status === "success") return res.data.data;

    toastError("error in creating room");
  } catch (err) {
    if (err.message === "Network Error") {
      toastError("Too many requests.");
    } else {
      toastError("error in creating room");
    }
  }
}
