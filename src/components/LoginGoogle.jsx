import React from "react";
import styled from "styled-components";
import GoogleButton from "react-google-button";
import GoogleLogin from "react-google-login"
import {UserAuth} from "../context/AuthContext"


function LoginGoogle() {
    const {googleSignIn}  = UserAuth();

    const onSuccess = (res) =>{
            console.log('SUCCESS ',res.profileObj)
    };
    const onFailure = (res) =>{
        console.log('FAIL ',res)
};
    return (
        <GoogleButtonContainer className="loginGoogle">
            <GoogleLogin 
            clientId="763177418378-t8bu7pbcf72so69v8go9sreis4inked5.apps.googleusercontent.com "
            cookiePolicy="single_host_origin"
            onSuccess={onSuccess}
            onFailure={onFailure}
            isSignedIn={true}
            />
        </GoogleButtonContainer>
    );
}

export default LoginGoogle;


const GoogleButtonContainer = styled.div `
display: flex;
  justify-content: center;

`;