import { useEffect, useState } from "react";
import styles from "./../styles/became-hotelier.module.css";
import AOS from "aos";
import HotelierPolicies from "../components/HotelierPolicies";
import { FaLocationDot } from "react-icons/fa6";
import SelectLocation from "./../components/SelectLocation";
import HotelierInputFields from "./../components/HotelierInputFields";

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

export default function BecameHotelier() {
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

  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  const [sent, setSent] = useState(false);
  const [locModal, setLocModal] = useState(false);
  const [location, setLocation] = useState({
    lat: 52.505,
    lng: -0.09,
  });

  return (
    <div
      className={`${styles["container"]} ${sent && styles["sent-container"]}`}
    >
      <HotelierPolicies setSent={setSent} sent={sent} />
      <div
        className={`${!sent && styles["form-container"]} ${
          sent && styles["sent"]
        }`}
      >
        <form className={styles["hotelier-form"]}>
          <h2>Enter your hotel information</h2>
          <div className={styles["hotel-name"]}>
            <label>Hotel name</label>

            <HotelierInputFields
              placeholder="name"
              left={4}
              width={"100%"}
              height={"4rem"}
            />
          </div>
          <div>
            <label>Hotel stars</label>
            <select name="stars">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className={styles["city-country"]}>
            <div>
              <label>City</label>
              <HotelierInputFields
                placeholder="City"
                left={7}
                width="100%"
                height={"4rem"}
              />
            </div>
            <div>
              <label>Country</label>
              <HotelierInputFields
                placeholder="Country"
                left={10}
                width="100%"
                height={"4rem"}
              />
            </div>
          </div>
          <div className={styles["description"]}>
            <label>Add a brief description about your hotel</label>
            <textarea rows={5} name="describe"></textarea>
          </div>
          <div className={styles["address"]}>
            <label>Address</label>
            <HotelierInputFields
              placeholder="Address"
              width="100%"
              left={5}
              height={"4rem"}
            />
          </div>
          <div className={styles["loc-phone"]}>
            <div>
              <label>Cordinates</label>
              <div className={styles["loc-container"]}>
                <HotelierInputFields
                  placeholder="Cordinates"
                  left={14}
                  width="80%"
                  height={"4rem"}
                  value={`${location.lat.toFixed(4)}, ${location.lng.toFixed(
                    4
                  )}`}
                />
                <button onClick={() => setLocModal(true)} type="button">
                  <FaLocationDot />
                </button>
              </div>
            </div>
            <div>
              <label>Phone</label>
              <HotelierInputFields
                placeholder="Phone"
                width="100%"
                left={9}
                height={"4rem"}
              />
            </div>
          </div>
          <div className={styles["amenities"]}>
            <label>Amenities</label>
            <div className={styles["amenities-container"]}>
              {Object.keys(amenitiesSVG).map((amen) => (
                <p className="amen">
                  <span>
                    <input type="checkbox" />
                  </span>
                  <span>
                    <span>{amenitiesSVG[amen]}</span>
                    <span>{amen}</span>
                  </span>
                </p>
              ))}
            </div>
          </div>
        </form>
      </div>
      {locModal && (
        <SelectLocation
          setLocation={setLocation}
          location={location}
          setLocModal={setLocModal}
        />
      )}
    </div>
  );
}
