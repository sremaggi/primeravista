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



function InfornmationLiving() {
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
              src="https://firebasestorage.googleapis.com/v0/b/primeravista-50b01.appspot.com/o/assests%2FhomeImages%2Fliving%2Fl1.jpeg?alt=media&token=25e7a9a6-c467-4824-8c26-83026f37e99c"
              alt=""
            />
         
          </div>
          <div>
            <img
              height={350}
              style={{ borderRadius: 5,objectFit:"cover" }}
              src="https://firebasestorage.googleapis.com/v0/b/primeravista-50b01.appspot.com/o/assests%2FhomeImages%2Fliving%2Fl2.jpeg?alt=media&token=2ed284d1-ec60-4462-8f41-aad0a34224c1"
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
        <InfoDescription title="Set Herramientas" desc="--" qty="1"/>
        <InfoDescription title="Set Parrilla" desc="--" qty="1"/>
       <InfoDescription title="Calefactor eléctrico" desc="--" qty="1"/>
       <InfoDescription title="Juegos Playa" desc="--" qty="--"/>
  

  
       </Container>
       </div>
    );
}

export default InfornmationLiving;


