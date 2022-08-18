import React, { useContext } from "react";
import styled from "styled-components";
import Gallery from "../components/GalleryImage";
import {Container,Row,Col} from 'react-grid-system';
import Navbar from "../components/NavBar";
import { Link } from "react-router-dom";
import { Context } from "../App";


function HomeScreen() {
    const context = useContext(Context)
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
            <SubTitle>Hospedaje frente al mar</SubTitle>
            </Col>
        </Row>
        <Row>
        <Col sm={9} style={{display:"flex",backgroundColor:"#F5F5F5",alignItems:"start",justifyContent:"end"}}>
        </Col>
 
        <Col sm={3} style={{display:"flex",backgroundColor:"#F5F5F5",alignItems:"center",justifyContent:"end"}}>
        <div style={{flexDirection:"column"}}>
        <p>{context.user.given_name}</p>
        <button onClick={()=>{
            context.setUser({})
        }} title="salir" style={{display:"flex",width:"100%",justifyContent:"center",backgroundColor:"red",color:"white",alignContent:"center"}}>Cerrar Sesión</button>
        </div>
       
        <img src={context.user.picture} height={80} style={{display:"flex",margin:10}}/>
        </Col>
        </Row>

        <Row style={{marginTop:10}} >
        <Col>
        <Gallery />
        </Col>     
        </Row>
        <Row style={{height: 80,marginTop:5}}>
            <Col style={{backgroundColor:'green',margin:2}}>
            </Col>
            <Col style={{backgroundColor:'green',margin:2}}>
            </Col>
        </Row>
        <Row style={{height: 80,marginTop:1}}>
            <Col style={{backgroundColor:'green',margin:2}} onClick={()=>{console.log('hola')}}>
            </Col>
            <Col style={{backgroundColor:'green',margin:2}}>
            </Col>
        </Row>
       </Container>
       </div>
    );
}

export default HomeScreen;




const Title = styled.p `
margin-top: 30px;
font-size: 40px;
display: flex;

  
`;

const SubTitle = styled.p `
font-family:"cursive" ;
display: flex;

  
`;