import { useEffect, useState } from "react";
import styles from "./../styles/input-field.module.css";
import { FaPlus, FaMinus } from "react-icons/fa";
import AddRoom from "./AddRoom";

export default function InputField({
    placeholder = "Name",
    top,
    left,
    width = 20,
    rooms,
    setRooms,
    setCityHotel,
}) {
    const [inputValue, setInputValue] = useState(
        placeholder === "Passengers" ? "1 Adult, 1 Room" : ""
    );

    const randomID = Math.random();

    function handleAddRoom(e) {
        setRooms([...rooms, { adults: 1, children: 0 }]);
    }
    function handleChange(e) {
        setInputValue(e.target.value);
        setCityHotel(e.target.value);
    }

    useEffect(
        function () {
            if (placeholder === "Passengers") {
                const adultCount = rooms.reduce((acc, room) => {
                    return acc + room.adults;
                }, 0);
                const roomCount = rooms.length;
                console.log(`${adultCount} adults, ${roomCount} rooms`);

                setInputValue(`${adultCount} Adults, ${roomCount} Rooms`);
            }
        },
        [rooms]
    );

    return (
        <div className={styles.container} style={{ width: `${width}rem` }}>
            <label
                className={`${styles["input-label"]} ${
                    inputValue ? styles["has-value"] : ""
                }`}
                style={{ top: `${top}%`, left: `${left}%` }}
                htmlFor={randomID}
            >
                {placeholder}
            </label>
            <input
                onChange={handleChange}
                className={styles["input-field"]}
                type="text"
                defaultValue={
                    placeholder === "Passengers" ? "1 Adult, 1 Room" : ""
                }
                value={placeholder === "Passengers" ? inputValue : undefined}
                id={randomID}
            />

            {placeholder === "Passengers" && (
                <div className={styles["passenger-modal"]}>
                    <div className={styles["inner-container"]}>
                        {rooms.map((room, i) => (
                            <AddRoom
                                i={i}
                                room={room}
                                setRooms={setRooms}
                                rooms={rooms}
                            />
                        ))}

                        <button onClick={handleAddRoom}>
                            <FaPlus /> <span>Add Room</span>
                        </button>
                    </div>

                    <div className={styles["confirm-btn-container"]}>
                        <button>Confirm</button>
                    </div>
                </div>
            )}
        </div>
    );
}
