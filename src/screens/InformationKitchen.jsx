import React from "react";
import {Col, Container,Row} from 'react-grid-system';
import styled from "styled-components";
import InfoContainer from "../components/infoContainer";
import InfoDescription from "../components/infoDescription";
import Navbar from "../components/NavBar";
import NavbarLogin from "../components/NavBarLogin";
import TitleContainer from "../components/TitleContainer";
import { UserAuth } from "../context/AuthContext";



function InfornmationKitchen() {
    const {user} = UserAuth()
    return (
        <div>
  
  
  <Container style={{marginBottom:10}}>
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


