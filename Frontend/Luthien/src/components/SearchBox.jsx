import styles from "./../styles/search-box.module.css";
import InputField from "./InputField";
import { useDispatch, useSelector } from "react-redux";
import {
  setStartDate,
  setEndDate,
  setRawResults,
  setFilteredResults,
  setLoading,
  setCity,
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

    const hotels = await getSearchQuery(
      city.toLowerCase(),
      rooms,
      startDate,
      endDate
    );

    dispatch(setFilteredResults(hotels));
    dispatch(setRawResults(hotels));
    dispatch(setNoFilters());

    dispatch(setLoading(false));
  }

  return (
    <div className={styles["container"]}>
      <div className={styles["inner-container"]}>
        <img src="./hero-hotel-background.png" alt="hero" />
        <div className={styles["search-container"]}>
          <h1 className={styles["title"]}>{title}</h1>
          <form onSubmit={handleSubmit} className={styles["fields-container"]}>
            <div className={styles["left"]}>
              {showCityField && (
                <InputField key={0} placeholder="City" left={15} />
              )}
              <InputField
                key={1}
                placeholder="Passengers"
                left={25}
                width={showCityField ? "50%" : "100%"}
                type={!showCityField ? "group" : "default"}
              />
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
