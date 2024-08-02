import styles from "./../styles/features.module.css";

export default function Features() {
  return (
    <div className={styles["outer-container"]}>
      <div className={styles["features-container"]}>
        <div className={styles.feature}>
          <img src="features/Search.svg" alt="Search" />
          <h4>Search simply</h4>
          <p>Search all our hotels in just a few seconds.</p>
        </div>
        <div className={styles.feature}>
          <img src="features/Compare.svg" alt="Compare" />
          <h4>Compare confidently</h4>
          <p>Compare our hotel prices with others.</p>
        </div>
        <div className={styles.feature}>
          <img src="features/Save.svg" alt="Save" />
          <h4>Save big</h4>
          <p>Discover a great deal to book on our site.</p>
        </div>
      </div>
    </div>
  );
}
