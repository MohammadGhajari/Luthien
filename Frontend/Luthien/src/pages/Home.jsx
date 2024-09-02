import SearchBox from "../components/SearchBox";
import HotelShowcase from "../components/HotelShowcase";
import NoResult from "../components/NoResult";
import Features from "../components/Features";
import TrendingDestinations from "../components/TrendingDestinations";
import FAQ from "./../components/FAQ";
import SearchResults from "./../components/SearchResults";
import Loading from "./../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setNoFilters } from "./../state management/filterSlice.js";
import {
  setFilteredResults,
  setRawResults,
  setLoading,
  setRooms,
} from "./../state management/searchRoomSlice.js";
import { useLocation } from "react-router-dom";

export default function Home() {
  const { filteredResults, isLoading, rawResults } = useSelector(
    (state) => state.searchRoom
  );
  const dispatch = useDispatch();

  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#faq") {
      const faqSection = document.getElementById("faq");

      if (faqSection) {
        faqSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  useEffect(function () {
    function reset() {
      dispatch(setLoading(false));
      dispatch(setFilteredResults(null));
      dispatch(setRawResults(null));
      dispatch(setRawResults(null));
      dispatch(setNoFilters());
      dispatch(setRooms([{ adults: 1, children: 0 }]));
    }
    reset();
  }, []);

  return (
    <>
      <SearchBox />

      {filteredResults ? (
        rawResults.length === 0 ? (
          <NoResult />
        ) : (
          <SearchResults filteredResults={filteredResults} />
        )
      ) : (
        ""
      )}
      {isLoading && <Loading />}
      {!filteredResults && <></>}

      <Features />
      <TrendingDestinations />
      <HotelShowcase />
      <FAQ />
    </>
  );
}
