import styles from "./../styles/search-results.module.css";
import SideBarFilter from "./SideBarFilter";
import HotelCartsContainer from "./HotelCartsContainer";
import NoResult from "./NoResult";

export default function SearchResults({ filteredResults }) {
  return (
    <div className={styles["outer-container"]}>
      <div className={styles.container}>
        <div className={styles["side-bar-container"]}>
          {window.innerWidth > 960 && <SideBarFilter key={0} />}
        </div>

        {filteredResults.length > 0 ? <HotelCartsContainer /> : <NoResult />}
      </div>
    </div>
  );
}
