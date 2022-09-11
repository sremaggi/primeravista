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
             <NavbarLogin />
        <Container>

       
        <Row style={{display:"flex",justifyContent:"center",fontWeight:"bold",backgroundColor:"#2F5E20",padding:3,color:"white",marginTop:20}}>
       Cocina
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

       <div style={{display:"flex",justifyContent:"center",marginTop:5,width:"100%"}}>
      
        <img style={{width:"50%",height:250}} src="https://firebasestorage.googleapis.com/v0/b/primeravista-50b01.appspot.com/o/assests%2FhomeImages%2FIMG-1606.jpg?alt=media&token=631ffb04-d56e-4e77-8f27-d59965a7c13e"></img>
      
     
        <img style={{width:"50%",height:250}} src="https://firebasestorage.googleapis.com/v0/b/primeravista-50b01.appspot.com/o/assests%2FhomeImages%2FIMG-1433.jpg?alt=media&token=acfffdd3-61b8-44da-93aa-1e62ab3e17ec"></img>
    

        
       </div>
       </Container>
       </div>
    );
}

export default InfornmationKitchen;


