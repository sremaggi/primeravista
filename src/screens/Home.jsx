import React, { useLayoutEffect, useState } from "react";
import Gallery from "../components/GalleryImage";
import {Container,Row,Col} from 'react-grid-system';
import TitleContainer from "../components/TitleContainer";
import ButtonContainer from "../components/ButtonContainer";
import NavbarLogin from "../components/NavBarLogin";
import SocialButtons from "../components/SocialButtons";
import CalendarComponent from "../components/Calendar";
import { UseWindowSize } from "../context/UseWidth";
import SocialHorizontal from "../components/SocialHorizontal";
import ResponsiveAppBar from "../components/NavBar";





function HomeScreen() {
    const [width, height] = UseWindowSize()
    console.log("w: ",width," h: ",height)
    return (
        <div>

        <div style={{width:"100%"}}>

        <NavbarLogin/>
        </div>
 

   

            {width > 700 ?
            <Container>
            <Row>    
            <Col sm={12} xs={12} md={12} lg={12} xl={6} xxl={6} xxxl={6} style={{display:"flex",justifyContent:"start",marginTop:20,flexDirection:"column"}} >
            <Gallery  />
            {width > 1199 ?<SocialHorizontal /> :""}
            </Col>
            <Col sm={12} xs={6} md={6} lg={6} xl={6} xxl={6} xxxl={6} style={{marginBottom:10,flexDirection:"column"}}>
            <ButtonContainer />
            {width > 1199 ?<CalendarComponent /> :""}
            
            </Col>
            </Row>
            </Container>
            
            :
            <Row>
            <Col sm={12} xs={12} md={12} lg={5.7} xl={5.7} xxl={5.7} xxxl={5.7} style={{display:"flex",justifyContent:"center"}} >
            <Gallery />
            </Col>
              <Col sm={12} xs={12} md={12} lg={6} xl={6} xxl={6} xxxl={6} style={{marginBottom:10}}>
              <ButtonContainer />
              </Col>
              </Row>
            }

  
          
         
        
        

       </div>
    );
}

export default HomeScreen;



