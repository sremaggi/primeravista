import React, { useState,useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FcNext } from "react-icons/fc";
import { Col, Container, Row } from "react-grid-system";






function InfoContainer(props) {



    return (
 
        <div style={{backgroundColor:"#9DC289",marginTop:10,padding:10}}>
  
       <Row style={{display:"flex",justifyContent:"center",fontWeight:"bold",backgroundColor:"#2F5E20",padding:3,color:"white"}}>
        Características Generales
       </Row>
       <Row style={{display:"flex",justifyContent:"center",marginTop:10,padding:5,fontSize:12, backgroundColor:"#DCDCDC"}}>
        <Col style={{display:"flex",justifyContent:"center"}}>
        Cocina Full equipada
        </Col>
   
       </Row>
       <Row style={{display:"flex",justifyContent:"center",marginTop:3,padding:5,fontSize:12, backgroundColor:"#DCDCDC"}}>
        <Col style={{display:"flex",justifyContent:"center"}}>
        Estacionamiento
        </Col>
   
       </Row>
       <Row style={{display:"flex",justifyContent:"center",marginTop:3,padding:5,fontSize:12, backgroundColor:"#DCDCDC"}}>
        <Col style={{display:"flex",justifyContent:"center"}}>
        Wifi
        </Col>
   
       </Row>
       <Row style={{display:"flex",justifyContent:"center",marginTop:3,padding:5,fontSize:12, backgroundColor:"#DCDCDC"}}>
        <Col style={{display:"flex",justifyContent:"center"}}>
        Capacidad 6 Personas
        </Col>
 
       </Row>
       <Row style={{display:"flex",justifyContent:"center",marginTop:3,padding:5,fontSize:12, backgroundColor:"#DCDCDC"}}>
        <Col style={{display:"flex",justifyContent:"center"}}>
        Habitación Full equipada
        </Col>

       </Row>
       <Row style={{display:"flex",justifyContent:"center",marginTop:3,padding:5,fontSize:12, backgroundColor:"#DCDCDC"}}>
        <Col style={{display:"flex",justifyContent:"center"}}>
        Baño Full equipado
        </Col>
   
       </Row>
       <Row style={{display:"flex",justifyContent:"center",marginTop:3,padding:5,fontSize:12, backgroundColor:"#DCDCDC"}}>
        <Col style={{display:"flex",justifyContent:"center"}}>
        Bajada directo al mar
        </Col>
   
       </Row>
       <Row style={{display:"flex",justifyContent:"center",margin:10,padding:10}}>
        <img style={{width:"80%",height:300}} src="https://firebasestorage.googleapis.com/v0/b/primeravista-50b01.appspot.com/o/assests%2FhomeImages%2FIMG-1473.jpg?alt=media&token=98d9a96a-3135-420d-abf7-6ff0fa343a44"></img>
       </Row>
       <Row style={{display:"flex",justifyContent:"center",fontWeight:"bold",backgroundColor:"#2F5E20",padding:3,color:"white"}}>
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
       <Row style={{display:"flex",justifyContent:"center",marginTop:3,padding:5,fontSize:12, backgroundColor:"#DCDCDC",fontSize:13}}>
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
       <Row style={{display:"flex",justifyContent:"center",marginTop:3,padding:5,fontSize:12, backgroundColor:"#DCDCDC",fontSize:13}}>
        <Col style={{display:"flex",justifyContent:"center"}}>
        Almohada
        </Col>
        <Col style={{display:"flex",justifyContent:"center"}}>
        --
        </Col>
        <Col style={{display:"flex",justifyContent:"center"}}>
        2
        </Col>

       </Row>
       <Row style={{display:"flex",justifyContent:"center",padding:10,margin:10, backgroundColor:"#DCDCDC",fontSize:13}}>
        <Col style={{display:"flex",justifyContent:"center"}}>
        Ropa de cama
        </Col>
        <Col style={{display:"flex",justifyContent:"center"}}>
        Variada
        </Col>
        <Col style={{display:"flex",justifyContent:"center"}}>
        1
        </Col>

       </Row>
       <Row style={{display:"flex",justifyContent:"center",padding:10,margin:10, backgroundColor:"#DCDCDC",fontSize:13}}>
        <Col style={{display:"flex",justifyContent:"center"}}>
        Velador
        </Col>
        <Col style={{display:"flex",justifyContent:"center"}}>
        Velador Tradicional
        </Col>
        <Col style={{display:"flex",justifyContent:"center"}}>
        2
        </Col>

       </Row>
       <Row style={{display:"flex",justifyContent:"center",padding:10,margin:10, backgroundColor:"#DCDCDC",fontSize:13}}>
        <Col style={{display:"flex",justifyContent:"center"}}>
        Lámpara
        </Col>
        <Col style={{display:"flex",justifyContent:"center"}}>
        Lampara de noche
        </Col>
        <Col style={{display:"flex",justifyContent:"center"}}>
        2
        </Col>

       </Row>
       <Row style={{display:"flex",justifyContent:"center",margin:10,padding:10}}>
        <img style={{width:"80%",height:300}} src="https://firebasestorage.googleapis.com/v0/b/primeravista-50b01.appspot.com/o/assests%2FhomeImages%2FIMG-1443.jpg?alt=media&token=f32b2fb0-127e-4a9d-ac01-a8eea3009c2b"></img>
       </Row>
       <Row style={{display:"flex",justifyContent:"center",fontWeight:"bold",backgroundColor:"#2F5E20",padding:3,color:"white"}}>
        Cocina
       </Row>
       <Row style={{display:"flex",justifyContent:"center",padding:10,margin:10, backgroundColor:"#454545",color:"white"}}>
        <Col style={{display:"flex",justifyContent:"center"}}>

        </Col>
        <Col style={{display:"flex",justifyContent:"center"}}>
        Descripción
        </Col>
        <Col style={{display:"flex",justifyContent:"center"}}>
        Cantidad
        </Col>
       </Row>
       <Row style={{display:"flex",justifyContent:"center",padding:10,margin:10, backgroundColor:"#DCDCDC",fontSize:13}}>
        <Col style={{display:"flex",justifyContent:"center"}}>
        Set Platos
        </Col>
        <Col style={{display:"flex",justifyContent:"center"}}>
        <ul>
            <li>
                Fondo
            </li>
            <li>
                Servilleta
            </li>
        </ul>
        </Col>
        <Col style={{display:"flex",justifyContent:"center"}}>
        6
        </Col>

       </Row>
        </div>

 

    );
}

export default InfoContainer;


