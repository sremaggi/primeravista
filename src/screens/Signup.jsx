import React from "react";
import styled from "styled-components";
import RegistrationForm from "../components/FormSignUp";
import TitleContainer from "../components/TitleContainer";



function Signup() {
    return (
        <div>
    <TitleContainer/>       
     <RegistrationForm />
        </div>

    );
}

export default Signup;


const Container = styled.div `
display: flex;
`;