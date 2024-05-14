import styles from "./../styles/hotel-amenities.module.css";

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

export default function HotelAmenities() {
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

    return (
        <div id="hotel-amenities" className={styles.container}>
            <h1>Popular amenities</h1>
            <div className={styles.content}>
                <p>
                    <span>{amenitiesSVG["swimming pool"]}</span>
                    <span>{"swimming pool"}</span>
                </p>
                <p>
                    <span>{amenitiesSVG["gym"]}</span>
                    <span>{"gym"}</span>
                </p>
                <p>
                    <span>{amenitiesSVG["game"]}</span>
                    <span>{"game"}</span>
                </p>
                <p>
                    <span>{amenitiesSVG["tea maker"]}</span>
                    <span>{"fire extinguishing"}</span>
                </p>
                <p>
                    <span>{amenitiesSVG["shopping"]}</span>
                    <span>{"shopping"}</span>
                </p>
                <p>
                    <span>{amenitiesSVG["library"]}</span>
                    <span>{"library"}</span>
                </p>
                <p>
                    <span>{amenitiesSVG["library"]}</span>
                    <span>{"library"}</span>
                </p>
            </div>
        </div>
    );
}
