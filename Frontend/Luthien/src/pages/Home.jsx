import SearchBox from "../components/SearchBox";
import HotelShowcase from "../components/HotelShowcase";
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
            {results.length > 0 && <SearchResults results={results} />}
            {results.length === 0 && (
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
