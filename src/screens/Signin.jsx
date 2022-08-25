import React, { useEffect,useState,useContext } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    useHref,
    Link
  } from "react-router-dom";

import jwtDecode from "jwt-decode";
import styled from "styled-components";
import HomeScreen from "./Home";
import {Container,Row,Col} from 'react-grid-system';
import { Context } from "../App";
import TitleContainer from "../components/TitleContainer";

const {REACT_APP_CLIENT_ID} = process.env;



function Signin() {
    const context = useContext(Context)


    function handleCallBackResponse(response){
      var userObject = jwtDecode(response.credential)

      context.setUser(userObject)

      

    }
    useEffect(()=>{
      /* global google*/ 
  
      if (google.accounts.id){
        google.accounts.id.initialize({
          client_id:REACT_APP_CLIENT_ID,
          callback: handleCallBackResponse,
         })
         google.accounts.id.renderButton(
          document.getElementById("signInDiv"),
          {theme:"outline",size:"large"}
         )
      }
      
  
    },[context.user])
    return (
      

      <div>
        {Object.keys(context.user) == 0 ? 
        <div> 
                 <Container> 
       <TitleContainer/>
       </Container>
         <Row style={{justifyContent:"center",backgroundColor:"#454545",color:"white",padding:5}}>
         Iniciar Sesión
         </Row>
         <Container>
         <DivContainer>
         <Row style={{justifyContent:"center",color:"white",padding:5}}>
         <img  src="https://firebasestorage.googleapis.com/v0/b/primeravista-50b01.appspot.com/o/assests%2Fimages%2Fkrika3.jpeg?alt=media&token=0609ac50-a4d1-4be3-909a-41c798ba7eab" height={80} width={80} style={{display:"flex",margin:1,borderRadius:100}}/>
         </Row>
 
         <Row style={{justifyContent:"center"}}>
         <p style={{fontSize:13,width:"100%",display:"flex",justifyContent:"center"}}>Te recomendamos ingresar con tu cuenta de google.</p>  

         <div id="signInDiv" style={{display:"flex",marginTop:1}}></div>
 
         </Row>
         </DivContainer>
        </Container>
        </div>
        :<HomeScreen />}

      </div>

  



    );
}

export default Signin;


const DivContainer = styled.nav `
display:"flex" ;
background-color:white ;




`;