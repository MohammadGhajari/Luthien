import styles from "./../styles/room-cart.module.css";
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
import { Swiper, SwiperSlide } from "swiper/react";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { useEffect, useState } from "react";
import CustomTooltip from "./../components/CustomTooltip";
import { useDispatch, useSelector } from "react-redux";
import { updateUser, updateRoom, getCurrentUser } from "../services/handleReqs";
import { toastError } from "../services/notify";
import { setBalance } from "../state management/userSlice";
import { toast } from "react-toastify";
import { getTime } from "../helper/time";

export default function RoomCart({
  price,
  discount,
  photos,
  number,
  amenities,
  hotelID,
  roomId,
  hotelName,
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
  const [reserved, setReserved] = useState(false);

  async function handleReserve() {
    if (price - discount > balance)
      return toastError("You have not enough money to reserve this room.");

    const roomRes = await toast.promise(updateRoom(roomId, { isFull: true }), {
      pending: "Reserving room...",
      success: "Room reserved successfully!⚡",
      error: "Try again",
    });

    const currentUser = await getCurrentUser();

    const userRes = await toast.promise(
      updateUser({
        reservedRooms: [
          ...currentUser.data.data.reservedRooms,
          { hotel: hotelID, room: roomId },
        ],
        balance: balance - (+price - +discount),
        activity: [
          ...currentUser.data.data.activity,
          {
            type: "reserve",
            data: {
              hotelName,
              roomNumber: number,
              subBalance: -(+price - +discount),
            },
            date: getTime(),
          },
        ],
      }),
      {}
    );

    dispatch(setBalance(balance - (+price - +discount)));
    setReserved(true);
  }

  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);

  return (
    <>
      {!reserved && (
        <div data-aos={"fade-left"} className={styles["container"]}>
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
          <div className={styles["amenities"]}>
            {amenities.map((am, i) =>
              i <= 3 ? (
                <p key={i}>
                  <span>{amenitiesSVG[am]}</span>
                  <span>{am}</span>
                </p>
              ) : (
                i === 4 && "..."
              )
            )}
          </div>
          <p className={styles["room-number"]}>
            Room number: <strong>{number}</strong>
          </p>
          <p>
            {discount ? (
              <>
                <span>
                  ${price} ${price - discount}
                </span>{" "}
                <span>per night</span>
                <span
                  className={
                    styles["discount-line"] + " " + styles["discount-line-1"]
                  }
                ></span>
                <span
                  className={
                    styles["discount-line"] + " " + styles["discount-line-2"]
                  }
                ></span>
              </>
            ) : (
              <>
                <span>$ {price}</span> <span>per night</span>
              </>
            )}
          </p>
          <div className={styles["btn-container"]}>
            <CustomTooltip cTitle={"Reserve room"}>
              <button className={styles["reserve-btn"]} onClick={handleReserve}>
                Reserve
              </button>
            </CustomTooltip>
          </div>
        </div>
      )}
    </>
  );
}
