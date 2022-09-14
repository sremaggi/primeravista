import React from "react";
import {Container,Row,Col} from 'react-grid-system';
import styled from "styled-components";

import { FcHome,FcCalendar, FcComments, FcMindMap, FcSms, FcLandscape, FcCellPhone } from "react-icons/fc";
import { FaPhoneSquareAlt } from "react-icons/fa";

import { Link } from "react-router-dom";



function ButtonContainer() {

    return (
      <div  style={{marginTop:2}}>
        <Row   style={{display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"}}>

        <Col  sm={5.5} xs={5.5} md={5.5} lg={2.5} xl={2.5} xxl={2.5} xxxl={2.5}  style={{padding:4,borderRadius:5,display:"flex",backgroundColor:"green",margin:2,justifyContent:"center",alignContent:"center",alignItems:"center"}}>

        <Link to={"/information"} style={{textDecoration:"none",display:"flex",flexDirection:"column",color:"white",width:"100%"}} >
      
              <Row style={{display:"flex",justifyContent:"center"}}>
              <FcHome style={{margin:5,color:"white"}} size={30}/>
              </Row> 
              <Row style={{display:"flex",justifyContent:"center",fontSize:15}}>
              Información
              </Row>  
            
              </Link>
    
          </Col>

        <Col  sm={5.5} xs={5.5} md={5.5} lg={2.5} xl={2.5} xxl={2.5} xxxl={2.5}  style={{padding:4,borderRadius:5,backgroundColor:"green",margin:2,display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"}}>
 
        <Link to={"/contact"} style={{textDecoration:"none",display:"flex",flexDirection:"column",color:"white"}} >
      
              <Row style={{display:"flex",justifyContent:"center"}}>
              <FaPhoneSquareAlt style={{margin:5,color:"white"}} size={30}/>
              </Row> 
              <Row style={{display:"flex",justifyContent:"center",fontSize:15}}>
              Contacto
              </Row>  
            
              </Link>
         
          </Col>
         
        <Col  sm={5.5} xs={5.5} md={5.5} lg={2.5} xl={2.5} xxl={2.5} xxxl={2.5}  style={{padding:4,borderRadius:5,backgroundColor:"green",margin:2,display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"}}>
 
        <Link to={"/comments"} style={{textDecoration:"none",display:"flex",flexDirection:"column",color:"white"}} >
      
              <Row style={{display:"flex",justifyContent:"center"}}>
              <FcSms style={{margin:5,color:"white"}} size={30}/>
              </Row> 
              <Row style={{display:"flex",justifyContent:"center",fontSize:15}}>
              Experiencias
              </Row>  
            
              </Link>
             
          </Col>
          
        <Col  sm={5.5} xs={5.5} md={5.5} lg={2.5} xl={2.5} xxl={2.5} xxxl={2.5}  style={{padding:4,borderRadius:5,backgroundColor:"green",margin:2,display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"}}>

        <Link to={"/bookings"} style={{textDecoration:"none",display:"flex",flexDirection:"column",color:"white"}} >
      
              <Row style={{display:"flex",justifyContent:"center"}}>
              <FcCalendar style={{margin:5,color:"white"}} size={30}/>
              </Row> 
              <Row style={{display:"flex",justifyContent:"center",fontSize:15}}>
              Reserva
              </Row>  
            
              </Link>
       
          </Col>
          
   
  







        </Row>

      </div>
    );
}

export default ButtonContainer;



const Cont = styled.div`

border-radius:10px ;


background: rgb(0,121,1);
background: linear-gradient(0deg, rgba(0,121,1,1) 0%, rgba(0,66,0,1) 100%);

`;
