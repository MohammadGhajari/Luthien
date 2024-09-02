import { useEffect, useRef, useState } from "react";
import styles from "./../styles/input-field.module.css";
import { FaPlus } from "react-icons/fa";
import AddRoom from "./AddRoom";
import { useDispatch, useSelector } from "react-redux";
import { setRooms, setCity } from "./../state management/searchRoomSlice";
import AOS from "aos";
import { TfiControlShuffle } from "react-icons/tfi";

export default function InputField({
  placeholder = "Name",
  width = "50%",
  height,
  color = "white",
  setValue,
  type,
}) {
  const { rooms } = useSelector((state) => state.searchRoom);
  const [inputValue, setInputValue] = useState(
    placeholder === "Passengers" ? "1 Adult, 1 Room" : ""
  );
  const dispatch = useDispatch();

  const randomID = Math.random();

  function handleAddRoom(e) {
    dispatch(setRooms([...rooms, { adults: 1, children: 0 }]));
  }
  function handleChange(e) {
    setInputValue(e.target.value);
    dispatch(setCity(e.target.value));
    if (setValue) setValue(e.target.value);
  }

  useEffect(
    function () {
      if (placeholder === "Passengers") {
        const adultCount = rooms.reduce((acc, room) => {
          return acc + room.adults;
        }, 0);
        const roomCount = rooms.length;

        setInputValue(`${adultCount} Adults, ${roomCount} Rooms`);
      }
    },
    [rooms]
  );

  return (
    <div
      className={styles["container"]}
      style={{
        width: `${width}`,
        height: `${height ? height + "rem" : ""}`,
      }}
    >
      <label
        className={`${styles["input-label"]} ${
          inputValue ? styles["has-value"] : ""
        }`}
        style={{
          backgroundColor: color,
        }}
        htmlFor={randomID}
      >
        {placeholder}
      </label>
      <input
        onChange={handleChange}
        className={styles["input-field"]}
        type="text"
        value={placeholder === "Passengers" ? inputValue : undefined}
        id={randomID}
        style={{ backgroundColor: color }}
      />

      {placeholder === "Passengers" && (
        <div
          className={styles["passenger-modal"]}
          style={
            type === "group"
              ? {
                  left: `${
                    window.innerWidth > 500
                      ? "-30rem"
                      : window.innerWidth <= 500 && window.innerWidth > 300
                      ? "3rem"
                      : "-3rem"
                  }`,
                }
              : null
          }
        >
          <div className={styles["inner-container"]}>
            {rooms.map((room, i) => (
              <AddRoom key={i} i={i} room={room} />
            ))}

            <button type="button" onClick={handleAddRoom}>
              <FaPlus /> <span>Add Room</span>
            </button>
          </div>

          <div className={styles["confirm-btn-container"]}>
            <div type="button">Confirm</div>
          </div>
        </div>
      )}
    </div>
  );
}
