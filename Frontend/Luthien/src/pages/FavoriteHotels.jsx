import HotelGroup from "../components/HotelGroup";
import { useSelector, useDispatch } from "react-redux";
import {
  setRawResults,
  setFilteredResults,
  setLoading,
  setRooms,
} from "./../state management/searchRoomSlice";
import { getFavoriteHotels } from "./../services/handleReqs";
import { useParams } from "react-router-dom";
import { setNoFilters } from "./../state management/filterSlice";
import { useState, useEffect } from "react";
import PageNotFound from "./PageNotFound";

export default function FavoriteHotels() {
  const dispatch = useDispatch();

  const [isCLoading, setIsCLoading] = useState(true);
  const [avgLocation, setAvgLocation] = useState({
    lat: 41.42384633333333,
    lng: 19.562056666666667,
  });

  const { filteredResults, rawResults } = useSelector(
    (state) => state.searchRoom
  );
  const { favoriteHotels, email } = useSelector((state) => state.user);

  useEffect(() => {
    if (!favoriteHotels) return;

    async function fetchData() {
      try {
        setIsCLoading(true);
        dispatch(setLoading(true));
        dispatch(setFilteredResults(null));
        dispatch(setRawResults(null));
        dispatch(setNoFilters());
        dispatch(setRooms([{ adults: 1, children: 0 }]));

        const res = await getFavoriteHotels(favoriteHotels);
        let lat = 0,
          lng = 0;
        res.forEach((hotel) => {
          lat += hotel.location.lat;
          lng += hotel.location.lng;
        });
        if (res.length > 0) {
          setAvgLocation({ lat: lat / res.length, lng: lng / res.length });
        }

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
  }, [favoriteHotels, dispatch]);

  // if (!favoriteHotels || favoriteHotels.length === 0) {
  //   return <div>Loading favorite hotels...</div>;
  // }

  return (
    <>
      {email ? (
        <HotelGroup
          filteredResults={filteredResults}
          title={"Favorite Hotels"}
          isCLoading={isCLoading}
          avgLocation={avgLocation}
        />
      ) : (
        <PageNotFound />
      )}
    </>
  );
}
