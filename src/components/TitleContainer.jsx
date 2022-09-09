import React from "react";
import styled from "styled-components";
import {Row,Col} from 'react-grid-system';
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";



function TitleContainer() {
    const {user}= UserAuth();

    return (
        
                <Link style={{textDecoration:"none",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"yellow",width:"100%",height:"100%"}}  to={user?.displayName ? "/home":"/"}>
       
             
                   Primera Vista
                
     
                <Row  style={  {

                    }}>
           
                </Row>
                </Link> 



    );
}

export default TitleContainer;

const SubTitle = styled.p `
font-family: "cursive";
display: flex;

  
`;
