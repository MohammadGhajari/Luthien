import styles from "./../styles/hotel-overview.module.css";
import { toast } from "react-toastify";
import { toastError, toastSuccess } from "./../services/notify";
import { IoArrowBackOutline } from "react-icons/io5";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { updateUser, getCurrentUser } from "./../services/handleReqs.js";
import { setfavoriteHotels } from "./../state management/userSlice.js";
import { useDispatch, useSelector } from "react-redux";
import AOS from "aos";
import { useEffect } from "react";
import { getTime } from "../helper/time.js";

export default function HotelOverview({
  name,
  stars,
  ratings,
  desc,
  hotelID,
  reveiwsCount,
}) {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const { email, favoriteHotels } = useSelector((state) => state.user);

  const isFav = favoriteHotels.includes(hotelID);

  async function handleFavorite() {
    if (!email) return toastError("Please Login");

    const currentUser = await getCurrentUser();

    if (!isFav) {
      dispatch(setfavoriteHotels([...favoriteHotels, hotelID]));

      const res = await toast.promise(
        updateUser({
          favoriteHotels: [...favoriteHotels, hotelID],
          activity: [
            ...currentUser.data.data.activity,
            { type: "addFav", data: { hotelName: name }, date: getTime() },
          ],
        }),
        {
          pending: "Adding...",
          success: "This hotel added to your favorites!⚡",
          error: "Try again.⚠️",
        }
      );
    } else {
      const filteredFav = favoriteHotels.filter((f) => f !== hotelID);

      dispatch(setfavoriteHotels([...filteredFav]));

      const res = await toast.promise(
        updateUser({
          favoriteHotels: [...filteredFav],
          activity: [
            ...currentUser.data.data.activity,
            { type: "deleteFav", data: { hotelName: name }, date: getTime() },
          ],
        }),
        {
          pending: "Removing...",
          success: "This hotel removed from your favorites!⚡",
          error: "Try again.⚠️",
        }
      );
    }
  }

  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);

  return (
    <div id="hotel-overview" className={styles["overview-container"]}>
      <div className={styles["overview-header"]}>
        <button onClick={() => navigation(-1)}>
          <IoArrowBackOutline />
        </button>
        <button
          className={isFav ? styles["is-fave"] : ""}
          onClick={handleFavorite}
        >
          <span>{isFav ? <FaHeart /> : <FaRegHeart />}</span> <span>Save</span>
        </button>
      </div>
      <div className={styles["gallery"]}>
        <img
          data-aos={"fade-right"}
          src="./../../public/sample data/1.jpeg"
          alt="photo"
        />
        <img
          data-aos={"fade-down"}
          src="./../../public/sample data/2.jpg"
          alt="photo"
        />
        <img
          data-aos={"fade-left"}
          src="./../../public/sample data/3.jpg"
          alt="photo"
        />
        <img
          data-aos={"fade-up"}
          src="./../../public/sample data/4.jpeg"
          alt="photo"
        />
        <img
          data-aos={"fade-left"}
          src="./../../public/sample data/1.jpeg"
          alt="photo"
        />
      </div>

      <div className={styles["hotel-description"]} data-aos={"fade-right"}>
        <h1>{name}</h1>
        <div className={styles["hotel-stars"]}>
          {Array.from({ length: stars }, (x, i) => (
            <IoStar key={i} />
          ))}
        </div>
        <p>{desc}</p>
        <div className={styles["hotel-score-container"]}>
          <span
            style={{
              backgroundColor: `${
                ratings >= 4
                  ? "#35c709c8"
                  : ratings >= 3 && ratings < 4
                  ? "#d7d70dcb"
                  : "#ec2c12ca"
              }`,
            }}
          >
            {ratings}
          </span>

          <label>
            {ratings >= 4
              ? "Awsom"
              : ratings >= 3 && ratings < 4
              ? "Good"
              : "Not bad"}
          </label>
          {reveiwsCount > 0 && (
            <a href="#hotel-reviews">
              <span>See all {reveiwsCount} reviews</span>{" "}
              <span>
                <MdOutlineKeyboardArrowRight />
              </span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
