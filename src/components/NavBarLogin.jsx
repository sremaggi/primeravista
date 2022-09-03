import React, { useState,useContext } from "react";
import { Link,useNavigate } from "react-router-dom";
import styled from "styled-components";
import {Container,Row,Col} from 'react-grid-system';
import { UserAuth } from "../context/AuthContext";





function NavbarLogin(props) {

  const {user} = UserAuth()
  const navigate = useNavigate();

    return (
        <>  
            
            <NavContainer>
            <Row style={{ width:"100%",display:"flex"}}>
            <Col style={{color:"white",justifyContent:"start",alignItems:"center",display:"flex"}}>
            {props.title}
            </Col>
            <Col style={{justifyContent:"center",display:"flex",flexDirection:"column",}}>
            <Link style={{display:"flex",flexDirection:"column",justifyContent:"center"}} to={"/profile"}>     

            <Row style={{backgroundColor:"#353535",fontSize:8,display:"flex",padding:6,color:"purple",justifyContent:"center",color:"white"}}>
            Bienvenid@!
            </Row>  
            <Row style={{backgroundColor:"green",display:"flex",padding:2,fontSize:10,fontWeight:"bold",color:"white",justifyContent:"center"}}>
            {user.displayName}
            </Row>
            <Row style={{backgroundColor:"#353535",padding:6,fontSize:8,justifyContent:"center",color:"white"}}>
            Mi perfil
            </Row>
    
            </Link> 
            
            </Col>  
            <img src={user.photoURL} onClick={()=>{
              navigate("/profile")
            }} height={60} style={{display:"flex",borderRadius:100}}/> 
            </Row>
            </NavContainer>
        </>
    );
}

export default NavbarLogin;



const NavContainer = styled.nav`

  padding: .4rem;
  background-color: #454545;
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

