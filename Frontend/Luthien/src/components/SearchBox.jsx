import { useState } from "react";
import styles from "./../styles/search-box.module.css";
import InputField from "./InputField";

export default function SearchBox() {
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

    return (
        <div className={styles.conatainer}>
            <img src="./../../public/hero-hotel-background.png" alt="hero" />

            <div className={styles["search-container"]}>
                <h1>Hotel</h1>
                <form className={styles["fields-container"]}>
                    <InputField key={0} placeholder="Hotel, City" left={25} />
                    <div className={styles["date-input-container"]}>
                        <input
                            onChange={(e) => s(e.target.value)}
                            className={styles["start-date"]}
                            type="date"
                            defaultValue={getFormattedDate()}
                        />
                        <input
                            className={styles["end-date"]}
                            type="date"
                            defaultValue={getFormattedDate()}
                        />
                    </div>
                    <InputField key={1} placeholder="Passengers" left={30} />
                    <button type="submit" className={styles["submit-btn"]}>
                        Search
                    </button>
                </form>
            </div>
        </div>
    );
}
