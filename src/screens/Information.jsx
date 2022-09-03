import React from "react";
import styled from "styled-components";
import InfoContainer from "../components/infoContainer";
import Navbar from "../components/NavBar";
import NavbarLogin from "../components/NavBarLogin";
import TitleContainer from "../components/TitleContainer";
import { UserAuth } from "../context/AuthContext";



function Information() {
    const {user} = UserAuth()
    return (
        <>
        <TitleContainer />
        {user?.displayName ? <NavbarLogin />: <Navbar />}
        <InfoContainer />
       </>
    );
}

export default Information;


const Container = styled.div `
display: flex;
`;