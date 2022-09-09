import React from "react";
import Gallery from "../components/GalleryImage";
import {Container,Row,Col} from 'react-grid-system';
import TitleContainer from "../components/TitleContainer";
import ButtonContainer from "../components/ButtonContainer";
import NavbarLogin from "../components/NavBarLogin";


function HomeScreen() {

    return (
   
        <Container style={{width:"100%"}}>
     
     <NavbarLogin title="Primera Vista" />
        <Gallery  />

        <ButtonContainer />
       </Container>

    );
}

export default HomeScreen;



