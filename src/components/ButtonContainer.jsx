import React from "react";
import {Container,Row,Col} from 'react-grid-system';
import styled from "styled-components";
import { BsCalendarDate } from "react-icons/bs";
import { FaBed } from "react-icons/fa";
import { FcHome,FcCalendar, FcComments, FcMindMap, FcSms, FcLandscape, FcCellPhone } from "react-icons/fc";
import { Link } from "react-router-dom";



function ButtonContainer() {

    return (
      <div>
        <Row style={{height: 80}}>
        <Col style={{padding:1}}>
               <button onClick={()=>{
                <Link to={"bookings"} />
              }}  style={{width:"100%",height:"100%",backgroundColor:'green'}}>
              <Row style={{justifyContent:"center"}}>
              <FcHome style={{margin:5,color:"white"}} size={40}/>
              </Row> 
              <Row style={{justifyContent:"center",color:"white",fontWeight:'bold'}}>
              Información General
              </Row>   
              </button> 
            </Col>
            <Col style={{padding:1}}>
            <Link to={"/Bookings"} >
               <button onClick={()=>{
            
              }}  style={{width:"100%",height:"100%",backgroundColor:'green'}}>
              <Row style={{justifyContent:"center",color:"white"}}>
              <FcCalendar style={{margin:5}} size={40}/>
              </Row> 
              <Row style={{justifyContent:"center",color:"white",fontWeight:'bold'}}>
              Disponibilidad
              </Row>   
              </button> 
              </Link>
            </Col>
        </Row>
        <Row style={{height: 80}}>
        <Col style={{padding:1}}>
               <button onClick={()=>{
                <Link to={"bookings"} />
              }}  style={{width:"100%",backgroundColor:'green'}}>
              <Row style={{justifyContent:"center"}}>
              <FcSms style={{margin:5}} size={40}/>
              </Row> 
              <Row style={{justifyContent:"center",color:"white",fontWeight:'bold'}}>
              Comentarios
              </Row>   
              </button> 
            </Col>
            <Col style={{padding:1}}>
               <button onClick={()=>{
                <Link to={"bookings"} />
              }}  style={{width:"100%",backgroundColor:'green'}}>
              <Row style={{justifyContent:"center",color:"white"}}>
              <FcCellPhone style={{margin:5}} size={40}/>
              </Row> 
              <Row style={{justifyContent:"center",color:"white",fontWeight:'bold'}}>
              Contacto
              </Row>   
              </button> 
            </Col>
        </Row>
      </div>
    );
}

export default ButtonContainer;


const GoogleButtonContainer = styled.div `
display: flex;
  justify-content: center;

`;