import React,{useContext, useEffect} from "react";
import styled from "styled-components";
import {Container,Row,Col} from 'react-grid-system';
import TitleContainer from "../components/TitleContainer";

import NavbarLogin from "../components/NavBarLogin";
import Navbar from "../components/NavBar";
import CalendarComponent from "../components/Calendar";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { UseWindowSize } from "../context/UseWidth";
import Gallery from "../components/GalleryImage";




function Bookings() {
    const {user} = UserAuth()
    const {navigate} = useNavigate()
    const [width, height] = UseWindowSize()
    useEffect(() => {
        //scroll to top on page load
        document.body.style.zoom = "100%";
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    
    return (
            <div>
                 <NavbarLogin />
             <Container >
             {width > 833 ?
            <Container>
            <Row>    
            <Col sm={12} xs={12} md={6} lg={6} xl={6} xxl={6} xxxl={6} style={{display:"flex",justifyContent:"start",marginTop:20,flexDirection:"column",alignContent:"center",alignItems:"center"}} >
            <img width={"90%"} height={"90%"} src="https://firebasestorage.googleapis.com/v0/b/primeravista-50b01.appspot.com/o/assests%2Fimages%2Fkrika2.jpeg?alt=media&token=04d01a88-41f7-47a9-98f3-7539b8bc8118" style={{borderRadius:100}} />
            
            </Col>
            <Col sm={12} xs={12} md={6} lg={6} xl={6} xxl={6} xxxl={6} style={{display:"flex",marginBottom:10,marginTop:5,justifyContent:"center",alignContent:"center",alignItems:"center",flexDirection:"column"}}>
       
            <Row style={{display:"flex",padding:5,borderRadius:2,color:"white",fontSize:10,alignItems:"center",alignContent:"center"}}>
      
              <Col  sm={12} xs={12} md={12} lg={12} xl={12} xxl={12} xxxl={12} style={{display:"flex",alignContent:"center",justifyContent:"center"}}>
              <CalendarComponent />
              </Col>
            
            </Row>
         
            
            
            </Col>
            </Row>
            </Container>
            
            :
            <Row>
   
              <Col sm={12} xs={12} md={12} lg={12} xl={6} xxl={6} xxxl={6} style={{marginBottom:10}}>
              <Container>
              <CalendarComponent />
              </Container>
           
              </Col>
              </Row>
            }
    
        </Container> 
        </div>
  
    );
}

export default Bookings;


