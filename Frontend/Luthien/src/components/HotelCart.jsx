import styles from "./../styles/hotel-cart.module.css";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
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
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function HotelCart({ res }) {
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
  const photoes = res.photos;
  const [currentPhoto, setCurrentPhoto] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

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
        {photoes.map((p) => (
          <SwiperSlide key={p} className={styles["myslide"]}>
            <img src={p} alt={p} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles["middle-cart"]}>
        <div className={styles["title-container"]}>
          <NavLink className={styles["title"]} to={`/hotels/${res._id}`}>
            {res.name}
          </NavLink>
        </div>
        <div className={styles["stars-container"]}>
          <p className={styles["stars-text"]}>
            <span>
              <MdOutlineStarPurple500 />
            </span>
            <span> {res.stars} Stars</span>
          </p>
          <p className={styles["stars-price"]}>
            <span>
              <FaDollarSign />
            </span>
            <span>{res.avgPrice || 1500}</span>
          </p>
          <div>
            {Array.from({ length: res.stars }, (x, i) => (
              <FaStar key={i} />
            ))}
          </div>
        </div>
        <div className={styles["amenities"]}>
          {res.amenities.map((f, i) =>
            i < 4 ? (
              <p key={i}>
                <span>{amenitiesSVG[f]}</span>
                <span>{f}</span>
              </p>
            ) : i === 4 ? (
              <p key={i}>...</p>
            ) : null
          )}
        </div>
      </div>
      <div className={styles["price"]}>
        {/* <div>Discount</div> */}
        <p>
          <span>
            <FaDollarSign />
          </span>
          <span>{res.avgPrice || 1500}</span>
        </p>
        <p>2 night, 1 adults</p>
        <NavLink to={`/hotels/${res._id}`} className={styles["view-btn"]}>
          View the rooms
        </NavLink>
      </div>
    </div>
  );
}
