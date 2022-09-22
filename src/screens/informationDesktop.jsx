import React from "react";
import {Col, Container,Row} from 'react-grid-system';
import styled from "styled-components";
import InfoContainer from "../components/infoContainer";
import InfoDescription from "../components/infoDescription";
import Navbar from "../components/NavBar";
import NavbarLogin from "../components/NavBarLogin";
import TitleContainer from "../components/TitleContainer";
import { UserAuth } from "../context/AuthContext";



function InformationDesktop() {
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
        <InfoDescription title="Lapices" desc="--" qty="--"/>
        <InfoDescription title="Hojas" desc="--" qty="--"/>
       <InfoDescription title="Juegos de mesa" desc="--" qty="--"/>
       <InfoDescription title="Módem Wifi" desc="--" qty="--"/>
       <InfoDescription title="Libros" desc="--" qty="--"/>
  

  
       </Container>
       </div>
    );
}

export default InformationDesktop;


