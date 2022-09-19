import React,{useContext} from "react";
import styled from "styled-components";
import {Container,Row,Col} from 'react-grid-system';
import TitleContainer from "../components/TitleContainer";
import NavbarLogin from "../components/NavBarLogin";
import App, { Context } from "../App";
import { Link,useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { collection, addDoc,getDocs} from "firebase/firestore"; 
import GetMyReqs from "../components/GetMyReq";



function Profile() {
    const { user, logOut } = UserAuth();
    const {navigate} = useNavigate();
  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }
    return (
        <div>
        <NavbarLogin />
        <Container >
    
        <div style={{marginTop:10,justifyContent:"center"}}>
        <Row style={{display:"flex",marginTop:5,justifyContent:"center"}}>
        <img src={user.photoURL} height={100} style={{display:"flex",margin:5}} />
        </Row>
        <Row style={{display:"flex",marginTop:5,justifyContent:"center"}}>
        {user.displayName}
        </Row>
        <Row style={{display:"flex",marginTop:5,justifyContent:"center"}}>
        {user.email}
        </Row>
        <Row style={{display:"flex",marginTop:5,justifyContent:"center"}}>
        <Link to='/'>
<button style={{backgroundColor:"red",color:"white",padding:10}} onClick={handleSignOut}>Cerrar Sesión</button>
</Link>

        </Row>
        <Row style={{display:"flex",padding:10,marginTop:5,justifyContent:"center",marginTop:20,fontSize:18}}>
          
          Mis Solicitudes
          </Row>
          <GetMyReqs />
        {user.email == "seba.rf96@gmail.com" || user.email == "ant.niasbravo@gmail.com" ?
        <div style={{display:"flex",marginTop:5,justifyContent:"center",alignItems:"center",flexDirection:"column",padding:10}}>
        Rol: Admin
        <Link 
        style={{display:"flex",marginTop:5,textDecoration:"none",justifyContent:"center",flexDirection:"column",padding:10}}
        to={"/admin"}>
        <button 
    
    style={{backgroundColor:"purple",padding:20,color:"white",fontSize:20}}> Panel de administración</button>
        </Link>

        </div>          
        : 
        <Row style={{display:"flex",justifyContent:"center",fontSize:10}}>
         Rol: Usuario
        </Row>
        }


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
