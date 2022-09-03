import React from "react";
import Gallery from "../components/GalleryImage";
import {Container,Row,Col} from 'react-grid-system';
import ButtonContainer from "../components/ButtonContainer";
import Navbar from "../components/NavBar";
import TitleContainer from "../components/TitleContainer";
import { UserAuth } from "../context/AuthContext";
import HomeScreen from "./Home";

function WelcomeScreen() {
    const {user} = UserAuth();

    return (
        <div>
        {user?.displayName  ? <HomeScreen></HomeScreen> :
          <div>  
         <Container>
         <TitleContainer />
            </Container>   
            <Navbar />
        <Gallery />

     
        <ButtonContainer />

        </div>
        }
        </div>
    );
}

export default WelcomeScreen;

