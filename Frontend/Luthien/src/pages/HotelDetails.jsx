import styles from "./../styles/hotel-details.module.css";
import { useParams } from "react-router-dom";
import HotelOverview from "./../components/HotelOverview";
import HotelAmenities from "./../components/HotelAmenities";
import HotelLocation from "./../components/HotelLocation";
import HotelRooms from "../components/HotelRooms";
import HotelAccessibility from "../components/HotelAccessibility";
import HotelPolicy from "../components/HotelPolicy";
import HotelReveiews from "../components/HotelReviews";
import { getHotelById, getHotelReviews } from "../services/handleReqs";
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

        // const fakeHotel = {
        //   name: "Almas",
        //   amenities: [],
        //   importantVicinityPlaces: [],
        //   stars: 3,
        //   description:
        //     "Almas shargh is a greate and nice hotels near the Imam Reza shrine.",
        //   ratingsAverage: 3,
        //   photos: [
        //     // "./../../public/sample data/1.jpeg",
        //     // "./../../public/sample data/2.jpg",
        //     // "./../../public/sample data/3.jpg",
        //     // "./../../public/sample data/4.jpeg",
        //     "./../../public/sample data/5.jpg",
        //   ],
        // };
        // setHotel(fakeHotel);
        const res = await getHotelById(hotelID);
        setHotel(res[0]);

        const res1 = await getHotelReviews(res[0].name);
        setReviews(res1);

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
            photos={hotel.photos}
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
          <HotelReveiews
            reviews={reviews}
            reviewsRef={reviewsRef}
            hotelID={hotelID}
            hotelName={hotel.name}
          />
        </>
      )}
    </div>
  );
}
