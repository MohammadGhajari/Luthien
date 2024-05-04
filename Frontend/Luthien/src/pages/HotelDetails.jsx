import { useParams } from "react-router-dom";
export default function HotelDetails() {
    const { hotelID } = useParams();
    console.log(hotelID);
    return <></>;
}
