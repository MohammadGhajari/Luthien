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

export default function HotelCart({ res }) {
    const facilicitesSVG = {
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
    };

    return (
        <div className={styles.container}>
            <div className={styles["slideshow"]}>
                <div>
                    <button className={styles["prev"]}>
                        <GrFormPrevious />
                    </button>
                </div>

                <img src={res.photos[0]} alt={res.name} />
                <div>
                    <button className={styles["next"]}>
                        <GrFormNext />
                    </button>
                </div>
            </div>
            <div className={styles["middle-cart"]}>
                <h3>{res.name}</h3>
                <div className={styles["stars-container"]}>
                    <p>
                        <span>
                            <MdOutlineStarPurple500 />
                        </span>
                        <span> {res.stars} Stars</span>
                    </p>
                    <div>
                        {Array.from({ length: res.stars }, (x) => (
                            <FaStar />
                        ))}
                    </div>
                </div>
                <div className={styles["facilities"]}>
                    {res.facilities.map((f) => (
                        <p>
                            <span>{facilicitesSVG[f]}</span>
                            <span>{f}</span>
                        </p>
                    ))}
                </div>
            </div>
            <div className={styles["price"]}>
                {/* <div>Discount</div> */}
                <p>
                    <span>
                        <FaDollarSign />
                    </span>
                    <span>1500</span>
                </p>
                <p>2 night, 1 adults</p>
                <NavLink to={res._id} className={styles["view-btn"]}>
                    View the rooms
                </NavLink>
            </div>
        </div>
    );
}
