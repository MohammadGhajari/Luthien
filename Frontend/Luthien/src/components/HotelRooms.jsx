import styles from "./../styles/hotel-rooms.module.css";
import InputField from "./InputField";
import RoomCart from "./RoomCart";

export default function HotelRooms({ rooms, amenities }) {
    return (
        <div id="hotel-rooms" className={styles["container"]}>
            <h1>Choose your room</h1>
            <div className={styles["fields-container"]}>
                <div className={styles["date-input-container"]}>
                    <input
                        // onChange={(e) => dispatch(setStartDate(e.target.value))}
                        className={styles["start-date"]}
                        type="date"
                        // defaultValue={getFormattedDate()}
                    />
                    <input
                        // onChange={(e) => dispatch(setEndDate(e.target.value))}
                        className={styles["end-date"]}
                        type="date"
                        // defaultValue={getFormattedDate()}
                    />
                </div>
                <InputField
                    color={"#f6f6f6"}
                    key={1}
                    placeholder="Passengers"
                    left={25}
                />
            </div>
            <div className={styles["room-carts-container"]}>
                {rooms.map((room) => (
                    <RoomCart
                        amenities={amenities}
                        price={room.price}
                        discount={room.priceDiscount}
                        number={room.roomNumber}
                        photos={room.photos}
                    />
                ))}
            </div>
        </div>
    );
}
