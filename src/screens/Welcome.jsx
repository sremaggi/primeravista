import React from "react";
import Gallery from "../components/GalleryImage";
import {Container,Row,Col} from 'react-grid-system';
import ButtonContainer from "../components/ButtonContainer";
import Navbar from "../components/NavBar";
import TitleContainer from "../components/TitleContainer";
import { UserAuth } from "../context/AuthContext";
import HomeScreen from "./Home";
import NavbarLogin from "../components/NavBarLogin";

function WelcomeScreen() {
    const {user} = UserAuth();

    return (
        <div>
     
         <Container>
         <NavbarLogin />
         <Gallery />
         <ButtonContainer />
            </Container>   

        
        </div>
    );
}

export default WelcomeScreen;

