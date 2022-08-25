import React,{useContext} from "react";
import styled from "styled-components";
import {Container,Row,Col} from 'react-grid-system';
import TitleContainer from "../components/TitleContainer";
import { Context } from "../App";
import NavbarLogin from "../components/NavBarLogin";
import Navbar from "../components/NavBar";
import CalendarComponent from "../components/Calendar";




function Bookings() {
    const context = useContext(Context)
    return (
       <div>
             <Container >
             <TitleContainer />
</Container>

        {Object.keys(context.user) != 0 ? <NavbarLogin title="Disponibilidad" />:<Navbar />}
        <CalendarComponent />

       </div> 
  
    );
}

export default Bookings;


