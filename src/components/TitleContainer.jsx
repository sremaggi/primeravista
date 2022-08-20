import React from "react";
import styled from "styled-components";

import {Row,Col} from 'react-grid-system';



function TitleContainer() {


    return (
            <div>
                <Row style={{height: 60}}>
<Col sm={6} >
<div style={  {
fontFamily:"fantasy",
fontSize:18,
fontWeight:"bold",            
color: "black",
textDecoration: "none",
}}><h2>Primera <span>Vista</span></h2></div>
</Col>
</Row>
<Row >
<Col sm={6} >
<SubTitle>Hospedaje frente al mar</SubTitle>
</Col>
</Row>
            </div>
    );
}

export default TitleContainer;





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
