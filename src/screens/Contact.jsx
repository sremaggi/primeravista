import React from "react";
import styled from "styled-components";
import {Container,Row,Col} from 'react-grid-system';
import NavbarLogin from "../components/NavBarLogin";



function Contact() {
    return (
       <Container style={{width:"100%"}}>
        <NavbarLogin />
       </Container>
    );
}

export default Contact;

