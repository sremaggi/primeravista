import React, { useState,useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FcNext } from "react-icons/fc";
import { Col, Container, Row } from "react-grid-system";






function InfoContainer(props) {



    return (
 
        <div>
        <Row style={{margin:5,justifyContent:"space-around"}}>    
        <Col xs={12} lg={12} style={{backgroundColor:"#9DC289",padding:10,margin:1}}>
       <Row style={{display:"flex",justifyContent:"center",fontWeight:"bold"}}>
        Caracteristicas Generales
       </Row>
       <Row style={{display:"flex",justifyContent:"center",margin:10,padding:10, backgroundColor:"#DCDCDC"}}>
        <Col style={{display:"flex",justifyContent:"center"}}>
        Capacidad
        </Col>
        <Col style={{display:"flex",justifyContent:"center"}}>
        6 Personas
        </Col>
       </Row>
       <Row style={{display:"flex",justifyContent:"center",margin:10,padding:10}}>
        <img style={{width:"100%",height:300}} src="https://firebasestorage.googleapis.com/v0/b/primeravista-50b01.appspot.com/o/assests%2Fimages%2FIMG_2668.jpg?alt=media&token=50c8ca27-7058-4b78-a966-84e46e85880a"></img>
       </Row>
       <Row style={{display:"flex",justifyContent:"center",fontWeight:"bold"}}>
        Habitación Principal
       </Row>
       <Row style={{display:"flex",justifyContent:"center",padding:10,margin:10, backgroundColor:"#454545",color:"white"}}>
        <Col style={{display:"flex",justifyContent:"center"}}>

        </Col>
        <Col style={{display:"flex",justifyContent:"center"}}>
        Descripcion
        </Col>
        <Col style={{display:"flex",justifyContent:"center"}}>
        Cantidad
        </Col>

       </Row>
       <Row style={{display:"flex",justifyContent:"center",padding:10,margin:10, backgroundColor:"#DCDCDC",fontSize:13}}>
        <Col style={{display:"flex",justifyContent:"center"}}>
        Cama
        </Col>
        <Col style={{display:"flex",justifyContent:"center"}}>
        Super King
        </Col>
        <Col style={{display:"flex",justifyContent:"center"}}>
        1
        </Col>

       </Row>
       <Row style={{display:"flex",justifyContent:"center",margin:10,padding:10}}>
        <img style={{width:"100%",height:300}} src="https://firebasestorage.googleapis.com/v0/b/primeravista-50b01.appspot.com/o/assests%2Fimages%2FIMG_2668.jpg?alt=media&token=50c8ca27-7058-4b78-a966-84e46e85880a"></img>
       </Row>
        </Col>
   
        </Row>
        </div>

 

    );
}

export default InfoContainer;


