import React from "react";
import {Col, Container,Row} from 'react-grid-system';
import styled from "styled-components";
import InfoContainer from "../components/infoContainer";
import InfoDescription from "../components/infoDescription";
import Navbar from "../components/NavBar";
import NavbarLogin from "../components/NavBarLogin";
import TitleContainer from "../components/TitleContainer";
import { UserAuth } from "../context/AuthContext";



function InfornmationBedRoom() {
    const {user} = UserAuth()
    return (
        <div>
                <NavbarLogin />
        <Container>

    
        <Row style={{display:"flex",justifyContent:"center",fontWeight:"bold",backgroundColor:"#2F5E20",padding:3,color:"white",marginTop:20}}>
        Habitación Principal
       </Row>
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
       <InfoDescription title="Cama" desc="Super King" qty="1"  />
       <InfoDescription title="Almohada" desc="--" qty="4"  />
       <InfoDescription title="Plumón" desc="--" qty="1"  />
       <InfoDescription title="Velador" desc="--" qty="2"  />
       <InfoDescription title="Lámpara" desc="Lámpara de noche" qty="2"  />
       <InfoDescription title="Calefactor Eléctrico" desc="--" qty="1"/>
       <InfoDescription title="TV" desc="Conexión HDMI" qty="1"/>
       <InfoDescription title="Chromecast" desc="Versión 3 " qty="1"/>
       <InfoDescription title="Repelente" desc="Enchufe eléctrico" qty="1"/>
       <InfoDescription title="Alargador" desc="--" qty="1"/>
       <Row style={{display:"flex",justifyContent:"center",margin:10,padding:10}}>
        <img style={{width:"80%",height:300}} src="https://firebasestorage.googleapis.com/v0/b/primeravista-50b01.appspot.com/o/assests%2FhomeImages%2FIMG-1621.jpg?alt=media&token=1e6efb0f-7e91-41d5-ad26-2c64f51fbd68"></img>
       </Row>
       </Container>
       </div>
    );
}

export default InfornmationBedRoom;


