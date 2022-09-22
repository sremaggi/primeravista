import React from "react";
import {Col, Container,Row} from 'react-grid-system';
import styled from "styled-components";
import InfoContainer from "../components/infoContainer";
import InfoDescription from "../components/infoDescription";
import Navbar from "../components/NavBar";
import NavbarLogin from "../components/NavBarLogin";
import TitleContainer from "../components/TitleContainer";
import { UserAuth } from "../context/AuthContext";



function InformationDinnerRoom() {
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
        <InfoDescription title="Copa vino" desc="--" qty="6"/>
        <InfoDescription title="Copa champagne" desc="--" qty="6"/>
       <InfoDescription title="Chop cervecero" desc="--" qty="6"/>
       <InfoDescription title="Vaso wiskero" desc="--" qty="6"/>
       <InfoDescription title="Radio" desc="Cable auxiliar" qty="--"/>
       <InfoDescription title="Posa vaso" desc="--" qty="6"/>
  

  
       </Container>
       </div>
    );
}

export default InformationDinnerRoom;


