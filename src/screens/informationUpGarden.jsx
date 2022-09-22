import React from "react";
import {Col, Container,Row} from 'react-grid-system';
import styled from "styled-components";
import InfoContainer from "../components/infoContainer";
import InfoDescription from "../components/infoDescription";
import Navbar from "../components/NavBar";
import NavbarLogin from "../components/NavBarLogin";
import TitleContainer from "../components/TitleContainer";
import { UserAuth } from "../context/AuthContext";



function InformationUpGarden() {
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
        <InfoDescription title="Silla playa" desc="--" qty="4"/>
        <InfoDescription title="Parrilla" desc="--" qty="1"/>
        <InfoDescription title="Sillón Exterior" desc="--" qty="1"/>
        <InfoDescription title="Mesa exterior" desc="--" qty="1"/>
       </Container>
       </div>
    );
}

export default InformationUpGarden;


