import styles from "./../styles/hotel-details.module.css";
import { useParams } from "react-router-dom";
import HotelOverview from "./../components/HotelOverview";

export default function HotelDetails() {
    const { hotelID } = useParams();
    console.log(hotelID);

    return (
        <div className={styles["container"]}>
            <HotelOverview />
        </div>
    );
}
