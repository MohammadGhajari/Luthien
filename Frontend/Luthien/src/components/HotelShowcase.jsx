import styles from "./../styles/hotel-showcase.module.css";
import HotelTypeCart from "./HotelTypeCart";

export default function HotelShowcase() {
    return (
        <div className={styles.container}>
            <div className={styles["foreign"]}>
                <h1>Foreign Hotels</h1>
                <div className={styles["hotel-carts-container"]}>
                    <HotelTypeCart
                        cityName={"Bacho"}
                        img={"paris-5ea3c8bc.svg"}
                    />
                    <HotelTypeCart
                        cityName={"Istanbol"}
                        img={"paris-5ea3c8bc.svg"}
                    />
                    <HotelTypeCart
                        cityName={"Irvan"}
                        img={"paris-5ea3c8bc.svg"}
                    />
                    <HotelTypeCart
                        cityName={"Dobai"}
                        img={"paris-5ea3c8bc.svg"}
                    />
                </div>
            </div>
            <div className={styles["domestic"]}>
                <h1>Domestic Hotels</h1>
                <div className={styles["hotel-carts-container"]}>
                    <HotelTypeCart
                        cityName={"Tehran"}
                        img={"paris-5ea3c8bc.svg"}
                    />
                    <HotelTypeCart
                        cityName={"Mashhad"}
                        img={"paris-5ea3c8bc.svg"}
                    />
                    <HotelTypeCart
                        cityName={"Tabriz"}
                        img={"paris-5ea3c8bc.svg"}
                    />
                    <HotelTypeCart
                        cityName={"Isfahan"}
                        img={"paris-5ea3c8bc.svg"}
                    />
                </div>
            </div>
        </div>
    );
}
