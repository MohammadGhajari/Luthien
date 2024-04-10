import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { updateUser } from "../services/apiFirebase.js";

const initialState = {
    name: "",
    email: "",
    photo: "",
    role: "user",
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
    },
});
export const { setEmail, setName, setPhoto, setRole } = userSlice.actions;

export default userSlice.reducer;
