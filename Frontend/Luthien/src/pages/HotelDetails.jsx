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
  const [reviews, setReviews] = useState([]);

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

        // const res1 = await getHotelReviews(res[0].name);
        // setReviews(res1);

        const fakeReviews = [
          {
            review: "hi this hotel is very nice.",
            rating: 4,
            status: "confirmed",
            user: {
              name: "ali",
              photo: "./../../public/users/ayla-cornell.jpg",
            },
          },
          {
            review: "i don't like that hotel.",
            rating: 2,
            status: "confirmed",
            user: {
              name: "hasan",
              photo: "./../../public/users/ben-hadley.jpg",
            },
          },
          {
            review: "i prefert Hlsdf from that.",
            rating: 3,
            status: "confirmed",
            user: {
              name: "gholi",
              photo: "./../../public/users/cristian-vega.jpg",
            },
          },
          {
            review: "nice, just that",
            rating: 5,
            status: "confirmed",
            user: {
              name: "ali",
              photo: "./../../public/users/default.png",
            },
          },
          {
            review: "hi this hotel is very nice.",
            rating: 4,
            status: "confirmed",
            user: {
              name: "ali",
              photo: "./../../public/users/ayla-cornell.jpg",
            },
          },
        ];
        setReviews([...fakeReviews]);

        //********************************add a fake hotel for development//********************************
        const fakeHotel = {};
        fakeHotel.name = "Almase Shargh";
        fakeHotel.description =
          "Almase Shargh is a very good hotel for turists.";
        fakeHotel.rooms = [];
        fakeHotel.stars = 4;
        fakeHotel.avgPrice = 1203;
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
          { name: "haram imam reza gharib", distance: 100, time: 10 },
          { name: "haram", distance: 100, time: 10 },
          { name: "haram", distance: 100, time: 10 },
        ];
        fakeHotel.country = "Iran";
        fakeHotel.amenities = [
          "swimming pool",
          "tea maker",
          "gym",
          "pet",
          "free wifi",
          "taxi",
        ];

        fakeHotel.rooms = [
          {
            roomNumber: "127",
            price: 250,
            priceDiscount: 100,
            photos: [
              "./../../public/hotel cover/alpine-retreat-1.jpg",
              "./../../public/hotel cover/alpine-retreat-2.jpg",
            ],
            _id: "1",
          },
          {
            roomNumber: "346",
            price: 350,
            priceDiscount: 250,
            photos: [
              "./../../public/hotel cover/alpine-retreat-2.jpg",
              "./../../public/hotel cover/city-center-boutique-hotel-1.jpg",
            ],
            _id: "2",
          },
        ];

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
            reveiwsCount={reviews.length}
          />
          <HotelAmenities amenities={hotel.amenities} />
          <HotelLocation
            name={hotel?.name}
            location={hotel.location}
            impVicPlace={hotel.importantVicinityPlaces}
          />

          {hotel.rooms && hotel.rooms.length > 0 && (
            <HotelRooms
              rooms={hotel.rooms}
              amenities={hotel.amenities}
              hotelID={hotelID}
              hotelName={hotel.name}
            />
          )}
          <HotelAccessibility />
          <HotelPolicy />
          <HotelReveiews reviews={reviews} />
        </>
      )}
    </div>
  );
}
