import React from "react";
import Gallery from "../components/GalleryImage";
import {Container,Row,Col} from 'react-grid-system';
import ButtonContainer from "../components/ButtonContainer";
import Navbar from "../components/NavBar";
import TitleContainer from "../components/TitleContainer";
import { UserAuth } from "../context/AuthContext";
import HomeScreen from "./Home";
import NavbarLogin from "../components/NavBarLogin";
import SocialButtons from "../components/SocialButtons";

function WelcomeScreen() {
    const {user} = UserAuth();

    return (
        <div>
     
   
         <NavbarLogin />
         <Row>
            <Col sm={12} xs={12} md={5.9} lg={5.9} xl={5.9} xxl={5.9} xxxl={5.9} >
            <Gallery />
            </Col>
            <Col sm={12} xs={12} md={5.9} lg={5.9} xl={5.9} xxl={5.9} xxxl={5.9} style={{marginBottom:10,alignContent:"center"}} >
            <ButtonContainer />
   
            </Col>
         </Row>
         
        
       

        
        </div>
    );
}

export default WelcomeScreen;

