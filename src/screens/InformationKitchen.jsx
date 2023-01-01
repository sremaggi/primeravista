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



function InfornmationKitchen() {
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
              style={{ borderRadius: 5,objectFit:"fill"  }}
              src="https://firebasestorage.googleapis.com/v0/b/primeravista-50b01.appspot.com/o/assests%2FhomeImages%2Fkitchen%2Fcocina1.jpeg?alt=media&token=3a324f7e-3dc1-4274-b51e-72a1d885fd78"
              alt=""
            />
         
          </div>

        <div>
            <img
              height={350}
              style={{ borderRadius: 5 ,objectFit:"fill" }}
              src="https://firebasestorage.googleapis.com/v0/b/primeravista-50b01.appspot.com/o/assests%2FhomeImages%2Fkitchen%2Fcocina2.jpeg?alt=media&token=f76d6129-5b45-48d3-8369-b8cee7f80f7c"
              alt=""
            />
         
          </div>

        <div>
            <img
              height={350}
              style={{ borderRadius: 5 ,objectFit:"fill" }}
              src="https://firebasestorage.googleapis.com/v0/b/primeravista-50b01.appspot.com/o/assests%2FhomeImages%2Fkitchen%2Fcocina3.jpeg?alt=media&token=0be73fce-81da-4a12-9dd2-dd91db4fb167"
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
        <InfoDescription title="Horno" desc="--" qty="1"/>
        <InfoDescription title="Hervidor" desc="--" qty="1"/>
       <InfoDescription title="Microondas" desc="--" qty="1"/>
       <InfoDescription title="Minipimer" desc="--" qty="1"/>
       <InfoDescription title="Platos" desc="Set Completo" qty="6 c/u"/>
       <InfoDescription title="Tazas" desc="--" qty="6"/>
       <InfoDescription title="Servicios" desc="--" qty="6 c/u"/>
       <InfoDescription title="Set Cuchillos" desc="--" qty="1"/>
       <InfoDescription title="Set Ollas" desc="--" qty="2"/>
       <InfoDescription title="Set Cucharas de palo" desc="--" qty="1"/>
       <InfoDescription title="Cucharas de plástico" desc="--" qty="1"/>
       <InfoDescription title="Vasos" desc="200ml" qty="6"/>
       <InfoDescription title="Tabla de picar" desc="--" qty="2"/>
       <InfoDescription title="Exprimidor Limón" desc="--" qty="1"/>
       <InfoDescription title="Sartenes" desc="Set Completo" qty="4"/>
       <InfoDescription title="Wok" desc="--" qty="1"/>
       <InfoDescription title="Potes ensalada" desc="--" qty="2"/>
       <InfoDescription title="Rallador" desc="--" qty="1"/>
       <InfoDescription title="Pelador" desc="--" qty="1"/>
       <InfoDescription title="Aliños" desc="--" qty="--"/>

  
       </Container>
       </div>
    );
}

export default InfornmationKitchen;


