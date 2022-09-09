import React, { useState } from "react";
import { Navigate, useLocation,useNavigate } from "react-router-dom";
import {Container,Row,Col} from 'react-grid-system';
import styled from "styled-components";
import NavbarLogin from "../components/NavBarLogin";
import TitleContainer from "../components/TitleContainer";
import ReactLoading from 'react-loading';
import { UserAuth } from "../context/AuthContext";
import { collection, addDoc,getDocs} from "firebase/firestore"; 
import { firestore } from "../firebase";



function Request() {
    const navigate = useNavigate();
    const {user} = UserAuth();
    const [name,setName] = useState(user.displayName);
    const [email,setEmail] = useState(user.email);
    const [qty,setQty] = useState(0);
    const [message, setMessage] = useState('');
    const [loadDocs,setLoadDocs] = useState(true)

    const [phone,setPhone] = useState("(+569)");
    const {state} = useLocation();
    const { mount,startDate,finishDate,days } = state;
    const handleMessageChange = event => {
        // 👇️ access textarea value
        setMessage(event.target.value);
        console.log(event.target.value);
      };


    return (
       <Container style={{backgroundColor:"white",marginTop:1,width:"100%"}}>
        <NavbarLogin title={"Solicitud de Reserva"} />
   
        <Row style={{display:"flex",margin:10,padding:20,backgroundColor:"#393E3A",borderRadius:100}}>
            <Col  style={{display:"flex",justifyContent:"center",fontSize:13,color:"white"}}>
            Completa los detalles de tu solicitud para poder brindarte una mejor experiencia al momento de contactarnos
            </Col>
         
        </Row>
        <Row style={{display:"flex",padding:10,backgroundColor:"#91C08D"}}>
            <Col  style={{display:"flex",justifyContent:"center",fontSize:15}}>
            Llegada
            </Col>
            <Col style={{display:"flex",justifyContent:"center"}}>
            {startDate.y + " / " +  startDate.m + " / "+ startDate.d}
            </Col>
        </Row>
        <Row style={{display:"flex",padding:10,backgroundColor:"#C09E8D"}}>
            <Col  style={{display:"flex",justifyContent:"center",fontSize:15}}>
            Salida
            </Col>
            <Col style={{display:"flex",justifyContent:"center"}}>
            {finishDate.y + " / " +  finishDate.m + " / "+ finishDate.d}
            </Col>
        </Row>

        <Row style={{display:"flex",padding:10,backgroundColor:"#C7FDEB"}}>
            <Col  style={{display:"flex",justifyContent:"center",fontSize:15}}>
            Dias totales
            </Col>
            <Col style={{display:"flex",justifyContent:"center"}}>
            {days.hd + days.ld + days.nd}
            </Col>
        </Row>
        <Row style={{display:"flex",padding:10,backgroundColor:"#DEDEDE"}}>
            <Col sm={4} xs={4} md={4} lg={4} xl={4} xxl={4} xxxl={4}  style={{display:"flex",justifyContent:"center",fontSize:15,alignItems:"center"}}>
            A nombre de 
            </Col>
            <Col sm={8} xs={8} md={8} lg={8} xl={8} xxl={8} xxxl={8} style={{display:"flex"}}>
            <input   
                style={{padding:10,backgroundColor:"white",height:20,width:"100%"}}
                placeholder='Nombre'
                 type="text" 
                 value={name}
                 onChange={(e) => setName(e.target.value)}
        />
            </Col>
        </Row>
        <Row style={{display:"flex",padding:10,backgroundColor:"#DEDEDE"}}>
            <Col sm={4} xs={4} md={4} lg={4} xl={4} xxl={4} xxxl={4}  style={{display:"flex",justifyContent:"center",fontSize:15,alignItems:"center"}}>
            Correo Electrónico
            </Col>
            <Col  sm={8} xs={8} md={8} lg={8} xl={8} xxl={8} xxxl={8} style={{display:"flex"}}>
            <input   
                style={{padding:10,backgroundColor:"white",height:20,width:"100%"}}
                placeholder='Email'
                 type="text" 
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
        />
            </Col>
        </Row>
        <Row style={{display:"flex",padding:10,backgroundColor:"#DEDEDE"}}>
            <Col sm={4} xs={4} md={4} lg={4} xl={4} xxl={4} xxxl={4}   style={{display:"flex",justifyContent:"center",fontSize:15,alignItems:"center"}}>
            Número de telefono
            </Col>
            <Col sm={8} xs={8} md={8} lg={8} xl={8} xxl={8} xxxl={8} style={{display:"flex"}}>
            <input   
                style={{padding:10,backgroundColor:"white",height:20,width:"100%"}}
                placeholder='Telefono'
                 type="text" 
                 value={phone}
                 onChange={(e) => setPhone(e.target.value)}
        />
            </Col>
        </Row>
        <Row style={{display:"flex",padding:10,backgroundColor:"#DEDEDE"}}>
            <Col sm={4} xs={4} md={4} lg={4} xl={4} xxl={4} xxxl={4}   style={{display:"flex",justifyContent:"center",fontSize:15,alignItems:"center"}}>
            Cantidad de personas
            </Col>
            <Col sm={8} xs={8} md={8} lg={8} xl={8} xxl={8} xxxl={8} style={{display:"flex"}}>
            <input   
                style={{padding:10,backgroundColor:"white",height:20,width:"100%"}}
                placeholder='personas'
                 type="number" 
                 value={qty}
                 onChange={(e) => setQty(e.target.value)}
        />
            </Col>
        </Row>
        <Row style={{display:"flex",padding:10,backgroundColor:"#DEDEDE"}}>
            <Col sm={4} xs={4} md={4} lg={4} xl={4} xxl={4} xxxl={4} style={{display:"flex",justifyContent:"center",fontSize:15,alignItems:"center"}}>
            Comentario
            </Col>
            <Col sm={8} xs={8} md={8} lg={8} xl={8} xxl={8} xxxl={8} style={{display:"flex",justifyContent:"center"}}>
            <textarea
        style={{fontSize:13,padding:10}}
        maxLength={250}
        rows={4}
        cols={20}
        id="message"
        name="message"
        value={message}
        onChange={handleMessageChange}
        />
            </Col>
        </Row>
        <Row style={{display:"flex",padding:10,backgroundColor:"#C2C363"}}>
            <Col  style={{display:"flex",justifyContent:"center",fontSize:15}}>
            Monto aproximado
            </Col>
            <Col style={{display:"flex",justifyContent:"center"}}>
            ${(days.hd + days.ld + days.nd)>6 ? mount*0.95 : mount}
            </Col>
        </Row>
        <Row style={{display:"flex",justifyContent:"center",marginTop:5}}>
            {loadDocs ?             <button
            
            onClick={()=>{
                if (phone.length <= 8 || qty < 1){
                    alert("Datos incorrectos!")
                }else{
                    setLoadDocs(false)
                    addDoc(collection(firestore, "requests"), { mount,startDate,finishDate,days,
                        user:{
                            name: user.displayName,
                            email:user.email,
                            phone: phone,
                            qty:qty,
                        },
                        msg:message,
                        timestamp: new Date(),
                        approved: false,
                    
                    } ).then(()=>{
                        alert("Solicitud enviada correctamente")
                        setLoadDocs(true)
                        navigate("/profile")
                    }).catch(e=>{
                        console.log(e)
                        alert("Error insert request ",e)
                    });
  
                }
            }}
            style={{display:"flex",width:"100%",backgroundColor:"red",color:"white",
            justifyContent:"center",padding:10,fontSize:15}}>Confirmar Solicitud</button> : 
            <div style={{display:"flex",flexDirection:"column"}}>
                <div style={{display:"flex",justifyContent:"center"}}>
                <ReactLoading type={"spinningBubbles"} color={"green"} height={40} width={40} />
                </div>
                <div style={{fontSize:10}}>
                Enviando solicitud
                </div>
                
                
                </div>}

        </Row>
       
  
   
       </Container>
    );
}

export default Request;

