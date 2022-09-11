import React,{useContext, useEffect} from "react";
import styled from "styled-components";
import {Container,Row,Col} from 'react-grid-system';
import TitleContainer from "../components/TitleContainer";

import NavbarLogin from "../components/NavBarLogin";
import Navbar from "../components/NavBar";
import CalendarComponent from "../components/Calendar";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";




function Bookings() {
    const {user} = UserAuth()
    const {navigate} = useNavigate()

    
    return (
            <div>
                 <NavbarLogin />
             <Container >

        <CalendarComponent />  
        </Container> 
        </div>
  
    );
}

export default Bookings;


