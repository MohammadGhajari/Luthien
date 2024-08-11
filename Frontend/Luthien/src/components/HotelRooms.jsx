import styles from "./../styles/hotel-rooms.module.css";
import RoomCart from "./RoomCart";
import AOS from "aos";
import { useEffect } from "react";

export default function HotelRooms({
  rooms,
  amenities,
  hotelID,
  hotelName,
  roomsRef,
}) {
  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);
  return (
    <div
      id="hotel-rooms"
      className={styles["container"]}
      ref={roomsRef}
      data-elem={"rooms"}
    >
      <h1 data-aos={"fade-right"}>Choose your room</h1>
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
