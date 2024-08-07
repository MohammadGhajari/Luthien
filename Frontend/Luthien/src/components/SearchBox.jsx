import styles from "./../styles/search-box.module.css";
import InputField from "./InputField";
import { useDispatch, useSelector } from "react-redux";
import {
  setStartDate,
  setEndDate,
  setRawResults,
  setFilteredResults,
  setLoading,
} from "./../state management/searchRoomSlice";
import { setNoFilters } from "./../state management/filterSlice";
import { getSearchQuery } from "./../services/handleReqs.js";
import { toastError } from "./../services/notify.js";

export default function SearchBox({ showCityField = true, title = "Hotels" }) {
  const dispatch = useDispatch();
  const { city, rooms, startDate, endDate } = useSelector(
    (state) => state.searchRoom
  );

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

  async function handleSubmit(e) {
    e.preventDefault();
    if (!city) {
      return toastError("Fill out the city field.");
    }
    dispatch(setLoading(true));
    dispatch(setFilteredResults(null));
    dispatch(setRawResults(null));
    dispatch(setNoFilters());

    // const hotels = await getSearchQuery(
    //   city.toLowerCase(),
    //   rooms,
    //   startDate,
    //   endDate
    // );

    //********************************add a fake hotel for development//********************************

    const fakeHotel = {};
    fakeHotel.name = "Almase Shargh";
    fakeHotel.description = "Almase Shargh is a very good hotel for turists.";
    fakeHotel.rooms = [];
    fakeHotel.stars = 4;
    fakeHotel.avgPrice = 120;
    fakeHotel.city = "Tehran";
    fakeHotel.address = "Tehran, janbaz";
    fakeHotel.location = { lat: 12, lng: 12 };
    fakeHotel.phone = "064654";
    fakeHotel.cover = "";
    fakeHotel.photos = [];
    fakeHotel.ratingsAverage = 3;
    fakeHotel.ratingsQuantity = 129;
    fakeHotel.importantVicinityPlaces = [
      { name: "haram", distance: 100, time: 10 },
    ];
    fakeHotel.country = "Iran";
    fakeHotel.amenities = ["swimming pool", "tea maker", "gym", "taxi", "ATM"];
    fakeHotel.photos = [
      "./../../public/hotel cover/alpine-retreat-1.jpg",
      "./../../public/hotel cover/alpine-retreat-2.jpg",
      "./../../public/hotel cover/city-center-boutique-hotel-1.jpg",
    ];

    dispatch(setFilteredResults([fakeHotel, fakeHotel]));
    dispatch(setRawResults([fakeHotel, fakeHotel]));
    dispatch(setNoFilters());
    //********************************add a fake hotel for development//********************************

    dispatch(setLoading(false));
    // dispatch(setFilteredResults(hotels));
    // dispatch(setRawResults(hotels));
    // dispatch(setNoFilters());
  }

  return (
    <div className={styles["container"]}>
      <div className={styles["inner-container"]}>
        <img src="./../../public/hero-hotel-background.png" alt="hero" />
        <div className={styles["search-container"]}>
          <h1 className={styles["title"]}>{title}</h1>
          <form onSubmit={handleSubmit} className={styles["fields-container"]}>
            <div className={styles["left"]}>
              {showCityField && (
                <InputField key={0} placeholder="City" left={15} />
              )}
              <InputField key={1} placeholder="Passengers" left={25} />
            </div>
            <div className={styles["right"]}>
              <div className={styles["date-input-container"]}>
                <input
                  onChange={(e) => dispatch(setStartDate(e.target.value))}
                  className={styles["start-date"]}
                  type="date"
                  defaultValue={getFormattedDate()}
                />
                <input
                  onChange={(e) => dispatch(setEndDate(e.target.value))}
                  className={styles["end-date"]}
                  type="date"
                  defaultValue={getFormattedDate()}
                />
              </div>
              <button type="submit" className={styles["submit-btn"]}>
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
