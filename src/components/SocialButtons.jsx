import React from "react";
import styled from "styled-components";
import {Row,Col,Container} from 'react-grid-system';
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import {BsInstagram } from "react-icons/bs";
import {GrFacebook } from "react-icons/gr";
import {FaAirbnb } from "react-icons/fa";



function SocialButtons(props) {
    const {user}= UserAuth();

    return (
        
<div style={{width:"100%"}}>


<Container >
        <a style={{textDecoration:"none"}} href="https://www.instagram.com/primera_vista.cl/">

     
        <Row style={{display:"flex",justifyContent:"center"}}>

        <BsInstagram size={props.size} color="#F341EE"  style={{display:"flex",marginLeft:3,margin:3}}/>
   
        </Row>


        </a>
        <a style={{textDecoration:"none"}}  href="https://www.facebook.com/Primera-Vista-100627176124609">


        <Row style={{display:"flex",justifyContent:"center"}}>

        <GrFacebook size={props.size} style={{display:"flex",color:"#0284CA",marginLeft:3,margin:3}}/>

 
        </Row>


        </a>

        <a style={{textDecoration:"none"}} href="https://www.airbnb.cl/rooms/692128768305472368?check_in=2022-10-29&check_out=2022-11-05&guests=1&adults=1&s=67&unique_share_id=c876fbe4-4091-408e-bbf9-2e9b54e22ea7&_set_bev_on_new_domain=1661739901_NWIzNDA5OTVjMWUw&source_impression_id=p3_1662854072_aMuyl4rC%2Fobz90CJ">

        <Row style={{display:"flex",justifyContent:"center"}}>

        <FaAirbnb size={props.size}  style={{display:"flex",color:"#FE1E6C",marginLeft:3,margin:3}}/>
 

        </Row>


        </a>
        </Container>
       </div>



    );
}

export default SocialButtons;


