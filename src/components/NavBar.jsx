import React, { useState,useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FcNext } from "react-icons/fc";
import { Context } from "../App";





function Navbar(props) {
  const context = useContext(Context)


    return (
        <>  
            
            <NavContainer>
              <div style={{display:'flex',flexDirection:'column'}}>
              <div style={{display:'flex',color:"white",fontWeight:'bold'}}>
                Bienvenid@s!
                </div>
                <div style={{display:'flex',color:"white",fontSize:10}}>
              Puedes iniciar sesión para brindarte una mejor experiencia!
                </div>
              </div>
   
                
                <Link to='signin'>
                  <button style={{display:"flex",alignContent:'center',justifyContent:'space-around', backgroundColor:'green',color:"white",padding:10}}>Iniciar Sesión<FcNext style={{display:'flex',justifyContent:'center',alignItems:'center',marginLeft:2}} size={15}/></button>
                </Link>
 
            </NavContainer>
        </>
    );
}

export default Navbar;



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

