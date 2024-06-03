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
import axios from "axios";
import { setCookie, getCookie } from "./helper/cookie";
import { useEffect } from "react";
import { getCurrentUser } from "./services/handleReqs";
import { useDispatch } from "react-redux";
import {
  setEmail,
  setName,
  setPhoto,
  setRole,
} from "./state management/userSlice";
import Dashboard from "./pages/Dashboard";

function App() {
  const dispatch = useDispatch();

  useEffect(function () {
    async function fetchData() {
      const res = await getCurrentUser();

      if (res.status === "success") {
        dispatch(setName(res.data.data.name));
        dispatch(setEmail(res.data.data.email));
        dispatch(setRole(res.data.data.role));
        dispatch(setPhoto(res.data.data.photo));
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
            <Route path={"/dashboard"} element={<Dashboard />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
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
