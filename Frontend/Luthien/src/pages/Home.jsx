import SearchBox from "../components/SearchBox";
import HotelShowcase from "../components/HotelShowcase";
import NoResult from "../components/NoResult";
import Features from "../components/Features";
import TrendingDestinations from "../components/TrendingDestinations";
import FAQ from "./../components/FAQ";
import SearchResults from "./../components/SearchResults";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function Home() {
    const { results } = useSelector((state) => state.searchRoom);
    console.log(results);

    return (
        <>
            <SearchBox />
            {results !== null ? (
                results.length === 0 ? (
                    <NoResult />
                ) : (
                    <SearchResults results={results} />
                )
            ) : (
                ""
            )}
            {!results && (
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
