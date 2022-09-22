import React, { useEffect } from "react";
import {Container,Row} from 'react-grid-system';
import styled from "styled-components";
import InfoContainer from "../components/infoContainer";
import Navbar from "../components/NavBar";
import NavbarLogin from "../components/NavBarLogin";
import TitleContainer from "../components/TitleContainer";
import { UserAuth } from "../context/AuthContext";



function Information() {
    const {user} = UserAuth()
    useEffect(() => {
        //scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    return (
        <div>
             <NavbarLogin />
        <Container>

       
        <InfoContainer />
       </Container>
       </div>
    );
}

export default Information;


