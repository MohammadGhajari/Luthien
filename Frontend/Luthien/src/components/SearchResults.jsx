import styles from "./../styles/search-results.module.css";
import SideBarFilter from "./SideBarFilter";
import HotelCartsContainer from "./HotelCartsContainer";

export default function SearchResults() {
    return (
        <div className={styles["outer-container"]}>
            <div className={styles.container}>
                <SideBarFilter />
                <HotelCartsContainer />
            </div>
        </div>
    );
}
