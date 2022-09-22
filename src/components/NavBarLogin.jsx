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
import { GiLighthouse } from "react-icons/gi";
import { UseWindowSize } from "../context/UseWidth";





function NavbarLogin(props) {

  const {user} = UserAuth()
  const navigate = useNavigate();

    return (
    
            
            <NavContainer style={{padding:4,width:"100%" , boxShadow: "2px 2px 5px #999"
}}>

            <Row style={{ display:"flex"}}>

            <Col sm={9} xs={9} md={9} lg={9} xl={9} xxl={9} xxxl={9}  style={{ display:"flex",justifyContent:"start"}}>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",alignContent:"center"}}>
            <SocialButtons size="12" sizeFont="0" />
            </div>
            <Link style={{textDecoration:"none",height:"100%",justifyContent:"center",display:"flex"}} to={"/"}>
            <div style={{display:"flex",color:"#FBFFFB",alignItems:"center",fontSize:9}}>
            <div  style={{display:"flex",color:"#FBFFFB",alignItems:"end",fontSize:9}}>
            <img src={require('../assets/img/6.png') } width={75} height={"80%"} style={{margin:0,}}></img>
            </div>

            <div style={{marginLeft:5,display:"flex",flexDirection:"column"}}>
              <div style={{display:"flex",fontSize:15,letterSpacing: '.02rem',fontFamily:"American Typewriter",color:"white",fontWeight:550}}>
              <h1 style={{fontSize:18,margin:0,fontWeight:"normal",padding:4,backgroundColor:"#037D7740",borderRadius:5}}>Primera Vista</h1>
              </div>
              <div style={{display:"flex",fontSize:9,color:"white",fontFamily:"American Typewriter"}}>
              <h2 style={{fontSize:10,margin:0,fontWeight:"normal",boxShadow: "0px 0px 0px #999",padding:2,color:"#104D02"}}>Increíble casa frente al mar</h2>
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
                  <FaRegUserCircle size={32} />
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

