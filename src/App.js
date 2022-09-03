
import jwtDecode from "jwt-decode";
import React, { useEffect,useState,useContext } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";
import HomeScreen from "./screens/Home";
import Signin from "./screens/Signin";
import WelcomeScreen from "./screens/Welcome";
import BookingsScreen from "./screens/Bookings";
import Profile from "./screens/Profile";
import Request from "./screens/Request";
import { AuthContextProvider} from "./context/AuthContext";
import Protected from "./components/Protected";
import Signup from "./screens/Signup";
import Coments from "./screens/Coments";
import ComentsCreate from "./screens/CreateComments";
import Information from "./screens/Information";





function App() {
  const navigate = useNavigate();
  useEffect(() => {
    if (performance.navigation.type === 1) {
      navigate("/")
    } else {
      console.log("This page is not reloaded");
    }
  });
  return (
      <AuthContextProvider>
       <Routes>
        <Route path="/" element={<WelcomeScreen/>} />
        <Route path="/home" element={<Protected><HomeScreen/></Protected>} />
        <Route path="/profile" element={<Protected><Profile/></Protected>} />
        <Route path="/bookings" element={<BookingsScreen/>} />
        <Route path="/information" element={<Information/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/comments" element={<Coments/>} />
        <Route path="/comments/create" element={<ComentsCreate/>} />
        <Route path="/bookings/request" element={<Request />} />
        <Route path="*" element={<Protected><WelcomeScreen/></Protected>} />
       </Routes>

      </AuthContextProvider>
  );
}

export default App;
