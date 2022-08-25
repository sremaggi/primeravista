import React,{useContext} from "react";
import styled from "styled-components";
import {Container,Row,Col} from 'react-grid-system';
import TitleContainer from "../components/TitleContainer";
import NavbarLogin from "../components/NavBarLogin";
import App, { Context } from "../App";
import { Link } from "react-router-dom";



function Profile() {
    const context = useContext(Context)
    return (
        <div>
                 <TitleContainer />
        <Container >
   


    
        <Row style={{justifyContent:"center",backgroundColor:"#454545",color:"white",padding:5}}>
        Mi Perfil
        </Row>
        <div style={{marginTop:10,backgroundColor:"white",justifyContent:"center"}}>
        <Row style={{display:"flex",marginTop:5,backgroundColor:"white",justifyContent:"center"}}>
        <img src={context.user.picture} height={100} style={{display:"flex",margin:5}} />
        </Row>
        <Row style={{display:"flex",marginTop:5,backgroundColor:"white",justifyContent:"center"}}>
        {context.user.name}
        </Row>
        <Row style={{display:"flex",marginTop:5,backgroundColor:"white",justifyContent:"center"}}>
        {context.user.email}
        </Row>
        <Row style={{display:"flex",marginTop:5,backgroundColor:"white",justifyContent:"center"}}>
        <Link to='/'>
<button style={{backgroundColor:"red",color:"white",padding:10}} onClick={()=>{
    context.setUser({})
}}>Cerrar Sesión</button>
</Link>

        </Row>
        </div>
       </Container>
       </div>
    );
}



export default Profile;

const DivContainer = styled.div `
display: flex;
margin-top: 10;
p{
    font-size: small;
}
`;
