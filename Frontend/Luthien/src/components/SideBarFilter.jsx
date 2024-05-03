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

export default function SideBarFilter() {
    const dispatch = useDispatch();

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

    const facilitiesSetter = {
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
    };

    const { filteredResults: results } = useSelector(
        (state) => state.searchRoom
    );

    return (
        <div className={styles.container}>
            <p>Results: {results.length}</p>
            <section className={styles.accordion}>
                <div class={styles.tab}>
                    <input type="checkbox" name="accordion-1" id="cb2" />
                    <label for="cb2" class={styles["tab__label"]}>
                        Hotel Stars
                    </label>
                    <div class={styles["tab__content"]}>
                        <CheckBox
                            setValue={setThreeStar}
                            key={1}
                            label={"3 Star hotel or less"}
                        />
                        <CheckBox
                            setValue={setFourStar}
                            key={2}
                            label={"4 Star hotel"}
                        />
                        <CheckBox
                            setValue={setFiveStar}
                            key={3}
                            label={"5 Star hotel"}
                        />
                    </div>
                </div>
                <div class={styles.tab}>
                    <input type="checkbox" name="accordion-2" id="cb3" />
                    <label for="cb3" class={styles["tab__label"]}>
                        Search hotels name
                    </label>
                    <div class={styles["tab__content"]}>
                        <div className={styles["input-container"]}>
                            <span>
                                <IoIosSearch />
                            </span>
                            <input
                                onChange={(e) =>
                                    dispatch(setHotelName(e.target.value))
                                }
                                type="text"
                                placeholder="Hotel name"
                            />
                        </div>
                    </div>
                </div>
                <div class={styles.tab}>
                    <input type="checkbox" name="accordion-3" id="cb4" />
                    <label for="cb4" class={styles["tab__label"]}>
                        Price range
                    </label>
                    <div class={styles["tab__content"]}>
                        <CheckBox
                            setValue={setFirstPrice}
                            key={1}
                            label={"0 to 50$"}
                        />
                        <CheckBox
                            setValue={setSecondPrice}
                            key={2}
                            label={"50$ to 100$"}
                        />
                        <CheckBox
                            setValue={setThirdPrice}
                            key={3}
                            label={"100$ to 200$"}
                        />
                        <CheckBox
                            setValue={setFourthPrice}
                            key={4}
                            label={"200$ to 500$"}
                        />
                        <CheckBox
                            setValue={setFifthPrice}
                            key={5}
                            label={"500$ above"}
                        />
                    </div>
                </div>
                <div class={styles.tab}>
                    <input type="checkbox" name="accordion-3" id="cb5" />
                    <label for="cb5" class={styles["tab__label"]}>
                        Hotel facilities
                    </label>
                    <div class={styles["tab__content"]}>
                        {Object.keys(facilicitesSVG).map((key, i) => (
                            <CheckBox
                                setValue={facilitiesSetter[key]}
                                key={i}
                                label={key}
                                svg={facilicitesSVG[key]}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
