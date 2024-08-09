import { getHotelsInCity } from "./../services/handleReqs";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setRawResults,
  setFilteredResults,
  setLoading,
  setRooms,
} from "./../state management/searchRoomSlice";
import { setNoFilters } from "./../state management/filterSlice";
import "leaflet/dist/leaflet.css";
import HotelGroup from "../components/HotelGroup";

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
      <HotelGroup
        filteredResults={filteredResults}
        title={`Hotels in ${cityID}`}
        isCLoading={isCLoading}
        avgLocation={avgLocation}
      />
    </>
  );
}
