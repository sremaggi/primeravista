import React, { useState } from "react";
import Gallery from "../components/GalleryImage";
import {Container,Row,Col} from 'react-grid-system';
import TitleContainer from "../components/TitleContainer";
import ButtonContainer from "../components/ButtonContainer";
import { useLocation, useNavigate } from 'react-router-dom'
import ReactLoading from 'react-loading';
import NavbarLogin from "../components/NavBarLogin";
import { UserAuth } from "../context/AuthContext";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase";



function MyRequest() {
    const location = useLocation()
    
    const { doc } = location.state
    const navigate = useNavigate()
    const {user} = UserAuth();


    

    return (
        <div>
            <NavbarLogin title="Primera Vista" />
    <Container style={{width:"100%"}}>
     
     <Container>
     <Row style={{display:"flex",justifyContent:"center",padding:8,marginTop:10,color:"white",backgroundColor:"#2C5C90"}}>
        {doc.approved ? "Mi Reserva":"Mi Solicitud"}
     </Row>
     <Row style={{display:"flex",justifyContent:"center",padding:1,marginTop:10,color:"white",backgroundColor:"#9DC289"}}>
     <Col style={{display:"flex",margin:2,justifyContent:"center",backgroundColor:"#263028",padding:2}}>
Nombre
</Col>
<Col style={{display:"flex",margin:2,justifyContent:"center",backgroundColor:"#263028",padding:2}}>
Correo
</Col>
     </Row>
     <Row style={{display:"flex",justifyContent:"center",padding:5,marginTop:3,color:"white",backgroundColor:"#9DC289"}}>
     <Col style={{display:"flex",fontSize:12,margin:2,justifyContent:"center",backgroundColor:"#275B30",padding:10}}>
{doc.user.name}
</Col>
<Col style={{display:"flex",fontSize:12,margin:2,justifyContent:"center",backgroundColor:"#275B30",padding:10}}>
{doc.user.email}
</Col>
     </Row>
     <Row style={{display:"flex",justifyContent:"center",padding:1,marginTop:10,color:"white",backgroundColor:"#9DC289"}}>
     <Col style={{display:"flex",margin:2,justifyContent:"center",backgroundColor:"#263028",padding:2}}>
Monto
</Col>
<Col style={{display:"flex",margin:2,justifyContent:"center",backgroundColor:"#263028",padding:2}}>
Personas
</Col>
     </Row>
     <Row style={{display:"flex",justifyContent:"center",padding:5,marginTop:3,color:"white",backgroundColor:"#9DC289"}}>
     <Col style={{display:"flex",fontSize:12,margin:2,justifyContent:"center",backgroundColor:"#275B30",padding:10}}>
${doc.mount}
</Col>
<Col style={{display:"flex",fontSize:12,margin:2,justifyContent:"center",backgroundColor:"#275B30",padding:10}}>
{doc.user.qty}
</Col>
     </Row>

     <Row style={{backgroundColor:"#E3E3E3",display:"flex",justifyContent:"space-around"}}>
            <Col style={{display:"flex",flexDirection:"column",justifyContent:"space-around",padding:10}}>
            <Row style={{backgroundColor:"#8BC088",display:"flex",padding:5,justifyContent:"center"}}>
            LLegada 
            </Row>
            <Row style={{backgroundColor:"#8BC088",display:"flex",padding:5,justifyContent:"center"}}>
            {(doc.startDate.y )+" "} 
            / {(doc.startDate.d > 10 ? doc.startDate.m+" " : `0${doc.startDate.m} `)} 
             / {(doc.startDate.d > 10 ? doc.startDate.d+" " : `0${doc.startDate.d}`)}
            </Row>

            </Col>

            <Col style={{display:"flex",flexDirection:"column",justifyContent:"space-around",padding:10}}>
            <Row style={{backgroundColor:"#B26C41",display:"flex",padding:5,justifyContent:"center"}}>
            Salida 
            </Row>
            <Row style={{backgroundColor:"#B26C41",display:"flex",padding:5,justifyContent:"center"}}>
            {(doc.startDate.y )+" "} 
            / {(doc.finishDate.d > 10 ? doc.finishDate.m+" " : `0${doc.finishDate.m} `)} 
             / {(doc.finishDate.d > 10 ? doc.finishDate.d+" " : `0${doc.finishDate.d}`)}
            </Row>

            </Col>
    
            <Col style={{display:"flex",flexDirection:"column",justifyContent:"space-around",padding:10}}>
            <Row style={{backgroundColor:"#B3D5D3    ",display:"flex",padding:5,justifyContent:"center",fontSize:10}}>
            Telefono: {doc.user.phone} 
            </Row>
            <Row style={{backgroundColor:"white",display:"flex",padding:5,justifyContent:"center",fontSize:13}}>
             {doc.approved == true ? <div style={{color:"green",fontWeight:"bold"}}> { "Aceptado!"}</div>:<div style={{color:"orange",fontWeight:"bold"}}>{" "+ " En espera"}</div>} 
            </Row>
            </Col>
          </Row>
          <Row style={{display:"flex",justifyContent:"center",padding:1,marginTop:10,color:"white",backgroundColor:"#9DC289"}}>
     <Col style={{display:"flex",margin:2,justifyContent:"center",backgroundColor:"#263028",padding:2}}>
Comentario
</Col>

     </Row>
     <Row style={{display:"flex",justifyContent:"center",padding:5,marginTop:3,color:"white",backgroundColor:"#9DC289"}}>
     <Col style={{display:"flex",margin:2,justifyContent:"center",backgroundColor:"#275B30",padding:10,fontSize:10}}>
{doc.msg}
</Col>

     </Row>
     </Container>
   
    </Container>
    </div>

    );
}

export default MyRequest;



