import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import HotelierInputFields from "./../components/HotelierInputFields";
import styles from "./../styles/hotel-add-room.module.css";
import { PiUploadSimpleLight } from "react-icons/pi";
import { MdInsertPhoto } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { toast } from "react-toastify";
import { toastError } from "../services/notify";
import {
  createRoom,
  getHotelById,
  updateHotel,
  updateRoom,
} from "../services/handleReqs";

export default function HotelAddRoom() {
  const { hotelID } = useParams();
  const [photos, setPhotos] = useState([]);
  const [roomNumber, setRoomNumber] = useState(-1);
  const [roomCapacity, setRoomCapacity] = useState(-1);
  const [maxGuests, setMaxGuests] = useState(-1);
  const [price, setPrice] = useState(-1);
  const [discount, setDiscount] = useState(-1);
  const navigate = useNavigate();

  async function haldleSubmit(e) {
    e.preventDefault();

    if (roomNumber <= 0)
      return toastError("Room number must be greater than 0.");
    if (+roomCapacity <= 0 || +roomCapacity >= 5)
      return toastError("Room capacity must be between 1 and 5.");
    if (+price <= 0) return toastError("Room price must be greater than 0.");
    if (+discount && +discount < -1)
      return toastError("Discount must be greater than 0.");
    if (+discount && +discount > +price)
      return toastError("Discount must be less that price.");
    if (+maxGuests < 0)
      return toastError("Maximum guests must be greater than or equal to 0.");

    if (photos.length < 2) return toastError("Add at least two photos.");

    const roomData = {
      roomNumber,
      capacity: roomCapacity,
      hotel: hotelID,
      price,
      priceDiscount: discount === -1 ? null : discount,
      maxGuest: maxGuests,
      isFull: false,
    };
    const newRoom = await createRoom(roomData);

    const formData = new FormData();
    for (let i = 0; i < photos.length; i++) {
      formData.append("photos", photos[i]);
    }

    const updatedRoom = await toast.promise(updateRoom(newRoom._id, formData), {
      pending: "Creating room...",
      success: "Your room created successfully!⚡",
      error: "Try again.⚠️",
    });

    const hotel = await getHotelById(hotelID);

    const formData1 = new FormData();

    const hotelRooms = [];

    for (let i = 0; i < hotel[0].rooms.length; i++) {
      hotelRooms.push(hotel[0].rooms[i]._id);
    }
    hotelRooms.push(updatedRoom.data.room._id);

    for (let i = 0; i < hotelRooms.length; i++) {
      formData1.append("rooms", hotelRooms[i]);
    }

    const updatedHotel = await toast.promise(updateHotel(hotelID, formData1), {
      pending: "Updating hotel...",
      success: "Your hotel updated successfully!⚡",
      error: "Try again.⚠️",
    });

    navigate("/dashboard/my-hotel");
  }

  function handleDeletePhotos(e, p) {
    let temp = photos.filter((photo) => photo.name !== p.name);
    setPhotos([...temp]);
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
  return (
    <div className={styles["container"]}>
      <p>Fill out this form to add a room to your hotel.</p>

      <form onSubmit={haldleSubmit}>
        <div>
          <label>Room number</label>
          <HotelierInputFields
            setValue={setRoomNumber}
            type="number"
            placeholder="Room number"
            height={"4rem"}
            width={"100%"}
          />
        </div>
        <div>
          <label>Room capacity</label>
          <HotelierInputFields
            setValue={setRoomCapacity}
            type="number"
            placeholder="Room capacity"
            height={"4rem"}
            width={"100%"}
          />
        </div>
        <div>
          <label>Room price</label>
          <HotelierInputFields
            setValue={setPrice}
            type="number"
            placeholder="Price"
            height={"4rem"}
            width={"100%"}
          />
        </div>
        <div>
          <label>Discount (in $)</label>
          <HotelierInputFields
            setValue={setDiscount}
            type="number"
            placeholder="Discount (optional)"
            height={"4rem"}
            width={"100%"}
            required={false}
          />
        </div>
        <div>
          <label>Max guests</label>
          <HotelierInputFields
            setValue={setMaxGuests}
            type="number"
            placeholder="Max guests"
            height={"4rem"}
            width={"100%"}
          />
        </div>

        <div className={styles["picker-container"]}>
          <label>Add some photos for this room</label>
          <div className={styles["photo-picker"]}>
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
        <button>Create room</button>
      </form>
    </div>
  );
}
