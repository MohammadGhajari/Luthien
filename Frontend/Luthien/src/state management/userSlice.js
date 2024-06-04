import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  photo: "",
  role: "user",
  dateOfBirth: "",
  phoneNumber: "",
  nationality: "",
  gender: "",
  address: "",
  favoriteHotels: [],
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setName(state, action) {
      state.name = action.payload;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
    setPhoto(state, action) {
      state.photo = action.payload;
    },
    setRole(state, action) {
      state.role = action.payload;
    },
    setDateOfBirth(state, action) {
      state.dateOfBirth = action.payload;
    },
    setPhoneNumber(state, action) {
      state.phoneNumber = action.payload;
    },
    setNationality(state, action) {
      state.nationality = action.payload;
    },
    setGender(state, action) {
      state.gender = action.payload;
    },
    setAddress(state, action) {
      console.log(action.payload);
      state.address = action.payload;
    },
    setfavoriteHotels(state, action) {
      state.favoriteHotels = action.payload;
    },
    resetUser(state, action) {
      state.name = "";
      state.email = "";
      state.photo = "";
      state.role = "user";
    },
  },
});
export const {
  resetUser,
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
} = userSlice.actions;

export default userSlice.reducer;
