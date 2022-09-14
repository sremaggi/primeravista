import React from "react";
import styled from "styled-components";
import {Container,Row} from 'react-grid-system';
import RegistrationForm from "../components/FormSignUp";
import TitleContainer from "../components/TitleContainer";
import NavbarLogin from "../components/NavBarLogin";



function Signup() {
    return (
        <div>
                   <NavbarLogin />
        <Container>   
     
     <RegistrationForm />
        </Container>
        </div>

    );
}

export default Signup;


