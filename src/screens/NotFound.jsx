import React from "react";
import Gallery from "../components/GalleryImage";
import {Container,Row,Col} from 'react-grid-system';
import TitleContainer from "../components/TitleContainer";
import ButtonContainer from "../components/ButtonContainer";
import NavbarLogin from "../components/NavBarLogin";


function NotFound() {

    window.location.replace('https://primeravistade.cl');

    
    return (
   
        <Container style={{width:"100%"}}>
            <Row>
                Redirect...
            </Row>
       </Container>

    );
}

export default NotFound;



