import { useEffect, useState } from "react";
import styles from "./../styles/search-box.module.css";
import InputField from "./InputField";
import { useDispatch, useSelector } from "react-redux";
import {
    setStartDate,
    setEndDate,
    setResults,
} from "./../state management/searchRoomSlice";
import { getSearchQuery } from "./../services/handleReqs.js";
import toast from "react-hot-toast";
import closableToast from "../components/notifications";

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
            return closableToast("Fill out the city field.");
        }

        const hotels = await getSearchQuery(
            city.toLowerCase(),
            rooms,
            startDate,
            endDate
        );
        dispatch(setResults(hotels));
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
