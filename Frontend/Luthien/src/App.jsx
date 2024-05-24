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
// import "react-awesome-slider/dist/styles.css";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<AppLayout />}>
                        <Route index element={<Home />} />
                        <Route
                            path={"/hotels/:hotelID"}
                            element={<HotelDetails />}
                        />
                        <Route
                            path={"/hotels/city/:cityID"}
                            element={<HotelCityDetails />}
                        />
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
