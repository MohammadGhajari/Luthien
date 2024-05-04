import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    hotelName: "",
    threeStar: false,
    fourStar: false,
    fiveStar: false,
    firstPrice: false,
    secondPrice: false,
    thirdPrice: false,
    fourthPrice: false,
    fifthPrice: false,
    swimmingPool: false,
    teaMaker: false,
    prayerRoom: false,
    askInsideRoom: false,
    freeWifi: false,
    gym: false,
    pet: false,
    game: false,
    shopping: false,
    parking: false,
    elevator: false,
    breakfast: false,
    restaurant: false,
    allHoursServices: false,
    fireExtinguishing: false,
    wallCloset: false,
    helpBox: false,
    partyServices: false,
    taxi: false,
    ATM: false,
    library: false,
};
const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setHotelName(state, action) {
            state.hotelName = action.payload;
        },
        setThreeStar(state, action) {
            state.threeStar = action.payload;
        },
        setFourStar(state, action) {
            state.fourStar = action.payload;
        },
        setFiveStar(state, action) {
            state.fiveStar = action.payload;
        },
        setFirstPrice(state, action) {
            state.firstPrice = action.payload;
        },
        setSecondPrice(state, action) {
            state.secondPrice = action.payload;
        },
        setThirdPrice(state, action) {
            state.thirdPrice = action.payload;
        },
        setFourthPrice(state, action) {
            state.fourthPrice = action.payload;
        },
        setFifthPrice(state, action) {
            state.fifthPrice = action.payload;
        },
        setSwimmingPool(state, action) {
            state.swimmingPool = action.payload;
        },
        setTeaMaker(state, action) {
            state.teaMaker = action.payload;
        },
        setPrayerRoom(state, action) {
            state.prayerRoom = action.payload;
        },
        setAskInsideRoom(state, action) {
            state.askInsideRoom = action.payload;
        },
        setFreeWifi(state, action) {
            state.freeWifi = action.payload;
        },
        setGym(state, action) {
            state.gym = action.payload;
        },
        setPet(state, action) {
            state.pet = action.payload;
        },
        setGame(state, action) {
            state.game = action.payload;
        },
        setShopping(state, action) {
            state.shopping = action.payload;
        },
        setParking(state, action) {
            state.parking = action.payload;
        },
        setElevator(state, action) {
            state.elevator = action.payload;
        },
        setBreakfast(state, action) {
            state.breakfast = action.payload;
        },
        setRestaurant(state, action) {
            state.restaurant = action.payload;
        },
        setAllHoursServices(state, action) {
            state.allHoursServices = action.payload;
        },
        setFireExtinguishing(state, action) {
            state.fireExtinguishing = action.payload;
        },
        setWallCloset(state, action) {
            state.wallCloset = action.payload;
        },
        setHelpBox(state, action) {
            state.helpBox = action.payload;
        },
        setPartyServices(state, action) {
            state.partyServices = action.payload;
        },
        setTaxi(state, action) {
            state.taxi = action.payload;
        },
        setATM(state, action) {
            state.ATM = action.payload;
        },
        setLibrary(state, action) {
            state.library = action.payload;
        },

        setNoFilters(state) {
            state.hotelName = "";
            state.threeStar = false;
            state.fourStar = false;
            state.fiveStar = false;
            state.firstPrice = false;
            state.secondPrice = false;
            state.thirdPrice = false;
            state.fourthPrice = false;
            state.fifthPrice = false;
            state.swimmingPool = false;
            state.teaMaker = false;
            state.prayerRoom = false;
            state.askInsideRoom = false;
            state.freeWifi = false;
            state.gym = false;
            state.pet = false;
            state.game = false;
            state.shopping = false;
            state.parking = false;
            state.elevator = false;
            state.breakfast = false;
            state.restaurant = false;
            state.allHoursServices = false;
            state.fireExtinguishing = false;
            state.wallCloset = false;
            state.helpBox = false;
            state.partyServices = false;
            state.taxi = false;
            state.ATM = false;
            state.library = false;
        },
    },
});
export const {
    setHotelName,
    setThreeStar,
    setFourStar,
    setFiveStar,
    setFirstPrice,
    setSecondPrice,
    setThirdPrice,
    setFourthPrice,
    setFifthPrice,
    setSwimmingPool,
    setTeaMaker,
    setPrayerRoom,
    setAskInsideRoom,
    setFreeWifi,
    setPet,
    setGame,
    setGym,
    setShopping,
    setElevator,
    setParking,
    setBreakfast,
    setNoFilters,
    setRestaurant,
    setAllHoursServices,
    setFireExtinguishing,
    setWallCloset,
    setHelpBox,
    setPartyServices,
    setATM,
    setLibrary,
    setTaxi,
} = filterSlice.actions;

export default filterSlice.reducer;
