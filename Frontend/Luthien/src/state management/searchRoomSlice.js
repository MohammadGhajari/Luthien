import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    rooms: [{ adults: 1, children: 0 }],
    city: "",
    startDate: null,
    endDate: null,
    results: null,
};
const searchRoomSlice = createSlice({
    name: "searchRoom",
    initialState,
    reducers: {
        setRooms(state, action) {
            state.rooms = action.payload;
        },
        setCity(state, action) {
            state.city = action.payload;
        },
        setStartDate(state, action) {
            state.startDate = action.payload;
        },
        setEndDate(state, action) {
            state.endDate = action.payload;
        },
        setResults(state, action) {
            state.results = action.payload;
        },
    },
});
export const { setRooms, setCity, setStartDate, setEndDate, setResults } =
    searchRoomSlice.actions;

export default searchRoomSlice.reducer;
