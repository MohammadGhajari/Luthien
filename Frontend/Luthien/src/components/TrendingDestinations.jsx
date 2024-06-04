import { useState, useEffect } from "react";
import styles from "./../styles/trending-destinations.module.css";
import { NavLink } from "react-router-dom";
import { getTrendings } from "./../services/handleReqs";

export default function TrendingDestinations() {
  const [isLoading, setIsLoading] = useState(false);
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const res = await getTrendings();
        setTrends(res);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div id={"trending-dest"} className={styles["outer-container"]}>
      <div className={styles["trending-countainer"]}>
        <h2>Trending destinations</h2>
        <p>Most popular choices for travelers</p>
        {!isLoading && (
          <div className={styles["grid-layout"]}>
            <NavLink
              to={`/hotels/city/${trends[0]?.city}`}
              className={styles["trend"]}
            >
              <span>
                {trends[0]?.city.charAt(0).toUpperCase() +
                  trends[0]?.city.slice(1)}
                <img src={trends[0]?.countryFlag} alt="flag" />
              </span>
              <img src={trends[0]?.cover} alt="trending photo" />
            </NavLink>
            <NavLink
              to={`/hotels/city/${trends[1]?.city}`}
              className={styles["trend"]}
            >
              <span>
                {trends[1]?.city.charAt(0).toUpperCase() +
                  trends[1]?.city.slice(1)}
                <img src={trends[1]?.countryFlag} alt="flag" />
              </span>
              <img src={trends[1]?.cover} alt="trending photo" />
            </NavLink>
            <NavLink
              to={`/hotels/city/${trends[2]?.city}`}
              className={styles["trend"]}
            >
              <span>
                {trends[2]?.city.charAt(0).toUpperCase() +
                  trends[2]?.city.slice(1)}
                <img src={trends[2]?.countryFlag} alt="flag" />
              </span>
              <img src={trends[2]?.cover} alt="trending photo" />
            </NavLink>
            <NavLink
              to={`/hotels/city/${trends[3]?.city}`}
              className={styles["trend"]}
            >
              <span>
                {trends[3]?.city.charAt(0).toUpperCase() +
                  trends[3]?.city.slice(1)}
                <img src={trends[3]?.countryFlag} alt="flag" />
              </span>
              <img src={trends[3]?.cover} alt="trending photo" />
            </NavLink>
            <NavLink
              to={`/hotels/city/${trends[4]?.city}`}
              className={styles["trend"]}
            >
              <span>
                {trends[4]?.city.charAt(0).toUpperCase() +
                  trends[4]?.city.slice(1)}
                <img src={trends[4]?.countryFlag} alt="flag" />
              </span>
              <img src={trends[4]?.cover} alt="trending photo" />
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
}
