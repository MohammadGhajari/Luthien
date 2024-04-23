import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Logo from "./components/Logo";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./components/AppLayout";
import Home from "./pages/Home";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/* <Route element={<AppLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="searchBooks" element={<SearchBooks/>}/>
            <Route path="myBooks" element={<MyBooks/>}/>
            <Route path="settings" element={<Settings/>}>
              <Route index element={<PersonInformation/>}/>
              <Route path="personal-information" element={<PersonInformation/>}/>
              <Route path="security" element={<Security/>}/>
              <Route path="ask-question" element={<AskQuestion/>}/>
              <Route path="about" element={<AboutUs/>}/>
            </Route>
            <Route path={'/bookSearch/book/:bookID'} element={<BookDetails/>}/>
          </Route> */}
                    <Route element={<AppLayout />}>
                        <Route index element={<Home />} />
                    </Route>
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
            <Toaster
                position={"top-right"}
                gutter={12}
                containerStyle={{ margin: "8px" }}
                toastOptions={{
                    success: {
                        duration: 2000,
                    },
                    error: {
                        duration: 2000,
                    },
                    style: {
                        fontSize: "16px",
                        maxWidth: "500px",
                        padding: "12px 24px",
                        backgroundColor: "$--color-primary",
                        color: "var(--color-grey-4)",
                    },
                }}
            />
            {/* <Logo/> */}
        </>
    );
}

export default App;
