import React, { useCallback, useEffect, useRef, useState } from 'react'
import Textarea from 'react-expanding-textarea'
import { Col, Container, Row } from "react-grid-system";
import Navbar from "../components/NavBar";
import NavbarLogin from "../components/NavBarLogin";
import TitleContainer from "../components/TitleContainer";
import { UserAuth } from "../context/AuthContext";
import {Link, useNavigate } from 'react-router-dom';
import {BsPencil} from "react-icons/bs"
import GetAllMyComments from '../components/GetAllComments';
import ReactLoading from 'react-loading';







function Coments() {


    const navigate = useNavigate();
    const {user} = UserAuth()
    const [message, setMessage] = useState('');

    function refreshPage() {
        window.location.reload(true);
      }

    const handleMessageChange = event => {
      // 👇️ access textarea value
      setMessage(event.target.value);
   
    };

    return (
      <div>
         <NavbarLogin />
       <Container >
       <TitleContainer title="Comentarios"/>
      
       <div style={{display:"flex",justifyContent:"center",marginTop:10}}>
       
       <button 
       onClick={()=>{
         (user?.displayName) ? navigate("/comments/create") :
            alert("Debes iniciar sesión para realizar un comentario")
       }}
       style={{padding:20,backgroundColor:"#037D77",color:"white",fontWeight:"bold"}}>Escribir Comentario <BsPencil/>
       </button>

       </div>

       <div style={{marginBottom:30}}>
       <GetAllMyComments />
       </div>
       </Container>
       </div>
    );
}

export default Coments;


