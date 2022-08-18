
import jwtDecode from "jwt-decode";
import React, { useEffect,useState,createContext } from "react";
import { Navbar } from "react-bootstrap";
import {
  BrowserRouter,
  Routes,
  Route,
  Router,
} from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import HomeScreen from "./screens/Home";
import Signin from "./screens/Signin";
import Signup from "./screens/Signup";
import WelcomeScreen from "./screens/Welcome";
import BookingsScreen from "./screens/Bookings";

const {REACT_APP_CLIENT_ID} = process.env;
export const Context = React.createContext({});

function App() {


  const [user,setUser] = useState({})

  function handleCallBackResponse(response){
    var userObject = jwtDecode(response.credential)
    console.log('USER LOG',userObject)
    setUser(userObject)
    document.getElementById("signInDiv").hidden = true;
  }

  useEffect(()=>{
    /* global google*/ 
   google.accounts.id.initialize({
    client_id:REACT_APP_CLIENT_ID,
    callback: handleCallBackResponse,
   })
   google.accounts.id.renderButton(
    document.getElementById("signInDiv"),
    {theme:"outline",size:"large"}
   )
  },[user])
  return (
       <main>
       {Object.keys(user) != 0 && 
       <Context.Provider  value={{
        user,
        setUser
      }}>
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<HomeScreen user={user}/>}></Route>
       </Routes>
       </BrowserRouter>
       </Context.Provider>
       }
       {Object.keys(user) == 0 &&
           <BrowserRouter>
           <Routes>
            <Route path="/" element={<WelcomeScreen/>}></Route>
            <Route path="/signin" element={<Signin/>}></Route>
            <Route path="/bookings" element={<BookingsScreen />}></Route>
           </Routes>
           </BrowserRouter>
       }
       {Object.keys(user) == 0 && <div id="signInDiv" style={{display:"flex",justifyContent:"center",marginTop:5}}></div> }
       </main>


     
       


  );
}

export default App;
