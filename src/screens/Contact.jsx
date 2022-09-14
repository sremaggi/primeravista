import React from "react";
import styled from "styled-components";
import {Container,Row,Col} from 'react-grid-system';
import NavbarLogin from "../components/NavBarLogin";
import {FaAirbnb } from "react-icons/fa";
import {BsInstagram } from "react-icons/bs";
import {GrFacebook } from "react-icons/gr";
import {FaWhatsappSquare } from "react-icons/fa";

import SocialButtons from "../components/SocialButtons";
import SocialHorizontal from "../components/SocialHorizontal";


function Contact() {
    return (
        <div>
             <NavbarLogin />

    
       


        <Row>
            <Col sm={12} xs={12} md={12} lg={6} xl={6} xxl={6} xxxl={6} style={{marginTop:15,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}} >
        
                <Row style={{display:"flex",justifyContent:"center",alignContent:"center",backgroundColor:"#144903",width:"100%",padding:2,color:"white",flexDirection:"column"}}>
                <div style={{display:"flex",justifyContent:"center",padding:5,backgroundColor:"#1B1B1B",borderRadius:10}}>
                        Antonia
                </div>

                <div style={{display:"flex",justifyContent:"center"}}>
                <img width={220} height={350}   style={{borderRadius:80,marginBottom:4,marginTop:10}} src={require('../assets/img/Anto.jpeg')} />
                </div>

                <div style={{display:"flex",justifyContent:"center",alignContent:"center",width:"70%",padding:2,color:"white",borderRadius:40,fontSize:13,marginBottom:10}}>
                Me gusta mucho la naturaleza y el arte. Me considero una chica responsable, atenta y creativa.  Tengo todo mi compromiso puesto en este proyecto, por lo que espero garantizar 
                su bienestar en Primera Vista. Yo feliz de ayudarles con sus dudas/consultas.
                </div>
        
                </Row>
                <a style={{display:"flex", width:"100%",textDecoration:"none",justifyContent:"center"}} href="https://api.whatsapp.com/send?phone=56983585721&text=%5BPrimera%20Vista%5D%20Hola!%20Consulto%20por%20Hospedaje%20Primera%20Vista">
                <Row style={{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#144903",width:"45%",padding:2,color:"white",margin:1,borderRadius:20,fontSize:12}}>


                <FaWhatsappSquare  size={30} color="#00FF2E" style={{display:"flex",margin:1}}/>
                WhatsApp


                </Row>
                </a>
            </Col  >
            <Col sm={12} xs={12} md={12} lg={6} xl={6} xxl={6} xxxl={6} style={{marginTop:15,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}} >
      
                <Row style={{display:"flex",justifyContent:"center",alignContent:"center",backgroundColor:"#144903",width:"100%",padding:2,color:"white",flexDirection:"column"}}>
                <div style={{display:"flex",justifyContent:"center",padding:5,backgroundColor:"#1B1B1B",borderRadius:10}}>
                        Sebastián
                </div>
                <div style={{display:"flex",justifyContent:"center"}}>
                <img width={220} height={350}  style={{borderRadius:80,marginBottom:4,marginTop:10}} src={require('../assets/img/Seba.jpg')} />
                </div>

                <div style={{display:"flex",justifyContent:"center",alignContent:"center",width:"70%",padding:2,color:"white",borderRadius:40,fontSize:13,marginBottom:10}}>
                Me encanta la música y la tecnología, estoy muy contento de poder 
            apoyar en este lindo proyecto y quedo a su disposición para resolver 
            cualquier duda que tengas con respecto a Primera Vista. Contactame a mi WhatsApp y hablemos directamente.
                </div>
        
                </Row>
                <a style={{display:"flex", width:"100%",textDecoration:"none",justifyContent:"center"}} href="https://api.whatsapp.com/send?phone=56986021478&text=%5BPrimera%20Vista%5D%20Hola!%20Consulto%20por%20Hospedaje%20Primera%20Vista">
                <Row style={{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#144903",width:"45%",padding:2,color:"white",margin:1,borderRadius:20,fontSize:12}}>


<FaWhatsappSquare  size={30} color="#00FF2E" style={{display:"flex",margin:2}}/>
WhatsApp


</Row>
</a>
            </Col  >
        </Row>


     


  
        <Row style={{marginTop:5,marginBottom:10,display:"flex",justifyContent:"center",backgroundColor:"#003F0C",color:"white",padding:10}}>
            hospedajeprimeravista@gmail.com
        </Row>
        <SocialHorizontal />
        <Row style={{marginBottom:100}}>
        
        </Row>
       
   
        

        

       </div>
    );
}

export default Contact;

