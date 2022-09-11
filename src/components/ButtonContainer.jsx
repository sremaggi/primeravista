import React from "react";
import {Container,Row,Col} from 'react-grid-system';
import styled from "styled-components";

import { FcHome,FcCalendar, FcComments, FcMindMap, FcSms, FcLandscape, FcCellPhone } from "react-icons/fc";
import { FaPhoneSquareAlt } from "react-icons/fa";

import { Link } from "react-router-dom";



function ButtonContainer() {

    return (
      <Container  style={{backgroundColor:"#144903",marginTop:4}}>
        <Row style={{alignContent:"center",display:"flex",justifyContent:"center"}}>
        <Col style={{backgroundColor:'#007C15',padding:10,marginTop:2,marginBottom:1,marginLeft:2,marginRight:1,alignContent:"center",display:"flex",justifyContent:"center"}} >
        <Link to={"/information"} style={{textDecoration:"none"}} >
              <Row style={{display:"flex",justifyContent:"center"}}>
              <FcHome style={{margin:5,color:"white"}} size={30}/>
              </Row> 
              <Row style={{justifyContent:"center",color:"white" ,fontSize:15}}>
              Información General
              </Row>   
              </Link>
        </Col>
        <Col style={{backgroundColor:'#007C15',padding:10,marginTop:2,marginBottom:1,marginLeft:1,marginRight:2,alignContent:"center",display:"flex",justifyContent:"center"}}>
            <Link to={"/contact"}  style={{textDecoration:"none"}}>
              <Row style={{display:"flex",justifyContent:"center",color:"white"}}>
              <FaPhoneSquareAlt style={{margin:5,color:"white"}} size={30}/>
              </Row> 
              <Row style={{justifyContent:"center",color:"white",fontSize:15}}>
              Contacto
              </Row>   
 
              </Link>
            </Col>

            </Row>
        
            <Row style={{alignContent:"center"}} >
        <Col style={{backgroundColor:'#007C15',padding:10,marginTop:1,marginBottom:2,marginLeft:2,marginRight:1}} >
        <Link to={"/comments"}   style={{textDecoration:"none"}}>
              <Row style={{display:"flex",justifyContent:"center"}}>
              <FcSms style={{margin:5,color:"white"}} size={30}/>
              </Row> 
              <Row style={{justifyContent:"center",color:"white",fontSize:15}}>
              Experiencias
              </Row>   
              </Link>
        </Col>
        <Col style={{backgroundColor:'#007C15',padding:10,marginTop:1,marginBottom:2,marginLeft:1,marginRight:2}}>
            <Link to={"/bookings"}  style={{textDecoration:"none"}}>
              <Row style={{display:"flex",justifyContent:"center",color:"white"}}>
              <FcCalendar style={{margin:5}} size={30}/>
              </Row> 
              <Row style={{justifyContent:"center",color:"white",fontSize:15}}>
              Reservar
              </Row>   
 
              </Link>
            </Col>

            </Row>
      </Container>
    );
}

export default ButtonContainer;


