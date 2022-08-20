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
            <Row style={{fontSize:12,display:"flex",padding:2,color:"purple",justifyContent:"center",color:"white"}}>
            Bienvenid@!
            </Row>  
            <Row style={{backgroundColor:"green",padding:2,fontSize:12,fontWeight:"bold",color:"white",justifyContent:"center"}}>
            {context.user.given_name}
            </Row>
            <Row style={{padding:2,fontSize:10,justifyContent:"center",color:"white"}}>
            Tienes 0 reservas activas
            </Row>


            </Col>    
      
           
            <Link to={"/profile"}>
            <img src={context.user.picture} height={80} style={{display:"flex",margin:1}} />
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
  align-items: center;
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


/*<Col sm={9} style={{display:"flex",backgroundColor:"#F5F5F5",alignItems:"start",justifyContent:"end"}}>
</Col>

<Col sm={3} style={{display:"flex",backgroundColor:"#F5F5F5",alignItems:"center",justifyContent:"end"}}>
<div style={{flexDirection:"column"}}>
<p>{context.user.given_name}</p>
<Link to={"/"}>
<button onClick={()=>{
    context.setUser({})
}} title="salir" style={{display:"flex",width:"100%",justifyContent:"center",backgroundColor:"red",color:"white",alignContent:"center"}}>Cerrar Sesión</button>
</Link>

</div>
<img src={context.user.picture} height={80} style={{display:"flex",margin:10}}/>
</Col>*/