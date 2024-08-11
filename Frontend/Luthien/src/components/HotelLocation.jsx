import styles from "./../styles/hotel-location.module.css";
import { useReducer, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import osm from "../util/osm";
import "leaflet/dist/leaflet.css";
import AOS from "aos";
import { useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";

export default function HotelLocation({
  location,
  impVicPlace,
  name,
  locationRef,
}) {
  const mapRef = useRef();
  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);

  return (
    <div
      id="hotel-location"
      className={styles.container}
      ref={locationRef}
      data-elem={"location"}
    >
      <h1 data-aos={"fade-right"}>Check out the area</h1>
      <div className={styles["map"]} data-aos={"fade-right"}>
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
                <span style={{ fontSize: "1.4rem" }}>{name}</span>
              </Popup>
            </Marker>
          </MapContainer>
        </div>
        <ul className={styles["vicinity-container"]}>
          <li className={styles["list-title"]}>Important Vicinity places</li>
          {impVicPlace.map((p, i) => (
            <li key={i}>
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
