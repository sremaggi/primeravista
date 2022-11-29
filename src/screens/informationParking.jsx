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



function InformationParking() {
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
              src="https://firebasestorage.googleapis.com/v0/b/primeravista-50b01.appspot.com/o/assests%2FhomeImages%2Fpatiolateral%2Fe1.jpeg?alt=media&token=fd5bb9eb-badd-455e-bc76-a34d69a73d58"
              alt=""
            />
         
          </div>

        </Carousel>
       <Row style={{display:"flex",marginTop:3,padding:5,fontSize:14, backgroundColor:"#454545",color:"white"}}>
 
        <Col style={{display:"flex",justifyContent:"center"}}>
        Cantidad 1 auto
        </Col>

        </Row>



  
  
       </Container>
       </div>
    );
}

export default InformationParking;


