import React from "react";
import styled from "styled-components";
import {Container,Row,Col} from 'react-grid-system';
import NavbarLogin from "../components/NavBarLogin";
import {FaAirbnb } from "react-icons/fa";
import {BsInstagram } from "react-icons/bs";
import {GrFacebook } from "react-icons/gr";
import {FaWhatsappSquare } from "react-icons/fa";

import SocialButtons from "../components/SocialButtons";


function Contact() {
    return (
        <div>
             <NavbarLogin />
       <Container style={{width:"100%",backgroundColor:"#E9EEEA",borderRadius:10}}>
       
        <Container>
        <Row style={{marginTop:5,display:"flex",justifyContent:"center",backgroundColor:"#0D5067",color:"white",padding:10,marginTop:10}}>
            Contactanos! Te responderemos a la brevedad.
        </Row>
        <Row style={{marginTop:10,display:"flex",justifyContent:"center"}}>
            <a style={{display:"flex", width:"50%",textDecoration:"none"}} href="https://api.whatsapp.com/send?phone=56986021478&text=%5BPrimera%20Vista%5D%20Hola!%20Consulto%20por%20Hospedaje%20Primera%20Vista">
            <Col style={{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#445647",color:"white",padding:5,borderRadius:10,margin:2}}>

   
            Antonia
           
        

            </Col>
            </a>
        </Row>
    
            <Row style={{backgroundColor:"#6F8A77",marginTop:5,borderRadius:10,display:"flex",alignItems:"center",flexDirection:"column",fontSize:10}}>
            
  
            <img width={150} height={200}  style={{borderRadius:100,marginBottom:4}} src={require('../assets/img/Anto.jpeg')} />
            <div style={{padding:4,color:"white",borderRadius:10}}>
            Me gusta mucho la naturaleza y el arte. Me considero una chica responsable, atenta y creativa.  Tengo todo mi compromiso puesto en este proyecto, por lo que espero garantizar su bienestar en Primera Vista. Yo feliz de ayudarles con sus dudas/consultas.
            </div>
            <a style={{display:"flex", width:"50%",textDecoration:"none",justifyContent:"center"}} href="https://api.whatsapp.com/send?phone=56983585721&text=%5BPrimera%20Vista%5D%20Hola!%20Consulto%20por%20Hospedaje%20Primera%20Vista">
            <div style={{ backgroundColor:"#6F8A77",padding:4,color:"white",borderRadius:10,color:"#00FF2E  ",display:"flex",alignItems:"center"}}>

            <FaWhatsappSquare  size={40} color="#00FF2E" style={{display:"flex",margin:2}}/>
            WhatsApp
           
            </div>
            </a>
            </Row>
            <Row style={{marginTop:10,display:"flex",justifyContent:"center"}}>
            <a style={{display:"flex", width:"50%",textDecoration:"none"}} href="https://api.whatsapp.com/send?phone=56986021478&text=%5BPrimera%20Vista%5D%20Hola!%20Consulto%20por%20Hospedaje%20Primera%20Vista">
            <Col style={{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#445647",color:"white",padding:5,borderRadius:10,margin:2}}>

   
            Sebastián
           
        

            </Col>
            </a>
        </Row>
            <Row style={{backgroundColor:"#6F8A77",marginTop:5,borderRadius:10,display:"flex",alignItems:"center",flexDirection:"column",fontSize:10}}>
            <img width={150} height={200}   style={{borderRadius:100,marginBottom:4}}  src={require('../assets/img/Seba.jpg')}  />
            <div style={{padding:4,color:"white",borderRadius:10}}>
            Me encanta la música y la tecnología, estoy muy contento de poder 
            apoyar en este lindo proyecto y quedo a su disposición para resolver 
            cualquier duda que tengas con respecto a Primera Vista. Contactame a mi WhatsApp y hablemos directamente.
            </div>
            <a style={{display:"flex", width:"50%",textDecoration:"none",justifyContent:"center"}} href="https://api.whatsapp.com/send?phone=56986021478&text=%5BPrimera%20Vista%5D%20Hola!%20Consulto%20por%20Hospedaje%20Primera%20Vista">
            <div style={{ padding:4,borderRadius:10,color:"#00FF2E",display:"flex",alignItems:"center",justifyContent:"center"}}>

            <FaWhatsappSquare  size={40} color="#00FF2E " style={{display:"flex",margin:2,alignItems:"end"}}/>
            WhatsApp
           
            </div>
            </a>
            </Row>
     


        <Row style={{marginBottom:30,marginTop:20}}>
        <SocialButtons size="25" sizeFont={15} />
        </Row>
        <Row style={{marginTop:5,marginBottom:10,display:"flex",justifyContent:"center",backgroundColor:"#003F0C",color:"white",padding:10}}>
            hospedajeprimeravista@gmail.com
        </Row>

        </Container>
        

        
       </Container>
       </div>
    );
}

export default Contact;

