import { BrowserRouter, Route, Routes } from "react-router-dom";
import HotelDetails from "./pages/HotelDetails";
import HotelCityDetails from "./pages/HotelCityDetails";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./components/AppLayout";
import Home from "./pages/Home";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-tippy/dist/tippy.css";
import { useEffect, useState } from "react";
import { getCurrentUser } from "./services/handleReqs";
import { useDispatch, useSelector } from "react-redux";
import {
  setEmail,
  setName,
  setPhoto,
  setRole,
  setAddress,
  setDateOfBirth,
  setGender,
  setNationality,
  setPhoneNumber,
  setfavoriteHotels,
  setId,
  setBalance,
} from "./state management/userSlice";
import Dashboard from "./pages/Dashboard";
import FavoriteHotels from "./pages/FavoriteHotels";
import PersonalInformation from "./pages/PersonalInformation";
import Security from "./pages/Security";
import MyHotel from "./pages/MyHotel";
import Activity from "./pages/Activity";
import Wallet from "./pages/Wallet";
import AboutUs from "./pages/AboutUs";
import ReservedRooms from "./pages/ReservedRooms";
import CheckingReviews from "./pages/CheckingReviews";
import BecameHotelier from "./pages/BecameHotelier";
import HotelReviewCheck from "./pages/HotelReviewCheck";
import HotelAddRoom from "./pages/HotelAddRoom";
import Loading from "./components/Loading";

function App() {
  const { email, role } = useSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const { isDarkMode } = useSelector((state) => state.darkmode);

  useEffect(function () {
    async function fetchData() {
      setIsLoading(true);
      const res = await getCurrentUser();
      if (res.status === "success") {
        dispatch(setName(res.data.data.name));
        dispatch(setEmail(res.data.data.email));
        dispatch(setBalance(res.data.data.balance));
        dispatch(setId(res.data.data.id));
        dispatch(setRole(res.data.data.role));
        dispatch(setPhoto(res.data.data.photo));
        dispatch(setAddress(res.data.data.address));
        dispatch(setDateOfBirth(res.data.data.dateOfBirth));
        dispatch(setGender(res.data.data.gender));
        dispatch(setNationality(res.data.data.nationality));
        dispatch(setPhoneNumber(res.data.data.phoneNumber));
        dispatch(setfavoriteHotels(res.data.data.favoriteHotels));
      }
      setIsLoading(false);
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.style.setProperty("--color-hero", "#3B3B3B"); //ok

      document.documentElement.style.setProperty("--color-grey-2", "#fff");
      document.documentElement.style.setProperty("--color-grey-3", "#eee");
      document.documentElement.style.setProperty("--color-grey-4", "#ddd");
      document.documentElement.style.setProperty("--color-grey-5", "#ccc");
      document.documentElement.style.setProperty("--color-grey-6", "#bbb");

      document.documentElement.style.setProperty("--color-white-1", "#323232"); //ok
      document.documentElement.style.setProperty("--color-white-2", "#312f2f");
      document.documentElement.style.setProperty("--color-white-3", "#444");
      document.documentElement.style.setProperty("--color-white-4", "#aaa");

      document.documentElement.style.setProperty(
        "--gradient-horizontal-footer",
        "linear-gradient(to right, #225722, #1a441a)"
      );
      document.documentElement.style.setProperty(
        "--gradient-vertical-footer",
        "linear-gradient(to bottom, #225722, #1a441a)"
      );
    } else {
      document.documentElement.style.setProperty("--color-hero", "#fff");

      document.documentElement.style.setProperty("--color-grey-2", "#222");
      document.documentElement.style.setProperty("--color-grey-3", "#312f2f");
      document.documentElement.style.setProperty("--color-grey-4", "#444");
      document.documentElement.style.setProperty("--color-grey-5", "#aaa");
      document.documentElement.style.setProperty("--color-grey-6", "#cfcdcd");

      document.documentElement.style.setProperty("--color-white-1", "#fff");
      document.documentElement.style.setProperty("--color-white-2", "#eee");
      document.documentElement.style.setProperty("--color-white-3", "#ddd");
      document.documentElement.style.setProperty("--color-white-4", "#ccc");

      document.documentElement.style.setProperty(
        "--gradient-horizontal-footer",
        "linear-gradient(to right, #68c368, #b9e3b9)"
      );
      document.documentElement.style.setProperty(
        "--gradient-vertical-footer",
        "linear-gradient(to bottom, #68c368, #b9e3b9)"
      );
    }
  }, [isDarkMode]);

  return (
    <>
      {!isLoading ? (
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path={"/hotels/:hotelID"} element={<HotelDetails />} />
              <Route
                path={"/hotels/city/:cityID"}
                element={<HotelCityDetails />}
              />
              <Route path={"/favorites"} element={<FavoriteHotels />} />
              <Route
                path="/dashboard"
                element={email ? <Dashboard /> : <PageNotFound />}
              >
                <Route index element={<PersonalInformation />} />
                <Route
                  path="personal-information"
                  element={<PersonalInformation />}
                />
                <Route path="security" element={<Security />} />
                <Route path="reserved-rooms" element={<ReservedRooms />} />
                <Route path="wallet" element={<Wallet />} />
                <Route path="activity" element={<Activity />} />
                {role === "admin" && (
                  <>
                    <Route
                      path="checking-reviews"
                      element={<CheckingReviews />}
                    />
                    <Route
                      path="checking-reviews/:hotelName"
                      element={<HotelReviewCheck />}
                    />
                  </>
                )}
                {role === "hotelier" && (
                  <>
                    <Route path="my-hotel" element={<MyHotel />} />
                    <Route
                      path="my-hotel/:hotelID"
                      element={<HotelAddRoom />}
                    />
                  </>
                )}
              </Route>
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="became-hotelier" element={<BecameHotelier />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      ) : (
        <Loading />
      )}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        limit={10}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss={true}
        draggable={true}
        pauseOnHover={true}
        theme={"light"}
        transition:Slide
      />
    </>
  );
}

export default App;
