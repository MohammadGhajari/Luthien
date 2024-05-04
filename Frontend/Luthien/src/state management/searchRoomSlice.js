import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    rooms: [{ adults: 1, children: 0 }],
    city: "",
    startDate: null,
    endDate: null,
    filteredResults: null,
    rawResults: null,
    isLoading: false,
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
        setRawResults(state, action) {
            state.rawResults = action.payload;
        },
        setFilteredResults(state, action) {
            state.filteredResults = action.payload;
        },
        setLoading(state, action) {
            state.isLoading = action.payload;
        },
    },
});
export const {
    setRooms,
    setCity,
    setStartDate,
    setEndDate,
    setRawResults,
    setFilteredResults,
    setLoading,
} = searchRoomSlice.actions;

export default searchRoomSlice.reducer;