import { useEffect, useState } from "react";
import styles from "./../styles/search-box.module.css";
import InputField from "./InputField";
import { useDispatch } from "react-redux";
import {
    setStartDate,
    setEndDate,
} from "./../state management/searchRoomSlice";

export default function SearchBox() {
    const dispatch = useDispatch();

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
    // function handleStartDate(e) {
    //     dispatch(setStartDate(e.target.value));
    // }
    // function handleEndDate(e) {
    //     dispatch(setEndDate(e.target.value));
    // }

    function handleSubmit(e) {
        e.preventDefault();
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
                    <InputField key={0} placeholder="Hotel, City" left={25} />
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
