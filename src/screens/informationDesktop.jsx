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


function InformationDesktop() {
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
              src="https://firebasestorage.googleapis.com/v0/b/primeravista-50b01.appspot.com/o/assests%2FhomeImages%2Fdesktop%2Fd1.jpeg?alt=media&token=06ab966f-e6fc-4687-b526-06883cbc26db"
              alt=""
            />
         
          </div>
          <div>
            <img
              height={350}
              style={{ borderRadius: 5,objectFit:"cover" }}
              src="https://firebasestorage.googleapis.com/v0/b/primeravista-50b01.appspot.com/o/assests%2FhomeImages%2Fdesktop%2Fd2.jpeg?alt=media&token=47be4168-a67b-4c83-b0be-19dad44e037b"
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
        <InfoDescription title="Lápices" desc="--" qty="--"/>
        <InfoDescription title="Hojas" desc="--" qty="--"/>
       <InfoDescription title="Juegos de mesa" desc="--" qty="--"/>
       <InfoDescription title="Módem Wifi" desc="--" qty="--"/>
       <InfoDescription title="Libros" desc="--" qty="--"/>
  

  
       </Container>
       </div>
    );
}

export default InformationDesktop;


