import React, { useEffect, useState, useContext } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import HomeScreen from "./screens/Home";
import Signin from "./screens/Signin";
import WelcomeScreen from "./screens/Welcome";
import BookingsScreen from "./screens/Bookings";
import Profile from "./screens/Profile";
import Request from "./screens/Request";
import { AuthContextProvider } from "./context/AuthContext";
import Protected from "./components/Protected";
import Signup from "./screens/Signup";
import Coments from "./screens/Coments";
import ComentsCreate from "./screens/CreateComments";
import Information from "./screens/Information";
import NotFound from "./screens/NotFound";
import Contact from "./screens/Contact";
import Admin from "./screens/Admin";
import MyRequest from "./screens/MyRequest";
import InfornmationBedRoom from "./screens/InformationBedRoom";
import AdminRequest from "./screens/AdminRequest";

function App() {
  const navigate = useNavigate();
  const urlParams = new URLSearchParams(window.location.search);
  const sourceParam = urlParams.get("source");

  if (sourceParam === "instagram") {
    console.log("INGRESE DESDE INSTAGRAM!!!!!");
    window.open("https://primeravistade.cl/", "_blank");
  }

  useEffect(() => {
    // scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route
          path="/home"
          element={
            <Protected>
              <HomeScreen />
            </Protected>
          }
        />
        <Route
          path="/profile"
          element={
            <Protected>
              <Profile />
            </Protected>
          }
        />
        <Route
          path="/myRequest"
          element={
            <Protected>
              <MyRequest />
            </Protected>
          }
        />
        <Route
          path="/admin/requests"
          element={
            <Protected>
              <AdminRequest />
            </Protected>
          }
        />
        <Route
          path="/admin"
          element={
            <Protected>
              <Admin />
            </Protected>
          }
        />
        <Route path="/bookings" element={<BookingsScreen />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/information" element={<Information />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/comments" element={<Coments />} />
        <Route
          path="/comments/create"
          element={
            <Protected>
              <ComentsCreate />
            </Protected>
          }
        />
        <Route
          path="/bookings/request"
          element={
            <Protected>
              <Request />
            </Protected>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
