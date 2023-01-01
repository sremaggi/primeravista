import React from "react";
import styled from "styled-components";
import {Row,Col,Container} from 'react-grid-system';

import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";



function SubTitleContainer(props) {
    const {user}= UserAuth();

    return (
        <Container>
        <Container style={{display: 'flex', justifyContent: 'center'}}>
        <Row
        style={{
         boxShadow: "2px 2px 5px #999",
          display: 'flex',
          backgroundColor:"lightslategray",
          color: 'white',
          borderRadius:4,
          width:"70%",
          justifyContent: 'center',
          marginTop: 5,
          marginBottom:5,
          padding: 4,
          fontSize: 15,
        }}
      >
      {props.title}
      </Row>
      </Container>
      </Container>

    );
}

export default SubTitleContainer;

const SubTitle = styled.p `
font-family: "cursive";
display: flex;

  
`;
