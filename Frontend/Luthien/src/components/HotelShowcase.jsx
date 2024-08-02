import { useState, useEffect } from "react";
import styles from "./../styles/hotel-showcase.module.css";
import HotelTypeCart from "./HotelTypeCart";
import { getForeignHotels, getDomesticHotels } from "./../services/handleReqs";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HotelShowcase() {
  const [domestics, setDomestics] = useState([]);
  const [foreigns, setForeigns] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);

        setForeigns(await getForeignHotels());
        setDomestics(await getDomesticHotels());

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
    <div className={styles.container}>
      <div id={"foreign-hotels"} className={styles["foreign"]}>
        <h1 data-aos={"fade-right"} data-aos-duration={"200"}>
          Foreign Hotels
        </h1>
        <div
          data-aos={"fade-right"}
          className={styles["hotel-carts-container"]}
        >
          {!isLoading &&
            foreigns?.map((f) => (
              <HotelTypeCart
                dataaos={"zoom-in"}
                key={f._id}
                cityName={f.city}
                img={f.citySVG}
              />
            ))}
        </div>
      </div>
      <div id={"domestic-hotels"} className={styles["domestic"]}>
        <h1 data-aos={"fade-right"} data-aos-duration={"200"}>
          Domestic Hotels
        </h1>
        <div
          data-aos={"fade-right"}
          className={styles["hotel-carts-container"]}
        >
          {!isLoading &&
            domestics?.map((d) => (
              <HotelTypeCart
                dataaos={"zoom-in"}
                key={d._id}
                cityName={d.city}
                img={d.citySVG}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
