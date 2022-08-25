import React, { useState,useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaSignInAlt } from "react-icons/fa";
import { Context } from "../App";
import {Container,Row,Col} from 'react-grid-system';





function NavbarLogin(props) {
  const context = useContext(Context)


    return (
        <>  
            
            <NavContainer>
            <Row style={{ width:"100%",display:"flex"}}>
            <Col style={{color:"white",justifyContent:"center",alignItems:"center",display:"flex"}}>
            {props.title}
            </Col>    
            <Col style={{backgroundColor:"#353535",justifyContent:"center",display:"flex",flexDirection:"column"}}>
            <Row style={{fontSize:8,display:"flex",padding:2,color:"purple",justifyContent:"center",color:"white"}}>
            Bienvenid@!
            </Row>  
            <Row style={{backgroundColor:"green",padding:2,fontSize:10,fontWeight:"bold",color:"white",justifyContent:"center"}}>
            {context.user.given_name}
            </Row>
            <Row style={{padding:2,fontSize:8,justifyContent:"center",color:"white"}}>
            Tienes 0 reservas activas
            </Row>
            </Col>     
            <Link to={"/profile"}>
            <img src={context.user.picture} height={60} style={{display:"flex",margin:1}}/>
            </Link>  
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

