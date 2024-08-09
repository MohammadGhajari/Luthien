import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import styles from "./../styles/booked-rooms-cart.module.css";
import { NavLink } from "react-router-dom";
import { FaDollarSign } from "react-icons/fa";

import { MdOutlineSportsGymnastics } from "react-icons/md";
import { MdPets } from "react-icons/md";
import { IoGameController } from "react-icons/io5";
import { FaSwimmingPool } from "react-icons/fa";
import { GiCoffeeCup } from "react-icons/gi";
import { FaShoppingBag } from "react-icons/fa";
import { FaPersonPraying } from "react-icons/fa6";
import { TbBellRinging2 } from "react-icons/tb";
import { FaWifi } from "react-icons/fa";
import { FaParking } from "react-icons/fa";
import { GrElevator } from "react-icons/gr";
import { MdFreeBreakfast } from "react-icons/md";
import { MdOutlineRestaurant } from "react-icons/md";
import { Ri24HoursFill } from "react-icons/ri";
import { FaFireExtinguisher } from "react-icons/fa6";
import { BiCloset } from "react-icons/bi";
import { FaBriefcaseMedical } from "react-icons/fa";
import { LuPartyPopper } from "react-icons/lu";
import { FaTaxi } from "react-icons/fa";
import { GrAtm } from "react-icons/gr";
import { ImLibrary } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { updateUser, updateRoom, getCurrentUser } from "../services/handleReqs";
import { setBalance } from "./../state management/userSlice";
import { toast } from "react-toastify";
import { getTime } from "./../helper/time";

export default function BookedRoomsCart({
  photos,
  hotelName,
  roomNumber,
  amenities,
  hotelID,
  paid,
  roomID,
  allRooms,
  setReservedRooms,
}) {
  const amenitiesSVG = {
    "swimming pool": <FaSwimmingPool />,
    "tea maker": <GiCoffeeCup />,
    "prayer room": <FaPersonPraying />,
    "ask inside room": <TbBellRinging2 />,
    "free wifi": <FaWifi />,
    gym: <MdOutlineSportsGymnastics />,
    pet: <MdPets />,
    game: <IoGameController />,
    shopping: <FaShoppingBag />,
    parking: <FaParking />,
    elevator: <GrElevator />,
    breakfast: <MdFreeBreakfast />,
    restaurant: <MdOutlineRestaurant />,
    "24 hours services": <Ri24HoursFill />,
    "fire extinguishing": <FaFireExtinguisher />,
    "wall closet": <BiCloset />,
    "help box": <FaBriefcaseMedical />,
    "party services": <LuPartyPopper />,
    taxi: <FaTaxi />,
    ATM: <GrAtm />,
    library: <ImLibrary />,
  };

  const dispatch = useDispatch();
  const { balance } = useSelector((state) => state.user);

  async function handleCancel() {
    if (
      window.confirm(
        `Are you sure you want to cancel this room?\n you will lost 50% of amount that you paid ($${
          paid / 2
        }).`
      )
    ) {
      const filterdRooms = allRooms.filter((r) => r.room._id !== roomID);

      const currentUser = await getCurrentUser();

      console.log("canceled");
      const updatedUser = await toast.promise(
        updateUser({
          balance: balance + paid / 2,
          reservedRooms: filterdRooms.length === 0 ? ["empty"] : filterdRooms,
          activity: [
            ...currentUser.data.data.activity,
            {
              type: "cancel",
              date: getTime(),
              data: {
                hotelName,
                roomNumber,
                addedBalance: paid / 2,
              },
            },
          ],
        }),
        {
          pending: "Canceling room...",
          success: "Room canceled successfully!⚡",
          error: "Try again.⚠️",
        }
      );

      const updatedRoom = await toast.promise(
        updateRoom(roomID, { isFull: false }),
        {
          error: "Try again.⚠️",
        }
      );

      setReservedRooms([...filterdRooms]);
      dispatch(setBalance(balance + paid / 2));
    }
  }

  return (
    <div data-aos={"fade-right"} className={styles.container}>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={styles["slideshow"]}
      >
        {photos.map((p) => (
          <SwiperSlide key={p} className={styles["myslide"]}>
            <img src={p} alt={p} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles["middle-cart"]}>
        <div className={styles["title-container"]}>
          <NavLink className={styles["title"]} to={`/hotels/${hotelID}`}>
            {hotelName}
          </NavLink>
        </div>
        <div className={styles["room-number"]}>
          <h4>Room number: {roomNumber}</h4>
        </div>
        <div className={styles["amenities"]}>
          {amenities.map((f, i) => (
            <p key={i}>
              <span>{amenitiesSVG[f]}</span>
              <span>{f}</span>
            </p>
          ))}
        </div>
      </div>
      <div className={styles["price"]}>
        <p className={styles["paid"]}>
          You paid <strong> ${paid}</strong> for this room
        </p>
        <button onClick={handleCancel}>
          <span>Cancel</span> <span>booking</span>
        </button>
      </div>
    </div>
  );
}
