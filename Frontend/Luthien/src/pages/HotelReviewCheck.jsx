import { useNavigate, useParams } from "react-router-dom";
import { getHotelReviews } from "./../services/handleReqs";
import { useEffect, useState } from "react";
import styles from "./../styles/hotel-review-check.module.css";
import { NavLink } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { IoWarningOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { GiConfirmed } from "react-icons/gi";
import { TiDeleteOutline } from "react-icons/ti";
import { MdCheckCircleOutline } from "react-icons/md";
import { SlClose } from "react-icons/sl";
import { updateReveiw } from "./../services/handleReqs";
import { toastSuccess } from "../services/notify";
import { toast } from "react-toastify";

export default function HotelReviewCheck() {
  const { hotelName } = useParams();
  const [pendingReviews, setPendingReviews] = useState([]);
  const navigate = useNavigate();

  async function handleConfirm(id) {
    const res = await toast.promise(updateReveiw(id, { status: "confirmed" }), {
      pending: "Confirming review...",
      success: "Review confirmed successfully!⚡",
      error: "Try again.⚠️",
    });
    const tempReviews = pendingReviews.filter((r) => r.id !== id);
    setPendingReviews(tempReviews);
  }
  async function handleReject(id) {
    const res = await toast.promise(updateReveiw(id, { status: "failed" }), {
      pending: "Rejecting review...",
      success: "Review rejected successfully!⚡",
      error: "Try again.⚠️",
    });
    const tempReviews = pendingReviews.filter((r) => r.id !== id);
    setPendingReviews(tempReviews);
  }

  useEffect(() => {
    async function fetchData() {
      const res = await getHotelReviews(hotelName);
      if (res) {
        const tempPending = res.filter((r) => r.status === "pending");
        setPendingReviews(tempPending);
      }
      // const fakeReviews = [
      //   {
      //     review: "hi this hotel is very nice.",
      //     rating: 4,
      //     status: "pending",
      //     user: {
      //       name: "ali",
      //       photo: "./../../public/users/ayla-cornell.jpg",
      //     },
      //   },
      //   {
      //     review: "i don't like that hotel.",
      //     rating: 2,
      //     status: "pending",
      //     user: {
      //       name: "hasan",
      //       photo: "./../../public/users/ben-hadley.jpg",
      //     },
      //   },
      //   {
      //     review: "i prefert Hlsdf from that.",
      //     rating: 3,
      //     status: "pending",
      //     user: {
      //       name: "gholi",
      //       photo: "./../../public/users/cristian-vega.jpg",
      //     },
      //   },
      //   {
      //     review: "nice, just that",
      //     rating: 5,
      //     status: "confirmed",
      //     user: {
      //       name: "ali",
      //       photo: "./../../public/users/default.png",
      //     },
      //   },
      //   {
      //     review: "hi this hotel is very nice.",
      //     rating: 4,
      //     status: "confirmed",
      //     user: {
      //       name: "ali",
      //       photo: "./../../public/users/ayla-cornell.jpg",
      //     },
      //   },
      // ];

      // setPendingReviews([...fakeReviews]);
    }

    fetchData();
  }, [hotelName]);

  return (
    <div className={styles["container"]}>
      <button onClick={() => navigate("/dashboard/checking-reviews")}>
        <FaArrowLeft />
      </button>
      {pendingReviews.length === 0 ? (
        <h1>There is no review for this hotel</h1>
      ) : (
        <div className={styles["content"]}>
          <p>
            <span>
              <IoWarningOutline />
            </span>
            <span>
              These are reviews that are in pending state and not confirmed yet.
            </span>
          </p>
          {pendingReviews.map((review, i) => (
            <div key={i} className={styles["review-pending-cart"]}>
              <div
                className={styles["photo-container"]}
                style={{ background: `URL(${review.user.photo})` }}
              ></div>
              <div className={styles["reveiw-content"]}>
                <div className={styles["top"]}>
                  <h3>{review.user.name}</h3>
                  <span>
                    {Array.from({ length: review?.rating }, (x, i) => (
                      <FaStar key={i} />
                    ))}
                  </span>
                </div>
                <p className={styles["review-desc"]}>{review.review}</p>
              </div>
              <div className={styles["btn-container"]}>
                <button onClick={() => handleConfirm(review.id)}>
                  <MdCheckCircleOutline /> Confirm
                </button>
                <button onClick={() => handleReject(review.id)}>
                  <SlClose /> Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
