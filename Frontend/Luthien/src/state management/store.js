import userReducer from "./userSlice.js";
import scrollReducer from "./scrollSlice.js";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        user: userReducer,
        scroll: scrollReducer,
    },
});

export default store;
