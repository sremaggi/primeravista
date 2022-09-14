import React from "react";
import styled from "styled-components";
import {Row,Col,Container} from 'react-grid-system';
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import {BsInstagram } from "react-icons/bs";
import {GrFacebook } from "react-icons/gr";
import {FaAirbnb } from "react-icons/fa";



function SocialHorizontal(props) {
    const {user}= UserAuth();

    return (
        
        <Container style={{display:"flex",justifyContent:"center",width:"100%"}}>
             
        <Row>

        <Col style={{display:"flex",flexDirection:"row",fontSize:10,color:"#D21EFE",justifyContent:"center"}}>
        <a style={{textDecoration:"none",display:"flex",alignContent:"center",alignItems:"center"}} href="https://www.airbnb.cl/rooms/692128768305472368?check_in=2022-10-29&check_out=2022-11-05&guests=1&adults=1&s=67&unique_share_id=c876fbe4-4091-408e-bbf9-2e9b54e22ea7&_set_bev_on_new_domain=1661739901_NWIzNDA5OTVjMWUw&source_impression_id=p3_1662854072_aMuyl4rC%2Fobz90CJ">
        <FaAirbnb size={40}  style={{display:"flex",color:"#FE1E6C",margin:10}}/>
        Airbnb
        </a>
        </Col> 
        
        <Col style={{display:"flex",flexDirection:"row",fontSize:10,color:"#D21EFE",justifyContent:"center"}}>
        <a style={{textDecoration:"none",display:"flex",alignContent:"center",alignItems:"center"}} href="https://www.instagram.com/primera_vista.cl/">
        <BsInstagram size={40}  style={{display:"flex",margin:10,color:"#D21EFE"}}/>
        Instagram
        </a>
        </Col> 
        <Col style={{display:"flex",flexDirection:"row",fontSize:10,color:"#D21EFE",justifyContent:"center"}}>
        <a style={{textDecoration:"none",display:"flex",alignContent:"center",alignItems:"center"}} href="https://www.facebook.com/Primera-Vista-100627176124609">
        <GrFacebook size={40} style={{display:"flex",color:"#1E79FE",margin:10}}/>
        Facebook
        </a>
        </Col> 
        
        </Row>

        </Container>



    );
}

export default SocialHorizontal;


