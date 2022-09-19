import React from "react";
import styled from "styled-components";
import {Container,Row,Col} from 'react-grid-system';
import NavbarLogin from "../components/NavBarLogin";
import {FaAirbnb } from "react-icons/fa";
import {BsInstagram } from "react-icons/bs";
import {GrFacebook } from "react-icons/gr";
import {FaWhatsappSquare } from "react-icons/fa";
import { FcCloseUpMode,FcLinux} from "react-icons/fc";

import SocialButtons from "../components/SocialButtons";
import SocialHorizontal from "../components/SocialHorizontal";


function Contact() {
    return (
        <div>
             <NavbarLogin />

    
       


        <Row>
            <Col sm={12} xs={12} md={12} lg={6} xl={6} xxl={6} xxxl={6} style={{marginTop:15,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}} >
        
                <Row style={{display:"flex",justifyContent:"center",alignItems:"center",alignContent:"center",backgroundColor:"#3C5DF099",width:"100%",padding:2,color:"white",flexDirection:"column",borderRadius:5}}>
                <div style={{display:"flex",marginTop:10,fontWeight:550,justifyContent:"center",padding:5,alignItems:"center",alignContent:"center",backgroundColor:"#3C65F099",width:"50%",borderRadius:2,color:"#F3FFF2"}}>
                <FcCloseUpMode size={20} style={{marginRight:5}}/>
                        Antonia
                  
                </div>

                <div style={{display:"flex",justifyContent:"center"}}>
                <img   style={{display:"flex",width:"100%",maxHeight:"260px", maxWidth:"200px",borderRadius:100 ,height:"100%",objectFit:"cover",marginTop:5}} src={require('../assets/img/Anto.jpeg')} />
                </div>

                <div style={{display:"flex",justifyContent:"center",borderRadius:2,backgroundColor:"#3C65F099",alignContent:"center",width:"70%",padding:4,color:"white",marginTop:3,fontSize:13,marginBottom:10,textJustify:"inter-word",textAlign:"justify"}}>
                Me gusta mucho la naturaleza y el arte. Me considero una chica responsable, atenta y creativa.  Tengo todo mi compromiso puesto en este proyecto, por lo que espero garantizar 
                su bienestar en Primera Vista. Yo feliz de ayudarles con sus dudas/consultas.
                </div>
                <a style={{display:"flex", width:"100%",textDecoration:"none",justifyContent:"center",marginBottom:10}} href="https://api.whatsapp.com/send?phone=56983585721&text=%5BPrimera%20Vista%5D%20Hola!%20Consulto%20por%20Hospedaje%20Primera%20Vista">
                <Row style={{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#3C65F099",width:"45%",padding:2,color:"white",margin:1,borderRadius:20,fontSize:12}}>


                <FaWhatsappSquare  size={30} color="#00FF2E" style={{display:"flex",margin:1}}/>
                WhatsApp


                </Row>
                </a>
                </Row>
       
            </Col  >
            <Col sm={12} xs={12} md={12} lg={6} xl={6} xxl={6} xxxl={6} style={{marginTop:15,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}} >
      
                <Row style={{display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center",backgroundColor:"#017B8190",width:"100%",padding:2,color:"white",flexDirection:"column",borderRadius:5,fontFamily:""}}>
                <div style={{display:"flex",marginTop:10,fontWeight:550,justifyContent:"center",padding:5,alignItems:"center",alignContent:"center",backgroundColor:"#0D5B5490",width:"50%",borderRadius:2,color:"#F3FFF2"}}>
                <FcLinux size={20} style={{marginRight:5}}/>
                        Sebastián
                </div>
           
                <div style={{display:"flex",justifyContent:"center"}}>
                <img   style={{display:"flex",width:"100%",maxHeight:"280px", maxWidth:"200px",borderRadius:100 ,height:"100%",objectFit:"cover",marginTop:5}} src={require('../assets/img/Seba.jpg')} />
                </div>

                <div style={{display:"flex",justifyContent:"center",borderRadius:2,backgroundColor:"#0D5B5490",alignContent:"center",width:"70%",padding:5,color:"white",marginTop:8,fontSize:13,marginBottom:10,textJustify:"inter-word",textAlign:"justify"}}>
                Me encanta la música y la tecnología, estoy muy contento de poder 
            apoyar en este lindo proyecto y quedo a su disposición para resolver 
            cualquier duda que tengas con respecto a Primera Vista. Contactame a mi WhatsApp y hablemos directamente.
                </div>
                <a style={{display:"flex", width:"100%",textDecoration:"none",justifyContent:"center",marginBottom:10}} href="https://api.whatsapp.com/send?phone=56986021478&text=%5BPrimera%20Vista%5D%20Hola!%20Consulto%20por%20Hospedaje%20Primera%20Vista">
                <Row style={{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#0D5B5490",width:"45%",padding:2,color:"white",margin:1,borderRadius:20,fontSize:12}}>


<FaWhatsappSquare  size={30} color="#00FF2E" style={{display:"flex",margin:2}}/>
WhatsApp


</Row>
</a>
                </Row>

            </Col  >
        </Row>


     


  
        <Row style={{marginTop:20,marginBottom:10,display:"flex",justifyContent:"center",backgroundColor:"#57b251",color:"white",padding:10}}>
            hospedajeprimeravista@gmail.com
        </Row>
        <SocialHorizontal />
        <Row style={{marginBottom:100}}>
        
        </Row>
       
   
        

        

       </div>
    );
}

export default Contact;

