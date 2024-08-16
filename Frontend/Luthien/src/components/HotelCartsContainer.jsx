import { useState } from "react";
import styles from "./../styles/hotel-carts-container.module.css";
import HotelCart from "./HotelCart";
import { BsExclamationCircle } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import SideBarFilter from "./SideBarFilter";
import { setFilteredResults } from "./../state management/searchRoomSlice";
import { FaFilter } from "react-icons/fa";
import { FaRegWindowClose } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default function HotelCartsContainer() {
  const {
    filteredResults: results,
    rooms,
    rawResults,
  } = useSelector((state) => state.searchRoom);
  const [showFilter, setShowFilter] = useState(false);
  const dispatch = useDispatch();

  let adultsCount = 0;
  rooms.map((room) => {
    adultsCount += room.adults;
  });

  function handleLowesSort() {
    let temp = [...results];
    temp.sort((a, b) => a.avgPrice - b.avgPrice);
    dispatch(setFilteredResults([...temp]));
  }
  function handleHighestSort() {
    let temp = [...results];
    temp.sort((a, b) => b.avgPrice - a.avgPrice);
    dispatch(setFilteredResults([...temp]));
  }
  function handlePopularitySort() {
    let temp = [...results];
    temp.sort(
      (a, b) =>
        b.ratingsAverage * b.ratingsQuantity -
        a.ratingsAverage * a.ratingsQuantity
    );

    dispatch(setFilteredResults([...temp]));
  }

  return (
    <div className={styles.container}>
      {showFilter && (
        <div className={styles["filter-container"]}>
          <button onClick={() => setShowFilter(false)}>
            <IoMdClose />
          </button>
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
              <button onClick={handlePopularitySort}>Popularity</button>
              <span></span>
              <button onClick={handleLowesSort}>Lowest Price</button>
              <span></span>
              <button onClick={handleHighestSort}>Highes Price</button>
            </div>
          </div>
          <button
            className={styles["filter-btn"]}
            onClick={() => setShowFilter(true)}
          >
            <span>
              <FaFilter />
            </span>
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
