import { createSlice } from "@reduxjs/toolkit";

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
        resetUser(state, action) {
            state.name = "";
            state.email = "";
            state.photo = "";
            state.role = "user";
        },
    },
});
export const { resetUser, setEmail, setName, setPhoto, setRole } =
    userSlice.actions;

export default userSlice.reducer;
