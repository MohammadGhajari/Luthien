import { useEffect, useState } from "react";
import styles from "./../styles/vicinity-location.module.css";
import HotelierInputFields from "./HotelierInputFields";

export default function VicinityLocation({ vicinity, setVicinity, i, v }) {
  const [location, setLocation] = useState("");
  const [time, setTime] = useState(0);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    let temp = vicinity;
    temp[i].location = location;
    temp[i].time = time;
    temp[i].distance = distance;

    setVicinity([...temp]);
  }, [location, time, distance]);
  return (
    <div className={styles["vicinity-location"]}>
      <HotelierInputFields
        placeholder="Location"
        width="100%"
        left={15}
        height={"4rem"}
        setValue={setLocation}
        value={v.location}
      />
      <HotelierInputFields
        placeholder="Distance(meter)"
        width="100%"
        left={25}
        height={"4rem"}
        type="number"
        setValue={setDistance}
        value={v.distance}
      />
      <HotelierInputFields
        placeholder="Time(mins)"
        width="100%"
        left={20}
        height={"4rem"}
        type="number"
        setValue={setTime}
        value={v.time}
      />
    </div>
  );
}
