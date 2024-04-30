import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    rooms: [{ adults: 1, children: 0 }],
    cityHotel: "",
    startDate: null,
    endDate: null,
};
const searchRoomSlice = createSlice({
    name: "searchRoom",
    initialState,
    reducers: {
        setRooms(state, action) {
            state.rooms = action.payload;
        },
        setCityHotel(state, action) {
            state.cityHotel = action.payload;
        },
        setStartDate(state, action) {
            state.startDate = action.payload;
        },
        setEndDate(state, action) {
            state.endDate = action.payload;
        },
    },
});
export const { setRooms, setCityHotel, setStartDate, setEndDate } =
    searchRoomSlice.actions;

export default searchRoomSlice.reducer;
