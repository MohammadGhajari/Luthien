import { useState, useEffect } from "react";
import styles from "./../styles/hotel-reviews.module.css";
import ReviewCart from "./ReviewCart";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { getHotelReviews } from "./../services/handleReqs";
import AOS from "aos";
import { useSelector } from "react-redux";
import StarRating from "./../components/StarRating";
import { toastError, toastSuccess } from "../services/notify";
import {
  createReview,
  getCurrentUser,
  updateUser,
} from "./../services/handleReqs";
import { toast } from "react-toastify";
import { getTime } from "../helper/time";

export default function HotelReviews({ hotelName, hotelID }) {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { email, id } = useSelector((state) => state.user);
  const [rating, setRating] = useState(0);
  const [rev, setRev] = useState("");

  async function handleSubmitRating(e) {
    e.preventDefault();

    if (rating === 0) return toastError("At least one rating is required.");
    if (rev.length === 0)
      return toastError("Type your opinion about this hotel.");

    const res = await createReview({
      review: rev,
      rating: rating,
      user: id,
      hotel: hotelID,
    });

    if (res) toastSuccess("Review created successfully.");

    const currentUser = await getCurrentUser();

    const updatedUser = await toast.promise(
      updateUser({
        activity: [
          ...currentUser.data.data.activity,
          { type: "addReview", data: { hotelName, rating }, date: getTime() },
        ],
      }),
      {}
    );
    setRating(0);
    setRev("");
  }

  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);

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
    <>
      {!isLoading && reviews.length > 0 && (
        <div id="hotel-reviews" className={styles["container"]}>
          <h1 data-aos={"fade-right"}>Reviews</h1>

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
            {reviews.map((review, i) =>
              review.status === "confirmed" ? (
                <SwiperSlide key={i} className={styles["swiper-slide"]}>
                  <ReviewCart
                    key={i}
                    name={review.user.name}
                    img={review.user.photo}
                    rating={review.rating}
                    review={review.review}
                  />
                </SwiperSlide>
              ) : null
            )}
          </Swiper>
          {email.length > 0 && (
            <div className={styles["add-review-container"]}>
              <form onSubmit={handleSubmitRating}>
                <h3>Add comment</h3>
                <label>{rating}/5</label>
                <StarRating rating={rating} setRating={setRating} />
                <p>Share your review:</p>
                <textarea
                  value={rev}
                  onChange={(e) => setRev(e.target.value)}
                  rows={4}
                ></textarea>
                <button>Submit</button>
              </form>
            </div>
          )}
        </div>
      )}
    </>
  );
}
