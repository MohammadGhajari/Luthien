import styles from "./../styles/hotel-policy.module.css";

export default function HotelPolicy() {
    return (
        <div id="hotel-policy" className={styles["container"]}>
            <div className={styles["left"]}>
                <h1>Fees & policies</h1>
            </div>
            <div className={styles["right"]}>
                <div className={styles["policy-items"]}>
                    <h1>Optional extras</h1>
                    <ul>
                        <li>
                            <strong>Continental breakfast</strong> is offered
                            for an extra charge of approximately USD 14.95 per
                            person
                        </li>
                    </ul>
                </div>
                <div className={styles["policy-items"]}>
                    <h1>Pets</h1>
                    <ul>
                        <li>Service animals exempt from fee</li>
                        <li>Pet deposit: USD 100.00 per stay</li>
                        <li>
                            Pets are allowed for an extra charge of USD 100.00
                            per accommodation, per stay
                        </li>
                    </ul>
                </div>
                <div className={styles["policy-items"]}>
                    <h1>Parking</h1>
                    <ul>
                        <li>Self-parking costs USD 50 per day</li>
                        <li>Valet parking costs USD 75 per day</li>
                        <li>
                            Parking is available nearby and costs USD 50 per day
                            (984 ft away)
                        </li>
                        <li>Parking height restrictions apply</li>
                    </ul>
                </div>
                <div className={styles["policy-items"]}>
                    <h1>Policies</h1>
                    <ul>
                        <li>
                            The property has connecting/adjoining rooms. These
                            are subject to availability and can be requested by
                            contacting the property using the number on the
                            booking confirmation.
                        </li>
                        <li>
                            This property's policy is to refuse certain bookings
                            for the purpose of group events or parties,
                            including pre-wedding stag and hen parties.
                        </li>
                        <li>
                            Guests can rest easy knowing that there's a fire
                            extinguisher, a security system and window guards
                            on-site.
                        </li>
                        <li>
                            This property welcomes guests of all sexual
                            orientations and gender identities (LGBTQ+
                            friendly).
                        </li>
                        <li>
                            This property accepts credit cards. Cash is not
                            accepted.
                        </li>
                        <li>
                            This property affirms that it follows the cleaning
                            and disinfection practices of Commitment to Clean
                            (Marriott).
                        </li>

                        <li>
                            Please note that cultural norms and guest policies
                            may differ by country and by property. The policies
                            listed are provided by the property.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
