import styles from "./../styles/hotel-location.module.css";
import { useReducer, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import osm from "./../helper/osm";
import "leaflet/dist/leaflet.css";
import { FaLocationDot } from "react-icons/fa6";

export default function HotelLocation({
    position = { lat: 36.2972, lng: 59.6067 },
    location,
    impVicPlace,
}) {
    const mapRef = useRef();

    return (
        <div id="hotel-location" className={styles.container}>
            <h1>Check out the area</h1>
            <div className={styles["map"]}>
                <div className={styles["map-container"]}>
                    <MapContainer
                        center={location}
                        zoom={16}
                        ref={mapRef}
                        style={{
                            height: "40vh",
                            borderRadius: "5px",
                            boxShadow: "0 0 5px 2px #ccc",
                        }}
                    >
                        <TileLayer
                            url={osm.maptiler.url}
                            attribution={osm.maptiler.attribution}
                        />
                        <Marker position={location}>
                            <Popup>
                                <span style={{ fontSize: "1.4rem" }}>
                                    Hotel Name
                                </span>
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
                <ul className={styles["vicinity-container"]}>
                    {impVicPlace.map((p) => (
                        <li>
                            <span className={styles["icon"]}>
                                <span>
                                    <FaLocationDot />
                                </span>
                                <span>{p.name}</span>
                            </span>
                            <span>
                                {p.distance}km, {p.time} min walk
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
