import { useState, useEffect } from "react";
import styles from "./../styles/trending-destinations.module.css";
import { NavLink } from "react-router-dom";
import { getTrendings } from "./../services/handleReqs";
import AOS from "aos";
import "aos/dist/aos.css";

export default function TrendingDestinations() {
  const [isLoading, setIsLoading] = useState(false);
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        console.log("kos");
        const res = await getTrendings();
        setTrends(res);
        console.log("kos2");

        console.log(res);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <div id={"trending-dest"} className={styles["outer-container"]}>
      <div className={styles["trending-countainer"]}>
        <h2 data-aos={"fade-right"} data-aos-duration={"200"}>
          Trending destinations
        </h2>
        <p data-aos={"fade-right"} data-aos-duration={"200"}>
          Most popular choices for travelers
        </p>
        {!isLoading && (
          <div className={styles["grid-layout"]}>
            <NavLink
              to={`/hotels/city/${trends[0]?.city}`}
              className={styles["trend"]}
              data-aos={"fade-right"}
            >
              <span>
                {trends[0]?.city.charAt(0).toUpperCase() +
                  trends[0]?.city.slice(1)}
                <img src={trends[0]?.countryFlag} alt="flag" />
              </span>
              <img src={trends[0]?.cover} alt="trending photo" />
              {/* <img
                src={
                  "./../../public/hotel cover/city-center-boutique-hotel-1.jpg"
                }
                alt=""
              /> */}
            </NavLink>
            <NavLink
              to={`/hotels/city/${trends[1]?.city}`}
              className={styles["trend"]}
              data-aos={"fade-right"}
            >
              <span>
                {trends[1]?.city.charAt(0).toUpperCase() +
                  trends[1]?.city.slice(1)}
                <img src={trends[1]?.countryFlag} alt="flag" />
              </span>
              <img src={trends[1]?.cover} alt="trending photo" />
              {/* <img
                src={
                  "./../../public/hotel cover/city-center-boutique-hotel-1.jpg"
                }
                alt=""
              /> */}
            </NavLink>
            <NavLink
              to={`/hotels/city/${trends[2]?.city}`}
              className={styles["trend"]}
              data-aos={"fade-right"}
            >
              <span>
                {trends[2]?.city.charAt(0).toUpperCase() +
                  trends[2]?.city.slice(1)}
                <img src={trends[2]?.countryFlag} alt="flag" />
              </span>
              <img src={trends[2]?.cover} alt="trending photo" />
              {/* <img
                src={
                  "./../../public/hotel cover/city-center-boutique-hotel-1.jpg"
                }
                alt=""
              /> */}
            </NavLink>
            <NavLink
              to={`/hotels/city/${trends[3]?.city}`}
              className={styles["trend"]}
              data-aos={"fade-right"}
            >
              <span>
                {trends[3]?.city.charAt(0).toUpperCase() +
                  trends[3]?.city.slice(1)}
                <img src={trends[3]?.countryFlag} alt="flag" />
              </span>
              <img src={trends[3]?.cover} alt="trending photo" />
              {/* <img
                src={"./../../public/hotel cover/alpine-retreat-1.jpg"}
                alt="trending photo"
              /> */}
            </NavLink>
            <NavLink
              to={`/hotels/city/${trends[4]?.city}`}
              className={styles["trend"]}
              data-aos={"fade-right"}
            >
              <span>
                {trends[4]?.city.charAt(0).toUpperCase() +
                  trends[4]?.city.slice(1)}
                <img src={trends[4]?.countryFlag} alt="flag" />
              </span>
              <img src={trends[4]?.cover} alt="trending photo" />
              {/* <img
                src={"./../../public/hotel cover/alpine-retreat-2.jpg"}
                alt="trending photo"
              /> */}
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
}
