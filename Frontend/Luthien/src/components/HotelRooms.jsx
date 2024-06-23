import styles from "./../styles/hotel-rooms.module.css";
import RoomCart from "./RoomCart";

export default function HotelRooms({ rooms, amenities, hotelID, hotelName }) {
  return (
    <div id="hotel-rooms" className={styles["container"]}>
      <h1>Choose your room</h1>
      <div className={styles["room-carts-container"]}>
        {rooms.map((room) =>
          room.isFull ? (
            <></>
          ) : (
            <RoomCart
              key={room.roomNumber}
              hotelID={hotelID}
              amenities={amenities}
              price={room.price}
              discount={room.priceDiscount}
              number={room.roomNumber}
              photos={room.photos}
              roomId={room._id}
              hotelName={hotelName}
            />
          )
        )}
      </div>
    </div>
  );
}
