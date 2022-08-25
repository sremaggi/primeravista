
import jwtDecode from "jwt-decode";
import React, { useEffect,useState,useContext } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomeScreen from "./screens/Home";
import Signin from "./screens/Signin";
import WelcomeScreen from "./screens/Welcome";
import BookingsScreen from "./screens/Bookings";
import Profile from "./screens/Profile";
import Request from "./screens/Request";


export const Context = React.createContext({});


function App() {


  const [user,setUser] = useState({})

  return (
       <main>
        <Context.Provider  value={{
        user,
        setUser
      }}>
       {
       <Routes>
        <Route path="/" element={<WelcomeScreen/>}></Route>
        <Route path="/Signin" element={<Signin/>}></Route>
        <Route path="/Profile" element={<Profile/>}></Route>
        <Route path="/Bookings" element={<BookingsScreen />}></Route>
        <Route path="/Bookings/Request" element={<Request />}></Route>
       </Routes>
      }
      </Context.Provider>
       </main>


     
       


  );
}

export default App;
