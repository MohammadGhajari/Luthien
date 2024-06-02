import { useState } from "react";
import styles from "./../styles/hotel-reviews.module.css";
import ReviewCart from "./ReviewCart";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

export default function HotelPolicy() {
  const [reviews, setReviews] = useState([
    {
      name: "ali",
      img: "./../../public/sample data/4.jpeg",
      rating: 2,
      review: "that was.",
    },
    {
      name: "ghasem",
      img: "./../../public/sample data/4.jpeg",
      rating: 5,
      review:
        "that was a very good andlksdflfkjas dflkajfds ;lakjf ljka flkja lsdfk a;ea jfha hj adsfjh asd kjfh asldfh awsome hotel with all the passagers needed for a very good experience in the hotel.",
    },
    {
      name: "gholy",
      img: "./../../public/sample data/4.jpeg",
      rating: 2,
      review:
        "that was a very good and awsome hotel with all the passagers needed for a very good experience in the hotel.",
    },
    {
      name: "hasan",
      img: "./../../public/sample data/4.jpeg",
      rating: 3.8,
      review:
        "that was a very goodlkasfdlkajfl lkjfl sdj ll;kjgl;k gj;ljkf;l gkjdfl;kgj ;ldfjg ldfj;l kjg;dlf kjg; lkjg;ldfjk ;lkj ;lhkjdf;ljh ;ldfgj h;ljf ;lk and awsome hotel with all the passagers needed for a very good experience in the hotel.",
    },
    {
      name: "kazem",
      img: "./../../public/sample data/4.jpeg",
      rating: 2.4,
      review:
        "that was a very good and awsome hotel with all the passagers needed for a very good experience in the hotel.",
    },
  ]);

  return (
    <div id="hotel-reviews" className={styles["container"]}>
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
              name={review.name}
              img={review.img}
              rating={review.rating}
              review={review.review}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
