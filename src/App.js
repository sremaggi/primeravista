
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
import NotFound from "./screens/NotFound";
import Contact from "./screens/Contact";





function App() {
  const navigate = useNavigate();


  return (
      <AuthContextProvider>
       <Routes>
        <Route path="/" element={<WelcomeScreen/>} />
        <Route path="/home" element={<Protected><HomeScreen/></Protected>} />
        <Route path="/profile" element={<Protected><Profile/></Protected>} />
        <Route path="/bookings" element={<BookingsScreen/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/information" element={<Information/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/comments" element={<Coments/>} />
        <Route path="/comments/create" element={<Protected><ComentsCreate/></Protected>} />
        <Route path="/bookings/request" element={<Protected><Request /></Protected>} />
        <Route path="*" element={<NotFound/>} />
       </Routes>

      </AuthContextProvider>
  );
}

export default App;
