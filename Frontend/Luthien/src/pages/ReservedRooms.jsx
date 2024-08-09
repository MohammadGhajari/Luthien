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
      // const res = await getCurrentUser();
      // setReservedRooms([...res.data.data.reservedRooms]);
      const fakeReservedRooms = [
        {
          room: {
            photos: [
              "./../../public/hotel cover/alpine-retreat-1.jpg",
              "./../../public/hotel cover/alpine-retreat-2.jpg",
            ],
            roomNumber: 127,
            price: 250,
            priceDiscount: 100,
            _id: 1,
          },
          hotel: {
            name: "Almas Shargh",
            amenities: ["game", "gym", "swwiming pool", "tea maker"],
            id: 1,
          },
        },
        {
          room: {
            photos: [
              "./../../public/hotel cover/alpine-retreat-2.jpg",
              "./../../public/hotel cover/city-center-boutique-hotel-1.jpg",
            ],
            roomNumber: 356,
            price: 300,
            priceDiscount: 250,
            _id: 2,
          },
          hotel: {
            name: "Kir gholam",
            amenities: [
              "shopping",
              "24 hours services",
              "fire extinguishing",
              "help box",
            ],
            id: 2,
          },
        },
        {
          room: {
            photos: [
              "./../../public/hotel cover/city-center-boutique-hotel-1.jpg",
              "./../../public/hotel cover/alpine-retreat-1.jpg",
            ],
            roomNumber: 568,
            price: 250,
            priceDiscount: 200,
            _id: 3,
          },
          hotel: {
            name: "Kir khar asb arab",
            amenities: ["party services", "ask inside room", "pet", "parking"],
            id: 3,
          },
        },
      ];
      setReservedRooms([...fakeReservedRooms]);
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
