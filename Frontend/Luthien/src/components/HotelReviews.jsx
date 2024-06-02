import { useState, useEffect } from "react";
import styles from "./../styles/hotel-reviews.module.css";
import ReviewCart from "./ReviewCart";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { getHotelReviews } from "./../services/handleReqs";

export default function HotelReviews({ hotelName }) {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  console.log(hotelName);

  useEffect(function () {
    async function fetchData() {
      setIsLoading(true);
      const res = await getHotelReviews(hotelName);
      setReviews(res);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div id="hotel-reviews" className={styles["container"]}>
      {!isLoading && (
        <>
          <h1>Reviews</h1>

          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className={styles["reviews-container"] + " " + styles["swiper"]}
          >
            {reviews.map((review, i) => (
              <SwiperSlide key={i} className={styles["swiper-slide"]}>
                <ReviewCart
                  key={i}
                  name={review.user.name}
                  img={review.user.photo}
                  rating={review.rating}
                  review={review.review}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}
    </div>
  );
}
