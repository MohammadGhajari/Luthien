import { useState, useEffect } from "react";
import styles from "./../styles/hotel-showcase.module.css";
import HotelTypeCart from "./HotelTypeCart";
import axios from "axios";
import { getForeignHotels, getDomesticHotels } from "./../services/handleReqs";

export default function HotelShowcase() {
    const [domestics, setDomestics] = useState([]);
    const [foreigns, setForeigns] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                setIsLoading(true);

                setForeigns(await getForeignHotels());
                setDomestics(await getDomesticHotels());

                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setIsLoading(false);
            }
        }
        fetchData();
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles["foreign"]}>
                <h1>Foreign Hotels</h1>
                <div className={styles["hotel-carts-container"]}>
                    {!isLoading &&
                        foreigns?.map((f) => (
                            <HotelTypeCart
                                key={f._id}
                                cityName={f.city}
                                img={f.citySVG}
                            />
                        ))}
                </div>
            </div>
            <div className={styles["domestic"]}>
                <h1>Domestic Hotels</h1>
                <div className={styles["hotel-carts-container"]}>
                    {!isLoading &&
                        domestics?.map((d) => (
                            <HotelTypeCart
                                key={d._id}
                                cityName={d.city}
                                img={d.citySVG}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
}
