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
import { useEffect } from "react";
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
} from "./state management/userSlice";
import Dashboard from "./pages/Dashboard";
import FavoriteHotels from "./pages/FavoriteHotels";
import PersonalInformation from "./pages/PersonalInformation";
import Security from "./pages/Security";
import Activity from "./pages/Activity";
import BecameHotelier from "./pages/BecameHotelier";

function App() {
  const { email } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(function () {
    async function fetchData() {
      const res = await getCurrentUser();

      if (res.status === "success") {
        dispatch(setName(res.data.data.name));
        dispatch(setEmail(res.data.data.email));
        dispatch(setRole(res.data.data.role));
        dispatch(setPhoto(res.data.data.photo));
        dispatch(setAddress(res.data.data.address));
        dispatch(setDateOfBirth(res.data.data.dateOfBirth));
        dispatch(setGender(res.data.data.gender));
        dispatch(setNationality(res.data.data.nationality));
        dispatch(setPhoneNumber(res.data.data.phoneNumber));
        dispatch(setfavoriteHotels(res.data.data.favoriteHotels));
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Home />} />
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
              <Route path="activity" element={<Activity />} />
            </Route>
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="became-hotelier" element={<BecameHotelier />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
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
