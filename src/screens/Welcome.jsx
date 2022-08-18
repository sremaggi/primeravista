import React from "react";
import styled from "styled-components";
import Gallery from "../components/GalleryImage";
import {Container,Row,Col} from 'react-grid-system';
import { Link } from "react-router-dom";
import ButtonContainer from "../components/ButtonContainer";

function WelcomeScreen() {
    
    return (
        <div>
        
       <Container >
        <Row style={{height: 60}}>
            <Col sm={6} >
            <Link to='/' style={  {
    fontFamily:"fantasy",
    fontSize:18,
    fontWeight:"bold",            
    color: "black",
    textDecoration: "none",
  }}><h2>Primera <span>Vista</span></h2></Link>
            </Col>
        </Row>
        <Row >
            <Col sm={6} >
            <SubTitle>Hospedaje frente al mar.</SubTitle>
            </Col>
        </Row>
    

        <Row style={{marginTop:10}}>
        <Col>
        <Gallery />
        </Col>     
        </Row>
        <ButtonContainer />
       </Container>
       </div>
    );
}

export default WelcomeScreen;




const Title = styled.p `
font-family:"serif" ;
margin-top: 30px;
font-size: 30px;
display: flex;

  
`;

const SubTitle = styled.p `
font-family: "cursive";
display: flex;

  
`;