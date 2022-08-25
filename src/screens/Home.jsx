import React from "react";
import Gallery from "../components/GalleryImage";
import {Container,Row,Col} from 'react-grid-system';
import TitleContainer from "../components/TitleContainer";
import ButtonContainer from "../components/ButtonContainer";
import NavbarLogin from "../components/NavBarLogin";


function HomeScreen() {

    return (
        <div>
        <Container>
        <TitleContainer />
        </Container>        

        <NavbarLogin title="Página de Inicio" />
        <Gallery />
        <Container >
        <ButtonContainer />
       </Container>
       </div>
    );
}

export default HomeScreen;



