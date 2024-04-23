import SearchBox from "../components/SearchBox";
import HotelShowcase from "../components/HotelShowcase";
import Features from "../components/Features";
import TrendingDestinations from "../components/TrendingDestinations";

export default function Home() {
    return (
        <>
            <SearchBox />
            <Features />
            <TrendingDestinations />
            <HotelShowcase />
        </>
    );
}
