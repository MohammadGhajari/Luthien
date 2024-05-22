import { useEffect, useState } from "react";
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

export default function SearchBox() {
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
        dispatch(setLoading(false));
        dispatch(setFilteredResults(hotels));
        dispatch(setRawResults(hotels));
        dispatch(setNoFilters());
    }

    return (
        <div className={styles.conatainer}>
            <img src="./../../public/hero-hotel-background.png" alt="hero" />

            <div className={styles["search-container"]}>
                <h1>Hotel</h1>
                <form
                    onSubmit={handleSubmit}
                    className={styles["fields-container"]}
                >
                    <InputField key={0} placeholder="City" left={20} />
                    <div className={styles["date-input-container"]}>
                        <input
                            onChange={(e) =>
                                dispatch(setStartDate(e.target.value))
                            }
                            className={styles["start-date"]}
                            type="date"
                            defaultValue={getFormattedDate()}
                        />
                        <input
                            onChange={(e) =>
                                dispatch(setEndDate(e.target.value))
                            }
                            className={styles["end-date"]}
                            type="date"
                            defaultValue={getFormattedDate()}
                        />
                    </div>
                    <InputField key={1} placeholder="Passengers" left={25} />
                    <button type="submit" className={styles["submit-btn"]}>
                        Search
                    </button>
                </form>
            </div>
        </div>
    );
}
