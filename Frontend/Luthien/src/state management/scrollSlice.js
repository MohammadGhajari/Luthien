import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    FAQElement: null,
};
const scrollSlice = createSlice({
    name: "scroll",
    initialState,
    reducers: {
        setElement(state, action) {
            state.FAQElement = action.payload;
        },
    },
});
export const { setElement } = scrollSlice.actions;

export default scrollSlice.reducer;
