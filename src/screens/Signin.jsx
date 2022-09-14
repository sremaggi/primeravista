import React, { useEffect} from "react";
import {
    useNavigate
  } from "react-router-dom";
import styled from "styled-components";
import {Container,Row} from 'react-grid-system';
import TitleContainer from "../components/TitleContainer";
import GoogleButton from "react-google-button";
import { UserAuth } from "../context/AuthContext";
import SigninForm from "../components/FormSignIn";
import NavbarLogin from "../components/NavBarLogin";

function Signin() {

    var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
    const navigate = useNavigate();
    const {googleSignIn,setUser,user} = UserAuth();
    const handleGoogleSignin = async () =>{
      try {
          await googleSignIn();
      }catch(e){
        alert(e)
      }
    }

    useEffect(() => {
      if (user != null) {
        navigate('/Home');
      }
    }, [user]);

    return (

       <div> 
             <NavbarLogin />
       <Container> 
    
   
         <Row style={{justifyContent:"center",margin:2}}>

{
 isSafari || isChrome ? 
 <div >
   <p style={{fontSize:10,justifyContent:"center",display:"flex",color:"purple"}}>Te recomendamos ingresar con tu cuenta google!</p>
 <GoogleButton title="google" style={{padding:1}} onClick={handleGoogleSignin}>Iniciar Sesión</GoogleButton>
 </div>
 :
 <p style={{fontSize:10,width:"100%",display:"flex",justifyContent:"center"}}>Para iniciar Sesión con google entra directamente en Safari o Chrome</p> 
 }
</Row>
 
         <DivContainer>
         <Row style={{justifyContent:"center",color:"white",padding:5}}>
         <img  src="https://firebasestorage.googleapis.com/v0/b/primeravista-50b01.appspot.com/o/assests%2Fimages%2Fkrika3.jpeg?alt=media&token=0609ac50-a4d1-4be3-909a-41c798ba7eab" height={100} width={100} style={{display:"flex",margin:1,borderRadius:100}}/>
         </Row>
   
         <SigninForm />


         </DivContainer>
        </Container>
        </div>

    );
}

export default Signin;


const DivContainer = styled.nav `
display:"flex" ;





`;