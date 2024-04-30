import userReducer from "./userSlice.js";
import scrollReducer from "./scrollSlice.js";
import searchRoomSliceReducer from "./searchRoomSlice.js";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        user: userReducer,
        scroll: scrollReducer,
        searchRoom: searchRoomSliceReducer,
    },
});

export default store;
