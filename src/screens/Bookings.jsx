import React,{useContext} from "react";
import styled from "styled-components";
import {Container,Row,Col} from 'react-grid-system';
import TitleContainer from "../components/TitleContainer";

import NavbarLogin from "../components/NavBarLogin";
import Navbar from "../components/NavBar";
import CalendarComponent from "../components/Calendar";
import { UserAuth } from "../context/AuthContext";




function Bookings() {
    const {user} = UserAuth()
    return (
       <div>
             <Container >
             <TitleContainer />
            </Container>

        {user?.displayName ? <NavbarLogin title="Disponibilidad" />:<Navbar />}
        <CalendarComponent />   
       </div> 
  
    );
}

export default Bookings;


