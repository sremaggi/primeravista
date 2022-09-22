import React from "react";
import {Col, Container,Row} from 'react-grid-system';
import styled from "styled-components";
import InfoContainer from "../components/infoContainer";
import InfoDescription from "../components/infoDescription";
import Navbar from "../components/NavBar";
import NavbarLogin from "../components/NavBarLogin";
import TitleContainer from "../components/TitleContainer";
import { UserAuth } from "../context/AuthContext";



function InfornmationLiving() {
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
        <InfoDescription title="Set Herramientas" desc="--" qty="1"/>
        <InfoDescription title="Set Parrilla" desc="--" qty="1"/>
       <InfoDescription title="Calefactor eléctrico" desc="--" qty="1"/>
       <InfoDescription title="Juegos Playa" desc="--" qty="--"/>
  

  
       </Container>
       </div>
    );
}

export default InfornmationLiving;


