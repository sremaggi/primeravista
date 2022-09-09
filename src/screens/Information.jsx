import React from "react";
import {Container,Row} from 'react-grid-system';
import styled from "styled-components";
import InfoContainer from "../components/infoContainer";
import Navbar from "../components/NavBar";
import NavbarLogin from "../components/NavBarLogin";
import TitleContainer from "../components/TitleContainer";
import { UserAuth } from "../context/AuthContext";



function Information() {
    const {user} = UserAuth()
    return (
        <Container>

        <NavbarLogin />
        <InfoContainer />
       </Container>
    );
}

export default Information;


