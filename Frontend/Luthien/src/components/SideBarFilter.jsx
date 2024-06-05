import styles from "./../styles/sidebar-filter.module.css";
import CheckBox from "./CheckBox";
import { IoIosSearch } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import {
  setHotelName,
  setThreeStar,
  setFourStar,
  setFiveStar,
  setFirstPrice,
  setSecondPrice,
  setThirdPrice,
  setFourthPrice,
  setFifthPrice,
  setSwimmingPool,
  setTeaMaker,
  setPrayerRoom,
  setAskInsideRoom,
  setFreeWifi,
  setPet,
  setGame,
  setGym,
  setShopping,
  setElevator,
  setParking,
  setBreakfast,
  setRestaurant,
  setAllHoursServices,
  setFireExtinguishing,
  setWallCloset,
  setHelpBox,
  setPartyServices,
  setTaxi,
  setATM,
  setLibrary,
} from "./../state management/filterSlice";

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

export default function SideBarFilter() {
  const dispatch = useDispatch();

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

  const amenitiesSetter = {
    "swimming pool": setSwimmingPool,
    "tea maker": setTeaMaker,
    "prayer room": setPrayerRoom,
    "ask inside room": setAskInsideRoom,
    "free wifi": setFreeWifi,
    pet: setPet,
    game: setGame,
    gym: setGym,
    shopping: setShopping,
    elevator: setElevator,
    parking: setParking,
    breakfast: setBreakfast,
    restaurant: setRestaurant,
    "all hours services": setAllHoursServices,
    "fire extinguishing": setFireExtinguishing,
    "wall closet": setWallCloset,
    "help box": setHelpBox,
    "party services": setPartyServices,
    taxi: setTaxi,
    ATM: setATM,
    library: setLibrary,
  };

  const { filteredResults: results } = useSelector((state) => state.searchRoom);

  return (
    <div className={styles.container}>
      <p>Results: {results.length}</p>
      <section className={styles.accordion}>
        <div className={styles.tab}>
          <input type="checkbox" name="accordion-1" id="cb2" />
          <label htmlFor="cb2" className={styles["tab__label"]}>
            Hotel Stars
          </label>
          <div className={styles["tab__content"]}>
            <CheckBox
              setValue={setThreeStar}
              key={1}
              label={"3 Star hotel or less"}
            />
            <CheckBox setValue={setFourStar} key={2} label={"4 Star hotel"} />
            <CheckBox setValue={setFiveStar} key={3} label={"5 Star hotel"} />
          </div>
        </div>
        <div className={styles.tab}>
          <input type="checkbox" name="accordion-2" id="cb3" />
          <label htmlFor="cb3" className={styles["tab__label"]}>
            Search hotels name
          </label>
          <div className={styles["tab__content"]}>
            <div className={styles["input-container"]}>
              <span>
                <IoIosSearch />
              </span>
              <input
                onChange={(e) => dispatch(setHotelName(e.target.value))}
                type="text"
                placeholder="Hotel name"
              />
            </div>
          </div>
        </div>
        <div className={styles.tab}>
          <input type="checkbox" name="accordion-3" id="cb4" />
          <label htmlFor="cb4" className={styles["tab__label"]}>
            Price range
          </label>
          <div className={styles["tab__content"]}>
            <CheckBox setValue={setFirstPrice} key={1} label={"0 to 50$"} />
            <CheckBox setValue={setSecondPrice} key={2} label={"50$ to 100$"} />
            <CheckBox setValue={setThirdPrice} key={3} label={"100$ to 200$"} />
            <CheckBox
              setValue={setFourthPrice}
              key={4}
              label={"200$ to 500$"}
            />
            <CheckBox setValue={setFifthPrice} key={5} label={"500$ above"} />
          </div>
        </div>
        <div className={styles.tab}>
          <input type="checkbox" name="accordion-3" id="cb5" />
          <label htmlFor="cb5" className={styles["tab__label"]}>
            Hotel amenities
          </label>
          <div className={styles["tab__content"]}>
            {Object.keys(amenitiesSVG).map((key, i) => (
              <CheckBox
                setValue={amenitiesSetter[key]}
                key={i}
                label={key}
                svg={amenitiesSVG[key]}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
