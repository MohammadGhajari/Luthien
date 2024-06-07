import { useNavigate } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import SearchBox from "../components/SearchBox";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useEffect } from "react";
import osm from "./../helper/osm";
import SearchResults from "../components/SearchResults";
import styles from "./../styles/hotel-city-details.module.css";
import L from "leaflet";

function FitBounds({ markers }) {
  const map = useMap();

  useEffect(() => {
    if (markers.length > 0) {
      const bounds = L.latLngBounds(markers.map((marker) => marker.location));
      map.fitBounds(bounds);
    }
  }, [markers, map]);

  return null;
}

export default function HotelGroup({
  filteredResults,
  title,
  isCLoading,
  avgLocation,
}) {
  const navigation = useNavigate();

  // Check if avgLocation is valid
  const isValidLocation =
    avgLocation && !isNaN(avgLocation.lat) && !isNaN(avgLocation.lng);

  return (
    <>
      {isCLoading ? (
        <div>Loading...</div>
      ) : (
        <div className={styles["container"]}>
          <button onClick={() => navigation("/")}>
            <IoArrowBackOutline />
          </button>

          <SearchBox showCityField={false} title={title} />
          {isValidLocation && (
            <div className={styles["map-container"]}>
              <MapContainer
                scrollWheelZoom={false}
                style={{
                  height: "80vh",
                  borderRadius: "5px",
                }}
                className={styles["map-cont"]}
              >
                <TileLayer
                  url={osm.maptiler.url}
                  attribution={osm.maptiler.attribution}
                />
                {filteredResults.map((hotel, i) => (
                  <Marker
                    key={i}
                    position={
                      hotel.location || { lat: 48.862186, lng: 2.305302 }
                    }
                  >
                    <Popup>
                      <span style={{ fontSize: "1.4rem" }}>{hotel.name}</span>
                    </Popup>
                  </Marker>
                ))}
                <FitBounds markers={filteredResults} />
              </MapContainer>
            </div>
          )}
          <div className={styles["res-container"]}>
            <SearchResults filteredResults={filteredResults} />
          </div>
        </div>
      )}
    </>
  );
}
