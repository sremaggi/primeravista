import React from "react";
import styled from "styled-components";
import {Row,Col,Container} from 'react-grid-system';

import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";



function TitleContainer(props) {
    const {user}= UserAuth();

    return (
        <Container>
        <Row
        style={{
         boxShadow: "2px 2px 5px #999",
          display: 'flex',
          backgroundColor: 'darkslategray',
          color: 'white',
          borderRadius:4,
          justifyContent: 'center',
          marginTop: 5,
          marginBottom:5,
          padding: 10,
          fontSize: 15,
        }}
      >
      {props.title}
      </Row>
      </Container>


    );
}

export default TitleContainer;

const SubTitle = styled.p `
font-family: "cursive";
display: flex;

  
`;
