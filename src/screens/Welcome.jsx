import React from "react";
import Gallery from "../components/GalleryImage";
import {Container,Row,Col} from 'react-grid-system';
import ButtonContainer from "../components/ButtonContainer";
import Navbar from "../components/NavBar";
import TitleContainer from "../components/TitleContainer";

function WelcomeScreen() {
    
    return (
        <div>
         <Container>
         <TitleContainer />
            </Container>   
            <Navbar />
        <Gallery />
       <Container >
        <ButtonContainer />
       </Container>
       </div>
    );
}

export default WelcomeScreen;

