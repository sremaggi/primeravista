
import jwtDecode from "jwt-decode";
import React, { useEffect,useState,useContext } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
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


export const Context = React.createContext({});


function App() {

  return (
      <AuthContextProvider>
       <Routes>
        <Route path="/" element={<WelcomeScreen/>} />
        <Route path="/home" element={<Protected><HomeScreen/></Protected>} />
        <Route path="/profile" element={<Protected><Profile/></Protected>} />
        <Route path="/bookings" element={<BookingsScreen/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/bookings/request" element={<Request />} />
        <Route path="*" element={<Protected><HomeScreen/></Protected>} />
       </Routes>

      </AuthContextProvider>
  );
}

export default App;
