import styles from "./../styles/hotel-city-details.module.css";
import { getHotelsInCity } from "./../services/handleReqs";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { TfiControlShuffle } from "react-icons/tfi";
import SearchResults from "../components/SearchResults";
import { useSelector, useDispatch } from "react-redux";
import {
  setRawResults,
  setFilteredResults,
  setLoading,
  setRooms,
} from "./../state management/searchRoomSlice";
import { setNoFilters } from "./../state management/filterSlice";
import SearchBox from "../components/SearchBox";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import osm from "./../helper/osm";

export default function HotelCityDetails() {
  const { cityID } = useParams();
  const dispatch = useDispatch();

  const [isCLoading, setIsCLoading] = useState(true);
  const [avgLocation, setAvgLocation] = useState({ lat: 0, lng: 0 });

  const { filteredResults, rawResults } = useSelector(
    (state) => state.searchRoom
  );

  useEffect(() => {
    async function fetchData() {
      try {
        setIsCLoading(true);
        dispatch(setLoading(true));
        dispatch(setFilteredResults(null));
        dispatch(setRawResults(null));
        dispatch(setRawResults(null));
        dispatch(setNoFilters());
        dispatch(setRooms([{ adults: 1, children: 0 }]));

        const res = await getHotelsInCity(cityID);

        let lat = 0,
          lng = 0;
        res.forEach((hotel) => {
          console.log(hotel.location);
          lat += hotel.location.lat;
          lng += hotel.location.lng;
        });
        setAvgLocation({ lat: lat / res.length, lng: lng / res.length });

        dispatch(setLoading(false));
        dispatch(setFilteredResults(res));
        dispatch(setRawResults(res));
        dispatch(setNoFilters());

        setIsCLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      {!isCLoading && (
        <div className={styles["container"]}>
          <SearchBox showCityField={false} cityName={cityID} />
          <div className={styles["map-container"]}>
            <MapContainer
              center={avgLocation}
              zoom={12}
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
              {filteredResults.map((hotel) => (
                <Marker position={hotel.location}>
                  <Popup>
                    <span style={{ fontSize: "1.4rem" }}>{hotel.name}</span>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
          <div className={styles["res-container"]}>
            <SearchResults filteredResults={filteredResults} />
          </div>
        </div>
      )}
    </>
  );
}
