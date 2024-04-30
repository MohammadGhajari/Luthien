import { useState, useEffect } from "react";
import styles from "./../styles/trending-destinations.module.css";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function TrendingDestinations() {
    const [isLoading, setIsLoading] = useState(false);
    const [trends, setTrends] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                setIsLoading(true);
                const res = await axios.get(
                    "http://127.0.0.10:8000/api/hotels/trending"
                );

                setTrends(res.data.data);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setIsLoading(false);
            }
        }
        fetchData();
    }, []);

    return (
        <div className={styles["outer-container"]}>
            <div className={styles["trending-countainer"]}>
                <h2>Trending destinations</h2>
                <p>Most popular choices for travelers</p>
                {!isLoading && (
                    <div className={styles["grid-layout"]}>
                        <NavLink
                            to={`/hotels/${trends[0]?._id}`}
                            className={styles["trend"]}
                        >
                            <span>
                                {trends[0]?.city}
                                <img src={trends[0]?.countryFlag} alt="flag" />
                            </span>
                            <img src={trends[0]?.cover} alt="trending photo" />
                        </NavLink>
                        <NavLink
                            to={`/hotels/${trends[1]?._id}`}
                            className={styles["trend"]}
                        >
                            <span>
                                {trends[1]?.city}{" "}
                                <img src={trends[1]?.countryFlag} alt="flag" />
                            </span>
                            <img src={trends[1]?.cover} alt="trending photo" />
                        </NavLink>
                        <NavLink
                            to={`/hotels/${trends[2]?._id}`}
                            className={styles["trend"]}
                        >
                            <span>
                                {trends[2]?.city}
                                <img src={trends[2]?.countryFlag} alt="flag" />
                            </span>
                            <img src={trends[2]?.cover} alt="trending photo" />
                        </NavLink>
                        <NavLink
                            to={`/hotels/${trends[3]?._id}`}
                            className={styles["trend"]}
                        >
                            <span>
                                {trends[3]?.city}
                                <img src={trends[3]?.countryFlag} alt="flag" />
                            </span>
                            <img src={trends[3]?.cover} alt="trending photo" />
                        </NavLink>
                        <NavLink
                            to={`/hotels/${trends[4]?._id}`}
                            className={styles["trend"]}
                        >
                            <span>
                                {trends[4]?.city}{" "}
                                <img src={trends[4]?.countryFlag} alt="flag" />
                            </span>
                            <img src={trends[4]?.cover} alt="trending photo" />
                        </NavLink>
                    </div>
                )}
            </div>
        </div>
    );
}
