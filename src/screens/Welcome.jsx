import React from "react";
import Gallery from "../components/GalleryImage";
import {Container,Row,Col} from 'react-grid-system';
import ButtonContainer from "../components/ButtonContainer";
import Navbar from "../components/NavBar";
import TitleContainer from "../components/TitleContainer";
import { UserAuth} from "../context/AuthContext";
import HomeScreen from "./Home";
import NavbarLogin from "../components/NavBarLogin";
import SocialButtons from "../components/SocialButtons";
import CalendarComponent from "../components/Calendar";
import { UseWindowSize } from "../context/UseWidth";
import SocialHorizontal from "../components/SocialHorizontal";



function WelcomeScreen() {
    const {user} = UserAuth();
    const [width, height] = UseWindowSize()
    console.log("w: ",width," h: ",height)
    return (
        <div>
     
   
         <NavbarLogin />
         {width > 700 ?
            <Container>
            <Row>    
            <Col sm={12} xs={12} md={12} lg={12} xl={6} xxl={6} xxxl={6} style={{display:"flex",justifyContent:"start",marginTop:20,flexDirection:"column"}} >
            <Gallery  />
            {width > 1199 ?<SocialHorizontal /> :""}
            </Col>
            <Col sm={12} xs={12} md={12} lg={12} xl={6} xxl={6} xxxl={6} style={{marginBottom:10}}>
            
            <ButtonContainer />
            {width > 1199 ?<CalendarComponent /> :""}
            
            </Col>
            </Row>
            </Container>
            
            :
            <Row>
            <Col sm={12} xs={12} md={12} lg={12} xl={6} xxl={6} xxxl={6} style={{display:"flex",justifyContent:"center"}} >
            <Gallery />
            </Col>
              <Col sm={12} xs={12} md={12} lg={12} xl={6} xxl={6} xxxl={6} style={{marginBottom:10}}>
              <ButtonContainer />
              </Col>
              </Row>
            }
         
        
       

        
        </div>
    );
}

export default WelcomeScreen;

