import styles from "./../styles/hotel-accessibility.module.css";

import { MdApartment, MdMeetingRoom } from "react-icons/md";
import AOS from "aos";
import { useEffect } from "react";

export default function HotelAccessibility() {
  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);

  return (
    <div id="hotel-accessibility" className={styles["container"]}>
      <div
      // data-aos={"fade-up"}
      >
        <h2>Accessibility</h2>
        <p>
          If you have requests for specific accessibility needs, please contact
          the property using the information on the reservation confirmation
          received after booking.
        </p>
      </div>
      <div
      // data-aos={"fade-down"}
      >
        <h2>
          <span>
            <MdApartment />
          </span>
          <span>Common areas</span>
        </h2>
        <div className={styles["content"]}>
          <p>Wheelchair accessible (may have limitations)</p>
          <p>Assistive listening devices</p>
          <p>Braille/raised signage</p>
          <p>Lift (91 centimetre wide door)</p>
          <p>Stair-free path to entrance</p>
          <p>Visual alarms in hallways</p>
          <p>Wheelchair-accessible business centre</p>
          <p>Wheelchair-accessible concierge desk</p>
          <p>Wheelchair-accessible gym</p>
          <p>Wheelchair-accessible lounge</p>
          <p>Wheelchair-accessible path of travel</p>
          <p>Wheelchair-accessible path to lift</p>
          <p>Wheelchair-accessible public washroom</p>
          <p>Wheelchair-accessible registration desk (91 centimetre high)</p>
          <p>Wheelchair-accessible restaurant</p>
        </div>
      </div>
      <div
      // data-aos={"fade-up"}
      >
        <h2>
          <span>
            <MdMeetingRoom />
          </span>
          <span>Rooms</span>
        </h2>
        <div className={styles["content"]}>
          <p>Braille/raised signage</p>
          <p>Grab bar near toilet (91 centimetre high)</p>
          <p>Lever door handles</p>
          <p>Phone accessibility kit</p>
          <p>Transfer shower</p>
          <p>Visual fire alarm</p>
          <p>Wheelchair-width doorways (91 centimetre wide)</p>
        </div>
      </div>
    </div>
  );
}
