
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


export const Context = React.createContext({});


function App() {


  const [user,setUser] = useState({})

  return (
       <main>
        <BrowserRouter>
     
        <Context.Provider  value={{
        user,
        setUser
      }}>
       {Object.keys(user) != 0 ? 

       <Routes>
        <Route path="/" element={<WelcomeScreen/>}></Route>
       <Route path="/signin" element={<HomeScreen/>}></Route>
       <Route path="/profile" element={<Profile/>}></Route>
       </Routes>

       :

       <Routes>
        <Route path="/" element={<WelcomeScreen/>}></Route>
        <Route path="/signin" element={<Signin/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/bookings" element={<BookingsScreen />}></Route>
       </Routes>
      }
      </Context.Provider>
      </BrowserRouter>
       </main>


     
       


  );
}

export default App;
