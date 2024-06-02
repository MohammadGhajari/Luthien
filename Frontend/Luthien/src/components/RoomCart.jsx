import styles from "./../styles/room-cart.module.css";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

import { MdOutlineSportsGymnastics } from "react-icons/md";
import { MdPets } from "react-icons/md";
import { IoDiscOutline, IoGameController } from "react-icons/io5";
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
import { useState } from "react";
import { Tooltip } from "react-tippy";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

export default function RoomCart({
  price,
  discount,
  photos,
  number,
  amenities,
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

  const [currentPhoto, setCurrentPhoto] = useState(0);

  return (
    <div className={styles["container"]}>
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
      <Tooltip
        className={styles["tippy"]}
        title="Reserve room"
        position="top"
        trigger="mouseenter"
        delay={500}
        hideDelay={100}
        animation={"shift"}
        arrow={true}
        arrowSize={"small"}
        distance={5}
        size="big"
      >
        <button className={styles["reserve-btn"]}>Reserve</button>
      </Tooltip>
    </div>
  );
}
