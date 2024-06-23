import styles from "./../styles/reserved-rooms.module.css";
import { getCurrentUser } from "./../services/handleReqs";
import { useEffect, useState } from "react";
import BookedRoomsCart from "../components/BookedRoomsCart";
import Loading from "./../components/Loading";

export default function ReservedRooms() {
  const [reservedRooms, setReservedRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const res = await getCurrentUser();
      console.log(res.data.data.reservedRooms);
      setReservedRooms([...res.data.data.reservedRooms]);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div className={styles["outer-container"]}>
      <p>All of your rooms that are booked in hotels.</p>
      <div className={styles["cart-container"]}>
        {isLoading && <Loading />}
        {reservedRooms.length === 0 && !isLoading && (
          <h1>You have no reserved Rooms</h1>
        )}
        {reservedRooms.map((room, i) => (
          <BookedRoomsCart
            key={i}
            allRooms={reservedRooms}
            setReservedRooms={setReservedRooms}
            photos={room.room.photos}
            hotelName={room.hotel.name}
            roomNumber={room.room.roomNumber}
            amenities={room.hotel.amenities}
            hotelID={room.hotel.id}
            paid={room.room.price - room.room.priceDiscount}
            roomID={room.room._id}
          />
        ))}
      </div>
    </div>
  );
}
