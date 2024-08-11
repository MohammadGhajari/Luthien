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

  const overviewRef = useRef();
  const amenitiesRef = useRef();
  const locationRef = useRef();
  const roomsRef = useRef();
  const accessibilitiesRef = useRef();
  const policiesRef = useRef();
  const reviewsRef = useRef();

  const [overviewVisible, setOverviewVisible] = useState(false);
  const [amenitiesVisible, setAmenitiesVisible] = useState(false);
  const [locationVisible, setLocationVisible] = useState(false);
  const [roomsVisible, setRoomsVisible] = useState(false);
  const [accessibilitiesVisible, setAccessibilitiesVisible] = useState(false);
  const [policiesVisible, setPoliciesVisible] = useState(false);
  const [reviewsVisible, setReviewsVisible] = useState(false);

  function clearAllStyles() {
    setReviewsVisible(false);
    setPoliciesVisible(false);
    setAccessibilitiesVisible(false);
    setRoomsVisible(false);
    setLocationVisible(false);
    setAmenitiesVisible(false);
    setOverviewVisible(false);
  }

  function createObserver(model) {
    const Observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        clearAllStyles();

        if (entry.target.getAttribute("data-elem") === "reviews")
          setReviewsVisible(true);
        else if (entry.target.getAttribute("data-elem") === "policies")
          setPoliciesVisible(true);
        else if (entry.target.getAttribute("data-elem") === "accessibilities")
          setAccessibilitiesVisible(true);
        else if (entry.target.getAttribute("data-elem") === "rooms")
          setRoomsVisible(true);
        else if (entry.target.getAttribute("data-elem") === "location")
          setLocationVisible(true);
        else if (entry.target.getAttribute("data-elem") === "amenities")
          setAmenitiesVisible(true);
        else setOverviewVisible(true);
      }
    });

    if (model.current) Observer.observe(model.current);
    return () => {
      if (model.current) Observer.unobserve(model.current);
    };
  }

  //___________________________________________  observers
  useEffect(() => {
    createObserver(overviewRef);
    createObserver(amenitiesRef);
    createObserver(locationRef);
    createObserver(roomsRef);
    createObserver(accessibilitiesRef);
    createObserver(policiesRef);
    createObserver(reviewsRef);
  }, [
    overviewRef.current,
    amenitiesRef.current,
    locationRef.current,
    roomsRef.current,
    accessibilitiesRef.current,
    policiesRef.current,
    reviewsRef.current,
  ]);

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
                href="#hotel-overview"
                className={overviewVisible ? styles["selected"] : ""}
              >
                Overview
              </a>
              <a
                href="#hotel-amenities"
                className={amenitiesVisible ? styles["selected"] : ""}
              >
                Amenities
              </a>
              <a
                href="#hotel-location"
                className={locationVisible ? styles["selected"] : ""}
              >
                Location
              </a>
              <a
                href="#hotel-rooms"
                className={roomsVisible ? styles["selected"] : ""}
              >
                Rooms
              </a>
              <a
                href="#hotel-accessibility"
                className={accessibilitiesVisible ? styles["selected"] : ""}
              >
                Accessibility
              </a>
              <a
                href="#hotel-policy"
                className={policiesVisible ? styles["selected"] : ""}
              >
                Policies
              </a>
              <a
                href="#hotel-reviews"
                className={reviewsVisible ? styles["selected"] : ""}
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
            overviewRef={overviewRef}
          />
          <HotelAmenities
            amenities={hotel.amenities}
            amenitiesRef={amenitiesRef}
          />
          <HotelLocation
            locationRef={locationRef}
            name={hotel?.name}
            location={hotel.location}
            impVicPlace={hotel.importantVicinityPlaces}
          />

          {hotel.rooms && hotel.rooms.length > 0 && (
            <HotelRooms
              roomsRef={roomsRef}
              rooms={hotel.rooms}
              amenities={hotel.amenities}
              hotelID={hotelID}
              hotelName={hotel.name}
            />
          )}
          <HotelAccessibility accessibilitiesRef={accessibilitiesRef} />
          <HotelPolicy policiesRef={policiesRef} />
          <HotelReveiews reviews={reviews} reviewsRef={reviewsRef} />
        </>
      )}
    </div>
  );
}
