import React from "react";
import {Container,Row,Col} from 'react-grid-system';
import styled from "styled-components";

import { FcHome,FcCalendar, FcComments, FcMindMap, FcSms, FcLandscape, FcCellPhone } from "react-icons/fc";
import { Link } from "react-router-dom";



function ButtonContainer() {

    return (
      <div style={{width:"100%"}}>
        <Row style={{marginRight:10,marginLeft:10,margin:2,alignContent:"center",alignItems:"center"}}>
        <Col xs={6} md={6} lg={6} style={{backgroundColor:'#448123',padding:15}} >
        <Link to={"/information"} style={{textDecoration:"none"}} >
              <Row style={{display:"flex",justifyContent:"center"}}>
              <FcHome style={{margin:5,color:"white"}} size={40}/>
              </Row> 
              <Row style={{justifyContent:"center",color:"white",fontWeight:'bold'}}>
              Información General
              </Row>   
              </Link>
        </Col>
            <Col xs={6} md={6} lg={6} style={{backgroundColor:'#509929',padding:15}}>
            <Link to={"/bookings"}  style={{textDecoration:"none"}}>
              <Row style={{display:"flex",justifyContent:"center",color:"white"}}>
              <FcCalendar style={{margin:5}} size={40}/>
              </Row> 
              <Row style={{justifyContent:"center",color:"white",fontWeight:'bold'}}>
              Reservar
              </Row>   
 
              </Link>
            </Col>
            </Row>
        
            <Row style={{marginRight:10,marginLeft:10,margin:2}}>
        <Col xs={6} md={6} lg={6} style={{backgroundColor:'#509929',padding:15}} >
        <Link to={"/comments"}   style={{textDecoration:"none"}}>
              <Row style={{display:"flex",justifyContent:"center"}}>
              <FcSms style={{margin:5,color:"white"}} size={40}/>
              </Row> 
              <Row style={{justifyContent:"center",color:"white",fontWeight:'bold'}}>
              Comentarios
              </Row>   
              </Link>
        </Col>
            <Col xs={6} md={6} lg={6} style={{backgroundColor:'#448123',padding:15}}>
            <Link to={"/contact"}  style={{textDecoration:"none"}}>
              <Row style={{display:"flex",justifyContent:"center",color:"white"}}>
              <FcCellPhone style={{margin:5}} size={40}/>
              </Row> 
              <Row style={{justifyContent:"center",color:"white",fontWeight:'bold'}}>
              Contacto
              </Row>   
 
              </Link>
            </Col>
            </Row>
      </div>
    );
}

export default ButtonContainer;


