import React from "react";
import styled from "styled-components";
import {Row,Col} from 'react-grid-system';



function TitleContainer() {


    return (
                <div style={{}}>
                <Row  style={  {
                    display:"flex" ,
                    fontFamily:"fantasy",
                    fontSize:20,
                    height:30 ,
                    fontWeight:"bold",            
                    color: "black"
                    }}>
                   <Col style={{display:"flex",justifyContent:"center"}}>
                   Primera Vista
                   </Col>     
                </Row>
                <Row  style={  {
                    display:"flex" ,
         
                    fontFamily:"fantasy",
                    fontSize:13,
                    height:40 ,         
                    color: "black",
                    }}>
                   <Col style={{display:"flex",justifyContent:"center"}}>
                   <SubTitle> Hospedaje frente al mar</SubTitle>
                   </Col>     
             


                </Row>
</div>


    );
}

export default TitleContainer;

const SubTitle = styled.p `
font-family: "cursive";
display: flex;

  
`;
