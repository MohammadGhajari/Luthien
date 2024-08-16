import { useEffect, useState } from "react";
import styles from "./../styles/became-hotelier.module.css";
import HotelierPolicies from "../components/HotelierPolicies";
import { FaLocationDot } from "react-icons/fa6";
import SelectLocation from "./../components/SelectLocation";
import HotelierInputFields from "./../components/HotelierInputFields";
import { PiUploadSimpleLight } from "react-icons/pi";
import { MdInsertPhoto } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { MdOutlineSportsGymnastics } from "react-icons/md";
import { MdPets } from "react-icons/md";
import { IoGameController } from "react-icons/io5";
import { FaSwimmingPool } from "react-icons/fa";
import { GiCoffeeCup } from "react-icons/gi";
import { FaShoppingBag } from "react-icons/fa";
import { FaPersonPraying } from "react-icons/fa6";
import { TbBellRinging2, TbItalic } from "react-icons/tb";
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
import { toastError, toastSuccess } from "./../services/notify";
import { toast } from "react-toastify";
import CountrySelectBox from "./../components/CountrySelectBox";
import VicinityLocation from "./../components/VicinityLocation";
import {
  getHotelByName,
  createHotel,
  getCurrentUser,
  updateHotel,
  updateUser,
} from "./../services/handleReqs.js";
import validator from "validator";
import { useDispatch } from "react-redux";
import { setRole } from "./../state management/userSlice.js";

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

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [sent, setSent] = useState(false);
  const [locModal, setLocModal] = useState(false);
  const [location, setLocation] = useState({
    lat: 52.505,
    lng: -0.09,
  });
  const [name, setName] = useState("");
  const [stars, setStars] = useState(1);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("United Kingdom");
  const [phone, setphone] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [amenities, setAmenities] = useState([]);
  const [vicinity, setVicinity] = useState([
    { location: "", distance: 0, time: 0 },
  ]);
  const [cover, setCover] = useState({});
  const [photos, setPhotos] = useState([]);

  function toTitleCase(str) {
    return str
      .split(" ")
      .map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const data = await getHotelByName(toTitleCase(name));
    if (data.length > 0) return toastError("This hoter is already exists.");
    if (description.length < 10)
      return toastError("Description must be at least 10 characters long.");
    if (!validator.isMobilePhone(phone))
      return toastError("Phone number is not valid.");
    if (amenities.length === 0)
      return toastError("Select at least one amenity.");
    if (!cover.name) return toastError("Choose a cover for hotel.");
    if (photos.length === 0)
      return toastError("Please select at least one photo for hotel.");

    const currUser = await getCurrentUser();

    const newHotel = {
      name: toTitleCase(name),
      owner: currUser.data.data._id,
      stars,
      city,
      description,
      address,
      location,
      phone,
      importantVicinityPlaces: vicinity,
      country,
      amenities,
    };

    const res = await createHotel(newHotel);
    if (!res.id) {
      return toastError("Something went wrong.");
    }

    const formData = new FormData();
    formData.append("cover", cover);
    for (let i = 0; i < photos.length; i++) {
      formData.append("photos", photos[i]);
    }

    const updatedHotel = await toast.promise(updateHotel(res.id, formData), {
      pending: "Creating hotel...",
      success: "Your hotel created successfully!⚡",
      error: "Try again.⚠️",
    });

    await updateUser({ role: "hotelier" });
    dispatch(setRole("hotelier"));

    navigate("/");
  }

  function handleChecked(e, amen) {
    if (e.target.checked) {
      setAmenities([...amenities, amen]);
      console.log([...amenities, amen]);
    } else {
      let temp = [];
      temp = amenities.filter((a) => a !== amen);
      setAmenities(temp);
      console.log(temp);
    }
  }
  function handleCoverChange(e) {
    setCover(e.target.files[0]);
  }
  function handlePhotosChange(e) {
    if (e.target.files.length > 5) {
      toastError("Choose a maximum of 5 photos");
    } else {
      if (e.target.files.length + photos.length > 5) {
        toastError("Choose a maximum of 5 photos");
      } else {
        setPhotos([...photos, ...e.target.files]);
      }
    }
  }
  function handleDeletePhotos(e, p) {
    let temp = photos.filter((photo) => photo.name !== p.name);
    setPhotos([...temp]);
  }
  function handleAddLocation(e) {
    let flag = true;
    vicinity.forEach((v) => {
      if (v.name.length === 0 || v.distance === 0 || v.time === 0) {
        flag = false;
      }
    });

    if (flag) {
      setVicinity([...vicinity, { name: "", distance: 0, time: 0 }]);
    } else {
      toastError("Fill vicinity locations fields");
    }
  }
  function handleDeleteLocation(i) {
    if (vicinity.length === 1) {
      return toastError("At least one location is required.");
    }
    console.log(vicinity);
    const temp = vicinity.filter((v, index) => i !== index);

    setVicinity([...temp]);
  }
  async function handleNameBlur(e) {
    const data = await getHotelByName(toTitleCase(e.target.value));
    if (data.length > 0) {
      toastError("This hoter is already exists.");
    }
  }

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
        <form
          className={`${
            locModal ? styles["hotelier-form-hide"] : styles["hotelier-form"]
          } `}
          onSubmit={handleSubmit}
        >
          <h2>Enter your hotel information</h2>
          <div className={styles["hotel-name"]}>
            <label>Hotel name</label>

            <HotelierInputFields
              placeholder="name"
              left={4}
              width={"100%"}
              height={"4rem"}
              setValue={setName}
              onblur={handleNameBlur}
            />
          </div>
          <div className={styles["hotel-stars"]}>
            <label>Hotel stars</label>
            <select name="stars" onChange={(e) => setStars(e.target.value)}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className={styles["city-country"]}>
            <div>
              <label>Country</label>
              <CountrySelectBox setValue={setCountry} />
            </div>
            <div>
              <label>City</label>
              <HotelierInputFields
                placeholder="City"
                left={7}
                width="100%"
                height={"4rem"}
                setValue={setCity}
              />
            </div>
          </div>
          <div className={styles["description"]}>
            <label>Add a brief description about your hotel</label>
            <textarea
              rows={5}
              name="describe"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className={styles["address"]}>
            <label>Address</label>
            <HotelierInputFields
              placeholder="Address"
              width="100%"
              left={5}
              height={"4rem"}
              setValue={setAddress}
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
                type={"phone"}
                placeholder="Phone"
                width="100%"
                left={9}
                height={"4rem"}
                setValue={setphone}
              />
            </div>
          </div>
          <div className={styles["amenities"]}>
            <label>Amenities</label>
            <div className={styles["amenities-container"]}>
              {Object.keys(amenitiesSVG).map((amen, i) => (
                <p key={i} className={styles["amen"]}>
                  <span>
                    <input
                      type="checkbox"
                      onChange={(e) => handleChecked(e, amen)}
                    />
                  </span>
                  <span>
                    <span>{amenitiesSVG[amen]}</span>
                    <span>{amen}</span>
                  </span>
                </p>
              ))}
            </div>
          </div>
          <div className={styles["vicinity-locations"]}>
            <label>Important vicinity locations</label>
            <div className={styles["vicinity-locations-container"]}>
              {vicinity.map((v, i) => (
                <div key={i}>
                  <h5>
                    location {i + 1}{" "}
                    <span onClick={() => handleDeleteLocation(i)}>
                      <RiDeleteBin6Line />
                    </span>
                  </h5>
                  <VicinityLocation
                    vicinity={vicinity}
                    setVicinity={setVicinity}
                    i={i}
                    v={v}
                  />
                </div>
              ))}
              <button onClick={handleAddLocation} type="button">
                Add new location
              </button>
            </div>
          </div>
          <div className={styles["photo-picker"]}>
            <div className={styles["hotel-cover"]}>
              <label>Add a cover photo for your hotel</label>
              <div className={styles["cover-picker"]}>
                <label htmlFor="cover-picker">
                  <PiUploadSimpleLight />
                </label>
                <input
                  type="file"
                  id="cover-picker"
                  style={{ display: "none" }}
                  name="cover"
                  accept={"image/jpeg, image/png, image/jpg"}
                  onChange={handleCoverChange}
                />
                {cover?.name && (
                  <div className={styles["cover-photo"]}>
                    <span>
                      <MdInsertPhoto />
                    </span>
                    <span onClick={() => setCover({})}>
                      <RiDeleteBin6Line />
                    </span>
                  </div>
                )}
              </div>
            </div>
            <div className={styles["hotel-cover"]}>
              <label>Add some photos for your hotel</label>
              <div className={styles["cover-picker"]}>
                <label htmlFor="photos-picker">
                  <PiUploadSimpleLight />
                </label>
                <input
                  type="file"
                  name="photos"
                  accept={"image/jpeg, image/png, image/jpg"}
                  id="photos-picker"
                  multiple
                  style={{ display: "none" }}
                  onChange={handlePhotosChange}
                />

                <div className={styles["photos-container"]}>
                  {photos.map((p, i) => (
                    <div key={i} className={styles["cover-photo"]}>
                      <span>
                        <MdInsertPhoto />
                      </span>
                      <span onClick={(e) => handleDeletePhotos(e, p)}>
                        <RiDeleteBin6Line />
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <button type="submit">Submit</button>
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
