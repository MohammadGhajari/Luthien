import styles from "./../styles/hotelier-policies.module.css";
import { useState } from "react";

export default function HotelierPolicies({ setSent, sent }) {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className={`${styles["container"]} ${sent && styles["sent"]}`}>
      <div className={styles["inner-container"]}>
        <h1>Policies</h1>
        <p>before you became a hotelier, you must accept these policies.</p>
        <ol>
          <li>
            <h4>Eligibility Criteria</h4>
            <ul>
              <li>
                Hoteliers must provide valid identification and business
                registration documents.
              </li>
              <li>Hoteliers must be at least 18 years old.</li>
            </ul>
          </li>
          <li>
            <h4>Property Listing Standards</h4>
            <ul>
              <li>
                All listings must provide accurate and up-to-date information.
              </li>
              <li>
                Properties must meet minimum standards for cleanliness, safety,
                and amenities.
              </li>
              <li>
                Photos of the property must be current and accurately represent
                the listing.
              </li>
            </ul>
          </li>
          <li>
            <h4>Pricing and Payments</h4>
            <ul>
              <li>Hoteliers must set fair and competitive prices.</li>
              <li>
                All prices must be inclusive of any applicable taxes and fees.
              </li>
              <li>
                Payments will be processed through the website's secure payment
                gateway.
              </li>
            </ul>
          </li>
          <li>
            <h4>Cancellations and Refunds </h4>
            <ul>
              <li>
                Clear policies on cancellations and refunds must be provided.
              </li>
              <li>
                Hoteliers must adhere to the site's cancellation policy,
                including penalties for late cancellations.
              </li>
            </ul>
          </li>
          <li>
            <h4>Guest Interaction and Communication</h4>
            <ul>
              <li>Hoteliers must respond to guest inquiries promptly.</li>
              <li>
                Professional and courteous behavior is required in all
                communications with guests.
              </li>
              <li>
                Any disputes should be reported to the website administration
                for mediation.
              </li>
            </ul>
          </li>
          <li>
            <h4>Maintenance and Housekeeping</h4>
            <ul>
              <li>Properties must be maintained in good working order.</li>
              <li>
                Regular housekeeping services must be provided to ensure
                cleanliness.
              </li>
            </ul>
          </li>
          <li>
            <h4>Compliance with Laws and Regulations</h4>
            <ul>
              <li>
                Hoteliers must comply with all local laws, regulations, and
                licensing requirements.
              </li>
              <li>
                It is the hotelier's responsibility to ensure their property
                meets health and safety standards.
              </li>
            </ul>
          </li>
          <li>
            <h4>Insurance</h4>
            <ul>
              <li>
                Hoteliers must carry adequate insurance to cover potential
                liabilities and damages.
              </li>
              <li>
                Proof of insurance may be required during the registration
                process.
              </li>
            </ul>
          </li>
          <li>
            <h4>Privacy and Data Protection</h4>
            <ul>
              <li>
                Hoteliers must protect the privacy and personal information of
                guests.
              </li>
              <li>
                Any data collected from guests must be handled in compliance
                with relevant data protection laws.
              </li>
            </ul>
          </li>
          <li>
            <h4>Reviews and Feedback</h4>
            <ul>
              <li>
                Hoteliers should encourage guests to leave honest reviews.
              </li>
              <li>Respond to feedback constructively and professionally.</li>
              <li>
                Manipulating or falsifying reviews is strictly prohibited.
              </li>
            </ul>
          </li>
          <li>
            <h4>Prohibited Activities</h4>
            <ul>
              <li>
                Illegal activities, discrimination, and harassment of any kind
                are strictly forbidden.
              </li>
              <li>
                Any violation of these terms may result in immediate suspension
                or termination of the hotelier’s account.
              </li>
            </ul>
          </li>
          <li>
            <h4>Termination of Agreement</h4>
            <ul>
              <li>
                Either party may terminate this agreement with prior notice.
              </li>
              <li>
                In case of a breach of terms, immediate termination may occur
                without notice.
              </li>
            </ul>
          </li>
          <li>
            <h4>Modification of Policies</h4>
            <ul>
              <li>
                The website reserves the right to modify these policies at any
                time.
              </li>
              <li>
                Hoteliers will be notified of significant changes and must agree
                to them to continue using the service.
              </li>
            </ul>
          </li>
        </ol>
        <h3>Consent and Acceptance</h3>
        <p>
          By registering as a hotelier on this website, you acknowledge that you
          have read, understood, and agree to comply with these policies.
        </p>
        <div className={styles["checkbox-container"]}>
          <div
            onClick={() => setAgreed(!agreed)}
            className={styles["checkbox"]}
          >
            <div style={{ display: `${!agreed ? "none" : "flex"}` }}></div>
          </div>
          <p>I agreed with these policies.</p>
        </div>
        <button
          onClick={() => setSent(true)}
          disabled={!agreed}
          className={`${!agreed && styles["disabled"]}`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
