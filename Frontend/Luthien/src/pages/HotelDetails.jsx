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
import Loading from "../components/Loading";

export default function HotelDetails() {
  const { hotelID } = useParams();
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

        //commnet out this section
        // const res = await getHotelById(hotelID);
        // setHotel(res[0]);

        //********************************add a fake hotel for development//********************************
        const fakeHotel = {};
        fakeHotel.name = "Almase Shargh";
        fakeHotel.description =
          "Almase Shargh is a very good hotel for turists.";
        fakeHotel.rooms = [];
        fakeHotel.stars = 4;
        fakeHotel.avgPrice = 120;
        fakeHotel.city = "Tehran";
        fakeHotel.address = "Tehran, janbaz";
        fakeHotel.location = { lat: 12, lng: 12 };
        fakeHotel.phone = "064654";
        fakeHotel.cover = "";
        fakeHotel.photos = [];
        fakeHotel.ratingsAverage = 3;
        fakeHotel.ratingsQuantity = 129;
        fakeHotel.importantVicinityPlaces = [
          { name: "haram", distance: 100, time: 10 },
        ];
        fakeHotel.country = "Iran";
        fakeHotel.amenities = ["swimming pool", "tea maker", "gym", "pet"];

        setHotel(fakeHotel);
        //********************************add a fake hotel for development//********************************

        setIsloading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);
  return (
    <div className={styles["container"]}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className={styles["navbar"]}>
            <div className={styles["content"]}>
              <a
                className={scrollPosition < 832 ? styles["selected"] : ""}
                href="#hotel-overview"
              >
                Overview
              </a>
              <a
                className={
                  scrollPosition >= 832 && scrollPosition < 1010
                    ? styles["selected"]
                    : ""
                }
                href="#hotel-amenities"
              >
                Amenities
              </a>
              <a
                className={
                  scrollPosition >= 1010 && scrollPosition < 1420
                    ? styles["selected"]
                    : ""
                }
                href="#hotel-location"
              >
                Location
              </a>
              <a
                className={
                  scrollPosition >= 1420 && scrollPosition < 2255
                    ? styles["selected"]
                    : ""
                }
                href="#hotel-rooms"
              >
                Rooms
              </a>
              <a
                className={
                  scrollPosition >= 2255 && scrollPosition < 2825
                    ? styles["selected"]
                    : ""
                }
                href="#hotel-accessibility"
              >
                Accessibility
              </a>
              <a
                className={
                  scrollPosition >= 2825 && scrollPosition < 3575
                    ? styles["selected"]
                    : ""
                }
                href="#hotel-policy"
              >
                Policies
              </a>
              <a
                className={scrollPosition >= 3575 && styles["selected"]}
                href="#hotel-reviews"
              >
                Reviews
              </a>
            </div>
          </div>

          <HotelOverview
            hotelID={hotelID}
            name={hotel?.name}
            stars={hotel.stars}
            desc={hotel.description}
            ratings={hotel.ratingsAverage}
          />
          <HotelAmenities amenities={hotel.amenities} />
          <HotelLocation
            name={hotel?.name}
            location={hotel.location}
            impVicPlace={hotel.importantVicinityPlaces}
          />
          <HotelRooms
            rooms={hotel.rooms}
            amenities={hotel.amenities}
            hotelID={hotelID}
            hotelName={hotel.name}
          />
          <HotelAccessibility />
          <HotelPolicy />
          <HotelReveiews hotelName={hotel.name} hotelID={hotelID} />
        </>
      )}
    </div>
  );
}
