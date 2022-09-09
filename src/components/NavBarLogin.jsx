import React, { useState,useContext } from "react";
import { Link,useNavigate } from "react-router-dom";
import styled from "styled-components";
import {Container,Row,Col} from 'react-grid-system';
import { UserAuth } from "../context/AuthContext";
import TitleContainer from "./TitleContainer";
import {GoHome } from "react-icons/go";
import {FaRegUserCircle } from "react-icons/fa";





function NavbarLogin(props) {

  const {user} = UserAuth()
  const navigate = useNavigate();

    return (
    
            
            <Container style={{marginTop:5,backgroundColor:"#144903",padding:3}}>
            <Row style={{ display:"flex"}}>
            <Col sm={8} xs={8} md={10} lg={10} xl={10} xxl={10} xxxl={10}  style={{ display:"flex",justifyContent:"center",alignItems:"center"}}>
            <Link style={{flexDirection:"column",textDecoration:"none",backgroundColor:"#0B6A2C",width:"100%",height:"100%",justifyContent:"center",display:"flex"}} to={user?.displayName ? "/home":"/"}>
            <div style={{display:"flex",justifyContent:"center",color:"white",margin:2}}>
           <GoHome />
            </div>
            <div style={{display:"flex",justifyContent:"center",color:"white"}}>
            PrimeraVista
            </div>
            <div style={{display:"flex",justifyContent:"center",margin:1,fontSize:10,color:"white"}}>
            Increible casa frente al mar
            </div>
  
  
          
            </Link>
            </Col>

            {user?.displayName ? 
                <Col sm={4} xs={4} md={2} lg={2} xl={2} xxl={2} xxxl={2}  style={{ display:"flex",padding:2}}>
                <Link style={{flexDirection:"column",textDecoration:"none",width:"100%",height:"100%",justifyContent:"center",display:"flex"}} to={user?.displayName ? "/profile":"/"}>
                <div style={{display:"flex",color:"white",flexDirection:"column",justifyContent:"center",fontSize:8}}>
                <div style={{display:"flex",justifyContent:"center"}}>
                <img src={user.photoURL} onClick={()=>{
                  navigate("/profile")
                }} height={50} width={50} style={{display:"flex",justifyContent:"center"}} /> 
                </div>
    
                <div style={{display:"flex",justifyContent:"center"}}>
                {user.displayName.split(" ")[0]}
                </div>
                <div style={{display:"flex",justifyContent:"center",fontSize:6}}>
                Mi perfil
                </div>
               
              
                </div>
                </Link>
    
                </Col>
            
            :
            <Col sm={4} xs={4} md={2} lg={2} xl={2} xxl={2} xxxl={2}  style={{ display:"flex"}}>
            <Link style={{flexDirection:"column",textDecoration:"none",width:"100%",height:"100%",justifyContent:"center",display:"flex"}} to={"/signin"}>
            <div style={{display:"flex",padding:10,color:"white",flexDirection:"column",justifyContent:"center",margin:3,fontSize:8}}>
            <div style={{display:"flex",justifyContent:"center"}}>
                  <FaRegUserCircle size={30} />
                </div>
                <div style={{display:"flex",justifyContent:"center",fontSize:6}}>
                Iniciar 
                </div>
                <div style={{display:"flex",justifyContent:"center",fontSize:6}}>
                Sesión
                </div>
              </div>
            </Link>

            </Col>
            }
        
     
      
      
            </Row>
            </Container>
    
    );
}

export default NavbarLogin;



const NavContainer = styled.nav`

  padding: .4rem;

  display: flex;
  justify-content:space-around;
  a{
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }
  p{
    height:10 ;
    color:white
  }
`;

