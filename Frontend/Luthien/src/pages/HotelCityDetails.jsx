import styles from "./../styles/hotel-city-details.module.css";
import { getHotelsInCity } from "./../services/handleReqs";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { TfiControlShuffle } from "react-icons/tfi";

export default function HotelCityDetails() {
    const { cityID } = useParams();

    const [hotels, setHotels] = useState([]);
    const [isLoading, setIsloading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                setIsloading(true);
                const res = await getHotelsInCity(cityID);
                setHotels(res);
                setIsloading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, []);

    return (
        <div className={styles["container"]}>
            {!isLoading && <h1>{hotels[0].name}</h1>}
        </div>
    );
}
