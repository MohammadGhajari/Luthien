import { useState } from "react";
import styles from "./../styles/hotel-carts-container.module.css";
import HotelCart from "./HotelCart";
import { BsExclamationCircle } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import SideBarFilter from "./SideBarFilter";

export default function HotelCartsContainer() {
  const {
    filteredResults: results,
    rooms,
    rawResults,
  } = useSelector((state) => state.searchRoom);
  const [showFilter, setShowFilter] = useState(false);

  let adultsCount = 0;
  rooms.map((room) => {
    adultsCount += room.adults;
  });

  return (
    <div className={styles.container}>
      {showFilter && (
        <div className={styles["filter-container"]}>
          <button onClick={() => setShowFilter(false)}>X</button>
          <SideBarFilter key={1} border={"none"} />
        </div>
      )}
      {showFilter && (
        <div
          onClick={() => setShowFilter(false)}
          className={styles["overlay"]}
        ></div>
      )}
      <header className={styles["container-header"]}>
        <h3>
          {rawResults[0]?.city.charAt(0).toUpperCase() +
            rawResults[0]?.city.slice(1)}{" "}
          Hotels
        </h3>
        <div className={styles["classification-container"]}>
          <div className={styles["sort-based"]}>
            <p>Sorting based on: </p>
            <div className={styles["btn-container"]}>
              <button>Default Price</button>
              <span></span>
              <button>Lowest Price</button>
              <span></span>
              <button>Highes Price</button>
            </div>
          </div>
          <button
            className={styles["filter-btn"]}
            onClick={() => setShowFilter(true)}
          >
            Filter
          </button>
        </div>

        <p>
          <span>
            <BsExclamationCircle />
          </span>
          <span>
            The prices are calculated for {adultsCount} adult and {rooms.length}{" "}
            rooms.
          </span>
        </p>
      </header>
      <div className={styles["content-container"]}>
        {results?.map((res) => (
          <HotelCart key={res.name} res={res} />
        ))}
      </div>
    </div>
  );
}
