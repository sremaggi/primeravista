import React, { useState,useContext } from "react";
import { Link,useNavigate } from "react-router-dom";
import styled from "styled-components";
import {Container,Row,Col} from 'react-grid-system';
import { UserAuth } from "../context/AuthContext";
import TitleContainer from "./TitleContainer";
import {GoHome } from "react-icons/go";
import {FaRegUserCircle } from "react-icons/fa";
import { width } from "@mui/system";
import SocialButtons from "./SocialButtons";






function NavbarLogin(props) {

  const {user} = UserAuth()
  const navigate = useNavigate();

    return (
    
            
            <NavContainer style={{padding:10,width:"100%" , boxShadow: "2px 2px 5px #999"
}}>

            <Row style={{ display:"flex"}}>

            <Col sm={9} xs={9} md={9} lg={9} xl={9} xxl={9} xxxl={9}  style={{ display:"flex",justifyContent:"start"}}>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",alignContent:"center"}}>
            <SocialButtons size="12" sizeFont="0" />
            </div>
            <Link style={{textDecoration:"none",height:"100%",justifyContent:"center",display:"flex"}} to={"/"}>
            <div style={{display:"flex",color:"#FBFFFB",alignItems:"center",fontSize:9}}>
     
            <img src={require('../assets/img/5.png') } width={100} height={"100%"} style={{borderRadius:100}}></img>
            <div style={{marginLeft:5,display:"flex",flexDirection:"column"}}>
              <div style={{display:"flex",fontSize:16,fontFamily:"American Typewriter",color:"#003403",fontWeight:550}}>
              Primera Vista
              </div>
              <div style={{display:"flex",fontSize:10,color:"#014004",fontFamily:"American Typewriter"}}>
              Increible casa frente al mar
              </div>
       
            </div>
            
            </div>
      
    
    
  
  
          
            </Link>
  
            </Col>

            {user?.displayName ? 
                <Col sm={3} xs={3} md={3} lg={3} xl={3} xxl={3} xxxl={3}  style={{ display:"flex",padding:2}}>
                <Link style={{flexDirection:"column",textDecoration:"none",width:"100%",height:"100%",justifyContent:"center",display:"flex"}} to={user?.displayName ? "/profile":"/"}>
                <div style={{display:"flex",color:"white",flexDirection:"column",justifyContent:"center",fontSize:8}}>
                <div style={{display:"flex",justifyContent:"center"}}>
                <img src={user.photoURL} onClick={()=>{
                  navigate("/profile")
                }} height={40} width={40} style={{display:"flex",justifyContent:"center",borderRadius:100}} /> 
                </div>
    
                <div style={{display:"flex",justifyContent:"center",width:"100%",color:"white",marginTop:3}}>
                {user.displayName.split(" ")[0]}
                </div>
      
               
              
                </div>
                </Link>
    
                </Col>
            
            :
            <Col sm={3} xs={3} md={3} lg={3} xl={3} xxl={3} xxxl={3}  style={{ display:"flex"}}>
            <Link style={{flexDirection:"column",textDecoration:"none",width:"100%",height:"100%",justifyContent:"center",display:"flex"}} to={"/signin"}>
            <div style={{display:"flex",padding:1,color:"white",flexDirection:"column",justifyContent:"center",margin:3,fontSize:8}}>
            <div style={{display:"flex",justifyContent:"center"}}>
                  <FaRegUserCircle size={35} />
                </div>
              </div>
            </Link>

            </Col>
            }
        
     
      
      
            </Row>
            </NavContainer>
    
    );
}

export default NavbarLogin;



const NavContainer = styled.div`
background: rgb(72,196,66);
background: linear-gradient(163deg, rgba(72,196,66,1) 0%, rgba(72,196,66,1) 51%, rgba(58,158,54,1) 100%);
`;

