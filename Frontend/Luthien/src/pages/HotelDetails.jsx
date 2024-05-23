import styles from "./../styles/hotel-details.module.css";
import { useParams } from "react-router-dom";
import HotelOverview from "./../components/HotelOverview";
import HotelAmenities from "./../components/HotelAmenities";
import HotelLocation from "./../components/HotelLocation";
import HotelRooms from "../components/HotelRooms";
import HotelAccessibility from "../components/HotelAccessibility";
import HotelPolicy from "../components/HotelPolicy";
import HotelReveiews from "../components/HotelReviews";
import { getHotelById } from "../services/handleReqs";
import { useState, useEffect, useRef } from "react";

export default function HotelDetails() {
    const { hotelID } = useParams();
    console.log(hotelID);
    const [isLoading, setIsloading] = useState(true);

    const [hotel, setHotel] = useState({});

    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        async function fetchData() {
            try {
                setIsloading(true);
                const res = await getHotelById(hotelID);
                console.log(res[0]);
                setHotel(res[0]);
                setIsloading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, []);

    return (
        <div className={styles["container"]}>
            {!isLoading && (
                <>
                    <div className={styles["navbar"]}>
                        <div className={styles["content"]}>
                            <a
                                className={
                                    scrollPosition < 832 && styles["selected"]
                                }
                                href="#hotel-overview"
                            >
                                Overview
                            </a>
                            <a
                                className={
                                    scrollPosition >= 832 &&
                                    scrollPosition < 1010 &&
                                    styles["selected"]
                                }
                                href="#hotel-amenities"
                            >
                                Amenities
                            </a>
                            <a
                                className={
                                    scrollPosition >= 1010 &&
                                    scrollPosition < 1420 &&
                                    styles["selected"]
                                }
                                href="#hotel-location"
                            >
                                Location
                            </a>
                            <a
                                className={
                                    scrollPosition >= 1420 &&
                                    scrollPosition < 2255 &&
                                    styles["selected"]
                                }
                                href="#hotel-rooms"
                            >
                                Rooms
                            </a>
                            <a
                                className={
                                    scrollPosition >= 2255 &&
                                    scrollPosition < 2825 &&
                                    styles["selected"]
                                }
                                href="#hotel-accessibility"
                            >
                                Accessibility
                            </a>
                            <a
                                className={
                                    scrollPosition >= 2825 &&
                                    scrollPosition < 3575 &&
                                    styles["selected"]
                                }
                                href="#hotel-policy"
                            >
                                Policies
                            </a>
                            <a
                                className={
                                    scrollPosition >= 3575 && styles["selected"]
                                }
                                href="#hotel-reviews"
                            >
                                Reviews
                            </a>
                        </div>
                    </div>

                    <HotelOverview
                        name={hotel?.name}
                        stars={hotel.stars}
                        desc={hotel.description}
                        ratings={hotel.ratingsAverage}
                    />
                    <HotelAmenities amenities={hotel.amenities} />
                    <HotelLocation
                        location={hotel.location}
                        impVicPlace={hotel.importantVicinityPlaces}
                    />
                    <HotelRooms
                        rooms={hotel.rooms}
                        amenities={hotel.amenities}
                    />
                    <HotelAccessibility />
                    <HotelPolicy />
                    <HotelReveiews />
                </>
            )}
        </div>
    );
}
