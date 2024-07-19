import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarkMode: false,
};
const darkModeSlice = createSlice({
  name: "darkmode",
  initialState,
  reducers: {
    setIsDarkMode(state, action) {
      state.isDarkMode = action.payload;
    },
  },
});
export const { setIsDarkMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;
