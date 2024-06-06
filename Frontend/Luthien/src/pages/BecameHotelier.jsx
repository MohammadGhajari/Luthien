import { useEffect, useState } from "react";
import styles from "./../styles/became-hotelier.module.css";
import AOS from "aos";
import HotelierPolicies from "../components/HotelierPolicies";
import InputField from "./../components/InputField";

export default function BecameHotelier() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  const [sent, setSent] = useState(false);

  return (
    <div
      className={`${styles["container"]} ${sent && styles["sent-container"]}`}
    >
      <HotelierPolicies setSent={setSent} sent={sent} />
      <div
        className={`${!sent && styles["form-container"]} ${
          sent && styles["sent"]
        }`}
      >
        <form>
          <h2>Enter your hotel information</h2>
          <div className={styles["hotel-name"]}>
            <label>Hotel name</label>
            <InputField placeholder="name" left={5} width={"100%"} height={4} />
          </div>
          <div className={styles["stars-city"]}>
            <div>
              <label>Hotel stars</label>
              <select name="stars">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div>
              <label>City</label>
              <InputField
                placeholder="City"
                left={10}
                width="100%"
                height={4}
              />
            </div>
          </div>
          <div className={styles["description"]}>
            <label>Add a brief description about your hotel</label>
            <textarea rows={5} name="describe"></textarea>
          </div>
        </form>
      </div>
    </div>
  );
}
