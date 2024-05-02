import styles from "./../styles/sidebar-filter.module.css";
import CheckBox from "./CheckBox";
import { IoIosSearch } from "react-icons/io";
import { useSelector } from "react-redux";

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

    const { results } = useSelector((state) => state.searchRoom);

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
                        <CheckBox label={"3 Star hotel or less"} />
                        <CheckBox label={"4 Star hotel"} />
                        <CheckBox label={"5 Star hotel"} />
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
                            <input type="text" placeholder="Hotel name" />
                        </div>
                    </div>
                </div>
                <div class={styles.tab}>
                    <input type="checkbox" name="accordion-3" id="cb4" />
                    <label for="cb4" class={styles["tab__label"]}>
                        Price range
                    </label>
                    <div class={styles["tab__content"]}>
                        <CheckBox label={"0 to 50$"} />
                        <CheckBox label={"50$ to 100$"} />
                        <CheckBox label={"100$ to 200$"} />
                        <CheckBox label={"200$ to 500$"} />
                        <CheckBox label={"500$ above"} />
                    </div>
                </div>
                <div class={styles.tab}>
                    <input type="checkbox" name="accordion-3" id="cb5" />
                    <label for="cb5" class={styles["tab__label"]}>
                        Hotel facilities
                    </label>
                    <div class={styles["tab__content"]}>
                        {Object.keys(facilicitesSVG).map((key) => (
                            <CheckBox label={key} svg={facilicitesSVG[key]} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
