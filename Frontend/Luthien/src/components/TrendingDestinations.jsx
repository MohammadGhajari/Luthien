import styles from "./../styles/trending-destinations.module.css";

export default function TrendingDestinations() {
    return (
        <div className={styles["outer-container"]}>
            <div className={styles["trending-countainer"]}>
                <h2>Trending destinations</h2>
                <p>Most popular choices for travelers</p>
                <div className={styles["grid-layout"]}>
                    <div className={styles["trend"]}>
                        <span>
                            German <img src="/flags/1.png" alt="flag" />
                        </span>
                        <img src="trends/1.jpeg" alt="trending photo" />
                    </div>
                    <div className={styles["trend"]}>
                        <span>
                            Iran <img src="/flags/2.png" alt="flag" />
                        </span>
                        <img src="trends/2.jpg" alt="trending photo" />
                    </div>
                    <div className={styles["trend"]}>
                        <span>
                            United States <img src="/flags/3.png" alt="flag" />
                        </span>
                        <img src="trends/3.jpg" alt="trending photo" />
                    </div>
                    <div className={styles["trend"]}>
                        <span>
                            Greate British <img src="/flags/4.png" alt="flag" />
                        </span>
                        <img src="trends/4.jpeg" alt="trending photo" />
                    </div>
                    <div className={styles["trend"]}>
                        <span>
                            France <img src="/flags/5.png" alt="flag" />
                        </span>
                        <img src="trends/5.jpg" alt="trending photo" />
                    </div>
                </div>
            </div>
        </div>
    );
}

{
    /* <img src="trends/2.jpg" alt="trending photo" />
<img src="trends/3.jpg" alt="trending photo" />
<img src="trends/4.jpeg" alt="trending photo" />
<img src="trends/5.jpg" alt="trending photo" /> */
}
