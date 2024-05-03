import SearchBox from "../components/SearchBox";
import HotelShowcase from "../components/HotelShowcase";
import NoResult from "../components/NoResult";
import Features from "../components/Features";
import TrendingDestinations from "../components/TrendingDestinations";
import FAQ from "./../components/FAQ";
import SearchResults from "./../components/SearchResults";
import { useSelector } from "react-redux";

export default function Home() {
    const { filteredResults, rawResults } = useSelector(
        (state) => state.searchRoom
    );
    return (
        <>
            <SearchBox />
            {filteredResults ? (
                filteredResults.length === 0 ? (
                    <NoResult />
                ) : (
                    <SearchResults />
                )
            ) : (
                ""
            )}
            {!filteredResults && (
                <>
                    <Features />
                    <TrendingDestinations />
                    <HotelShowcase />
                    <FAQ />
                </>
            )}
        </>
    );
}
