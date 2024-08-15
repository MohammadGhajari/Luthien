import { createSlice } from "@reduxjs/toolkit";

function getFormattedDate() {
  let date = new Date();
  let formattedDate =
    date.getFullYear() +
    "-" +
    (date.getMonth() + 1).toString().padStart(2, "0") +
    "-" +
    date.getDate().toString().padStart(2, "0");

  return formattedDate;
}

const initialState = {
  rooms: [{ adults: 1, children: 0 }],
  city: "",
  startDate: getFormattedDate(),
  endDate: getFormattedDate(),
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
