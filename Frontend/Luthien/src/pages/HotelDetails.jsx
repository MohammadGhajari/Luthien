import styles from "./../styles/hotel-details.module.css";
import { useParams } from "react-router-dom";
import HotelOverview from "./../components/HotelOverview";
import HotelAmenities from "./../components/HotelAmenities";
import HotelLocation from "./../components/HotelLocation";
import HotelRooms from "../components/HotelRooms";
import HotelAccessibility from "../components/HotelAccessibility";
import HotelPolicy from "../components/HotelPolicy";
import HotelReveiews from "../components/HotelReviews";

export default function HotelDetails() {
    const { hotelID } = useParams();
    console.log(hotelID);

    return (
        <div className={styles["container"]}>
            <HotelOverview />
            <HotelAmenities />
            <HotelLocation />
            <HotelRooms />
            <HotelAccessibility />
            <HotelPolicy />
            <HotelReveiews />
        </div>
    );
}
