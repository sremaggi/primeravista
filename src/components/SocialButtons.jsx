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


        
        <a style={{textDecoration:"none"}} href="https://www.instagram.com/primera_vista.cl/">

        <Container style={{display:"flex",justifyContent:"center",width:"50%"}}>
        <Row>
        <Col style={{display:"flex",flexDirection:"row",fontSize:props.sizeFont,alignContent:"center",alignItems:"center",color:"#D21EFE"}}>
        <BsInstagram size={props.size}  style={{display:"flex"}}/>
        Instagram
        </Col> 
        </Row>
        </Container>

        </a>
        <a style={{textDecoration:"none"}}  href="https://www.facebook.com/Primera-Vista-100627176124609">

        <Container style={{marginTop:5,display:"flex",justifyContent:"center",width:"50%"}}>
        <Row>
        <Col style={{display:"flex",flexDirection:"row",fontSize:props.sizeFont,alignContent:"center",alignItems:"center",color:"#1E79FE"}}>
        <GrFacebook size={props.size} style={{display:"flex",color:"#1E79FE"}}/>
        Facebook
        </Col> 
        </Row>
        </Container>

        </a>

        <a style={{textDecoration:"none"}} href="https://www.airbnb.cl/rooms/692128768305472368?check_in=2022-10-29&check_out=2022-11-05&guests=1&adults=1&s=67&unique_share_id=c876fbe4-4091-408e-bbf9-2e9b54e22ea7&_set_bev_on_new_domain=1661739901_NWIzNDA5OTVjMWUw&source_impression_id=p3_1662854072_aMuyl4rC%2Fobz90CJ">
        <Container style={{marginTop:5,display:"flex",justifyContent:"center",width:"50%"}}>
        <Row>
        <Col style={{display:"flex",flexDirection:"row",fontSize:props.sizeFont,alignContent:"center",alignItems:"center",color:"#FE1E6C"}}>
        <FaAirbnb size={props.size}  style={{display:"flex",color:"#FE1E6C"}}/>
        Airbnb
        </Col> 
        </Row>
        </Container>

        </a>
        
       </div>



    );
}

export default SocialButtons;


