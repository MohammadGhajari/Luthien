import styles from "./../styles/checking-reviews.module.css";
import { getHotelByName } from "./../services/handleReqs";
import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import InputField from "../components/InputField";
import Loading from "../components/Loading";
import { FaStar } from "react-icons/fa";

export default function CheckingReviews() {
  const [hotel, setHotel] = useState({});
  const [isLoading, setIsloading] = useState(false);
  const [query, setQuery] = useState("");

  function toCamelCase(str) {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (query.length === 0) return;

    setIsloading(true);
    // const res = await getHotelByName(toCamelCase(query));
    // if (res.length === 0) {
    //   setIsloading(false);
    //   return;
    // }

    // setHotel(res[0]);
    setHotel({
      name: "Almas Shargh",
      owner: {
        name: "Hasan",
      },
      stars: 4,
    });
    setIsloading(false);
  }

  return (
    <div className={styles["container"]}>
      <h1>Select hotel for checking its reviews</h1>
      <form className={styles["search-container"]} onSubmit={handleSubmit}>
        <InputField
          placeholder={"Hotel name"}
          width="100%"
          value={query}
          setValue={setQuery}
        />
        <button>Search</button>
      </form>
      {isLoading ? (
        <Loading />
      ) : (
        <div className={styles["search-result-container"]}>
          {Object.keys(hotel).length !== 0 && (
            <NavLink
              to={`/dashboard/checking-reviews/${hotel?.name}`}
              className={styles["hotel-nav"]}
            >
              <h2>{hotel?.name}</h2>
              <span className={styles["stars-container"]}>
                {Array.from({ length: hotel?.stars }, (x, i) => (
                  <FaStar key={i} />
                ))}
              </span>
              <span>Owner: {hotel?.owner?.name}</span>
            </NavLink>
          )}
        </div>
      )}
    </div>
  );
}
