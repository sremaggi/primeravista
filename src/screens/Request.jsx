import React, { useState } from "react";
import { Navigate, useLocation,useNavigate } from "react-router-dom";
import {Container,Row,Col} from 'react-grid-system';
import styled from "styled-components";
import NavbarLogin from "../components/NavBarLogin";
import TitleContainer from "../components/TitleContainer";
import { UserAuth } from "../context/AuthContext";
import { collection, addDoc,getDocs} from "firebase/firestore"; 
import { firestore } from "../firebase";



function Request() {
    const navigate = useNavigate();
    const {user} = UserAuth();
    const [name,setName] = useState(user.displayName);
    const [email,setEmail] = useState(user.email);
    const [phone,setPhone] = useState("");
    const {state} = useLocation();
    const { mount,startDate,finishDate,days } = state;



    return (
       <div>
        <TitleContainer />
        <NavbarLogin title={"Solicitud de Reserva"} />
        <Container style={{backgroundColor:"white",padding:20,marginTop:10}}>
        <Row style={{display:"flex",margin:10,padding:10,backgroundColor:"#91C08D"}}>
            <Col  style={{display:"flex",justifyContent:"center",fontSize:15,fontWeight:"bold"}}>
            Llegada
            </Col>
            <Col style={{display:"flex",justifyContent:"center"}}>
            {startDate.y + " / " +  startDate.m + " / "+ startDate.d}
            </Col>
        </Row>
        <Row style={{display:"flex",margin:10,padding:10,backgroundColor:"#C09E8D"}}>
            <Col  style={{display:"flex",justifyContent:"center",fontSize:15,fontWeight:"bold"}}>
            Salida
            </Col>
            <Col style={{display:"flex",justifyContent:"center"}}>
            {finishDate.y + " / " +  finishDate.m + " / "+ finishDate.d}
            </Col>
        </Row>
        <Row style={{display:"flex",margin:10,padding:10,backgroundColor:"#F1F1F1  "}}>
            <Col  style={{display:"flex",justifyContent:"center",fontSize:15,fontWeight:"bold"}}>
            Tarifa normal
            </Col>
            <Col style={{display:"flex",justifyContent:"center"}}>
            {days.nd}
            </Col>
        </Row>
        <Row style={{display:"flex",margin:10,padding:10,backgroundColor:"#FFE7B3  "}}>
            <Col  style={{display:"flex",justifyContent:"center",fontSize:15,fontWeight:"bold"}}>
            Tarifa media
            </Col>
            <Col style={{display:"flex",justifyContent:"center"}}>
            {days.ld}
            </Col>
        </Row>
        <Row style={{display:"flex",margin:10,padding:10,backgroundColor:"#FCC85A"}}>
            <Col  style={{display:"flex",justifyContent:"center",fontSize:15,fontWeight:"bold"}}>
            Tarifa alta
            </Col>
            <Col style={{display:"flex",justifyContent:"center"}}>
            {days.hd}
            </Col>
        </Row>
        <Row style={{display:"flex",margin:10,padding:10,backgroundColor:"#C7FDEB  "}}>
            <Col  style={{display:"flex",justifyContent:"center",fontSize:15,fontWeight:"bold"}}>
            Dias totales
            </Col>
            <Col style={{display:"flex",justifyContent:"center"}}>
            {days.hd + days.ld + days.nd}
            </Col>
        </Row>
        <Row style={{display:"flex",margin:10,padding:10,backgroundColor:"#F7F5BD"}}>
            <Col  style={{display:"flex",justifyContent:"center",fontSize:15,fontWeight:"bold"}}>
            Monto
            </Col>
            <Col style={{display:"flex",justifyContent:"center"}}>
            ${mount}
            </Col>
        </Row>
        <Row style={{display:"flex",margin:10,padding:10,backgroundColor:"#DEDEDE"}}>
            <Col  style={{display:"flex",justifyContent:"center",fontSize:15,fontWeight:"bold"}}>
            A nombre de 
            </Col>
            <Col style={{display:"flex"}}>
            <input   
                style={{padding:10,backgroundColor:"#EFFFED",height:20,width:"100%"}}
                placeholder='Nombre'
                 type="text" 
                 value={name}
                 onChange={(e) => setName(e.target.value)}
        />
            </Col>
        </Row>
        <Row style={{display:"flex",margin:10,padding:10,backgroundColor:"#DEDEDE"}}>
            <Col  style={{display:"flex",justifyContent:"center",fontSize:15,fontWeight:"bold"}}>
            Correo Electrónico
            </Col>
            <Col style={{display:"flex"}}>
            <input   
                style={{padding:10,backgroundColor:"#EFFFED",height:20,width:"100%"}}
                placeholder='Email'
                 type="text" 
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
        />
            </Col>
        </Row>
        <Row style={{display:"flex",margin:10,padding:10,backgroundColor:"#DEDEDE"}}>
            <Col  style={{display:"flex",justifyContent:"center",fontSize:15,fontWeight:"bold"}}>
            Número de telefono
            </Col>
            <Col style={{display:"flex"}}>
            <input   
                style={{padding:10,backgroundColor:"#EFFFED",height:20,width:"100%"}}
                placeholder='Telefono'
                 type="text" 
                 value={phone}
                 onChange={(e) => setPhone(e.target.value)}
        />
            </Col>
        </Row>
        <Row>
            <button
            
            onClick={()=>{
                if (phone.length <= 8){
                    alert("Debe ingresar numero de telefono!")
                }else{
                    addDoc(collection(firestore, "requests"), { mount,startDate,finishDate,days,
                        user:{
                            name: user.displayName,
                            email:user.email,
                            phone: phone,
                        },
                        timestamp: new Date(),
                        approved: false,
                    
                    } ).then(()=>{
                        alert("Solicitud enviada correctamente")
                        navigate("/profile")
                    }).catch(e=>{
                        console.log(e)
                        alert("Error insert request ",e)
                    });
  
                }
            }}
            style={{display:"flex",width:"100%",backgroundColor:"red",color:"white",
            justifyContent:"center",padding:20,fontSize:25}}>Enviar Solicitud</button>
        </Row>
       
        </Container>
        
   
       </div>
    );
}

export default Request;

