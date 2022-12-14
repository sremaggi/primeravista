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


function InfornmationBedRoom2() {
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
              src="https://firebasestorage.googleapis.com/v0/b/primeravista-50b01.appspot.com/o/assests%2FhomeImages%2Fbedroom2%2Fp1.jpeg?alt=media&token=c0ffccae-cb59-4a01-a2f3-b2101b91c29b"
              alt=""
            />
         
          </div>
          <div>
            <img
              height={350}
              style={{ borderRadius: 5,objectFit:"cover" }}
              src="https://firebasestorage.googleapis.com/v0/b/primeravista-50b01.appspot.com/o/assests%2FhomeImages%2Fbedroom2%2Fp3.jpeg?alt=media&token=d228fe87-ae71-4f61-b027-682e8a052758"
              alt=""
            />
         
          </div>

        </Carousel>

       <Row style={{display:"flex",justifyContent:"center",marginTop:3,padding:5,fontSize:14, backgroundColor:"#454545",color:"white"}}>
        <Col style={{display:"flex",justifyContent:"center"}}>

        </Col>
        <Col style={{display:"flex",justifyContent:"center"}}>
        Descripción
        </Col>
        <Col style={{display:"flex",justifyContent:"center"}}>
        Cantidad
        </Col>

       </Row>
       <InfoDescription title="Cama" desc="Plaza 1/2" qty="3"  />
       <InfoDescription title="Futón" desc="1 Plaza" qty="1"  />
       <InfoDescription title="Almohada" desc="--" qty="4"  />
       <InfoDescription title="Cojín" desc="Con cobertor" qty="2"  />
       <InfoDescription title="Sábanas" desc="100% algodón" qty="4"  />
       <InfoDescription title="Frazada" desc="--" qty="4"  />
       <InfoDescription title="Plumón" desc="--" qty="4"  />
       <InfoDescription title="Alargador" desc="--" qty="1"/>

       </Container>
       </div>
    );
}

export default InfornmationBedRoom2;


