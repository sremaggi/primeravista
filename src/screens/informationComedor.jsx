import React from "react";
import {Col, Container,Row} from 'react-grid-system';
import styled from "styled-components";
import InfoContainer from "../components/infoContainer";
import InfoDescription from "../components/infoDescription";
import Navbar from "../components/NavBar";
import NavbarLogin from "../components/NavBarLogin";
import TitleContainer from "../components/TitleContainer";
import { UserAuth } from "../context/AuthContext";
import { Carousel } from 'react-responsive-carousel'


function InformationDinnerRoom() {
    const {user} = UserAuth()
    return (
        <div>
  
  
  <Container style={{marginBottom:10}}>
  <Carousel
          showIndicators
          showThumbs={false}
          showStatus={false}
          interval="3000"
          transitionTime="50"
          infiniteLoop
        >

        <div>
            <img
              height={350}
              style={{ borderRadius: 5,objectFit:"cover" }}
              src="https://firebasestorage.googleapis.com/v0/b/primeravista-50b01.appspot.com/o/assests%2FhomeImages%2Fcomedor%2FWhatsApp%20Image%202022-11-20%20at%203.55.32%20PM.jpeg?alt=media&token=cebc4350-ffd9-48f0-80b6-bb84cb112a1c"
              alt=""
            />
         
          </div>
          <div>
            <img
              height={350}
              style={{ borderRadius: 5,objectFit:"cover" }}
              src="https://firebasestorage.googleapis.com/v0/b/primeravista-50b01.appspot.com/o/assests%2FhomeImages%2Fcomedor%2Fc2.jpeg?alt=media&token=4dbbb3f2-8ee6-452e-8bac-0ca8cb11716f"
              alt=""
            />
         
          </div>
          <div>
            <img
              height={350}
              style={{ borderRadius: 5,objectFit:"cover" }}
              src="https://firebasestorage.googleapis.com/v0/b/primeravista-50b01.appspot.com/o/assests%2FhomeImages%2Fcomedor%2Fc3.jpeg?alt=media&token=1da85a63-1949-484b-bc39-d77ec85629aa"
              alt=""
            />
         
          </div>

        </Carousel>
       <Row style={{display:"flex",marginTop:3,padding:5,fontSize:14, backgroundColor:"#454545",color:"white"}}>
        <Col style={{display:"flex",justifyContent:"center"}}>

        </Col>
        <Col style={{display:"flex",justifyContent:"center"}}>
        Descripción
        </Col>
        <Col style={{display:"flex",justifyContent:"center"}}>
        Cantidad
        </Col>
        </Row>
        <InfoDescription title="Copa vino" desc="--" qty="6"/>
        <InfoDescription title="Copa champagne" desc="--" qty="6"/>
       <InfoDescription title="Shop cervecero" desc="--" qty="6"/>
       <InfoDescription title="Vaso wiskero" desc="--" qty="6"/>
       <InfoDescription title="Radio" desc="Cable auxiliar" qty="--"/>
       <InfoDescription title="Posa vaso" desc="--" qty="6"/>
  

  
       </Container>
       </div>
    );
}

export default InformationDinnerRoom;


