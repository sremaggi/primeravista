import React, { useEffect } from "react";
import styled from "styled-components";
import {Container,Row} from 'react-grid-system';
import RegistrationForm from "../components/FormSignUp";
import TitleContainer from "../components/TitleContainer";
import NavbarLogin from "../components/NavBarLogin";



function Signup() {
    useEffect(() => {
        //scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
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


