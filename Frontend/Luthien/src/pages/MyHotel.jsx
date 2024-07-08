import { useEffect, useState } from "react";
import { getMyHotel } from "../services/handleReqs";
import { useSelector } from "react-redux";
import styles from "./../styles/my-hotel.module.css";
import { FaStar } from "react-icons/fa";
import Loading from "../components/Loading";
import RoomCart from "../components/RoomCart";
import { RiH3 } from "react-icons/ri";
import { NavLink } from "react-router-dom";

export default function MyHote() {
  const { id: userId } = useSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(false);
  const [hotel, setHotel] = useState({});

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const res = await getMyHotel(userId);
      setHotel(res);
      setIsLoading(false);
    }
    fetchData();
  }, [userId]);

  return (
    <div className={styles["container"]}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <h1>{hotel.name}</h1>
          <p>
            {" "}
            {Array.from({ length: hotel.stars }, (x, i) => (
              <FaStar key={i} />
            ))}
          </p>
          <div className={styles["room-carts-container"]}>
            {hotel.rooms?.length === 0 && (
              <h3>Your hotel have not any rooms.</h3>
            )}
            {hotel.rooms?.map((r, i) => (
              <RoomCart
                myOwn={true}
                key={i}
                price={r.price}
                discount={r.priceDiscount}
                photos={r.photos}
                number={r.number}
                amenities={hotel.amenities}
                hotelID={r.hotelID}
                roomId={r.roomId}
                hotelName={r.hotelName}
              />
            ))}
          </div>
          <NavLink
            className={styles["nav-btn"]}
            to={`/dashboard/my-hotel/${hotel.id}`}
          >
            Add room
          </NavLink>
        </>
      )}
    </div>
  );
}
