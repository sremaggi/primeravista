import React, { useEffect, useState } from "react";
import { Navigate, useLocation,useNavigate } from "react-router-dom";
import {Container,Row,Col} from 'react-grid-system';
import styled from "styled-components";
import NavbarLogin from "../components/NavBarLogin";
import TitleContainer from "../components/TitleContainer";
import ReactLoading from 'react-loading';
import { UserAuth } from "../context/AuthContext";
import { collection, addDoc,getDocs} from "firebase/firestore"; 
import { firestore } from "../firebase";

var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',timeZone: "America/Santiago" };


function Request() {

    useEffect(() => {
        //scroll to top on page load
        document.body.style.zoom = "100%";
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    const navigate = useNavigate();
    const {user} = UserAuth();
    const [name,setName] = useState(user.displayName);
    const [email,setEmail] = useState(user.email);
    const [qty,setQty] = useState();
    const [message, setMessage] = useState('');
    const [loadDocs,setLoadDocs] = useState(true)

    const [phone,setPhone] = useState("(+569)");
    const {state} = useLocation();
    const { mount,startDate,finishDate,days } = state;
    const handleMessageChange = event => {
        // 👇️ access textarea value
        setMessage(event.target.value);

      };


    return (
        <div>
                    <NavbarLogin title={"Solicitud de Reserva"} />
       <Container style={{marginTop:1,width:"100%"}}>

   
        <Row style={{display:"flex",margin:10,padding:10,backgroundColor:"#393E3A",borderRadius:10}}>
            <Col  style={{display:"flex",justifyContent:"center",fontSize:13,color:"white"}}>
            Completar Solicitud
            </Col>
         
        </Row>
        <Row style={{display:"flex",padding:10,backgroundColor:"#42AB06",margin:2}}>
            <Col  style={{display:"flex",justifyContent:"center",fontSize:15,color:"white"}}>
            Llegada
            </Col>
            <Col style={{display:"flex",justifyContent:"center",color:"white",fontSize:11,alignItems:"center"}}>
            { new Date(startDate.y,startDate.m-1,startDate.d ).toLocaleString("es-CL", options).toUpperCase()}
            </Col>
        </Row>
        <Row style={{display:"flex",padding:10,backgroundColor:"#42AB06",margin:2}}>
            <Col  style={{display:"flex",justifyContent:"center",fontSize:15,color:"white"}}>
            Salida
            </Col>
            <Col style={{display:"flex",justifyContent:"center",color:"white",fontSize:11}}>
            {new Date(finishDate.y,finishDate.m-1,finishDate.d ).toLocaleString("es-CL", options).toUpperCase()}
            </Col>
        </Row>

        <Row style={{display:"flex",padding:10,backgroundColor:"#42AB06",margin:2}}>
            <Col  style={{display:"flex",justifyContent:"center",fontSize:15,color:"white"}}>
            Noches totales
            </Col>
            <Col style={{display:"flex",justifyContent:"center",color:"white"}}>
            { days.nd -1}
            </Col>
        </Row>
        <Row style={{display:"flex",padding:10,backgroundColor:"#CACACA",color:"black",margin:2}}>
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
        <Row style={{display:"flex",padding:10,backgroundColor:"#CACACA",color:"black",margin:2}}>
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
        <Row style={{display:"flex",padding:10,backgroundColor:"#CACACA",color:"black",margin:2}}>
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
        <Row style={{display:"flex",padding:10,backgroundColor:"#CACACA",color:"black",margin:2}}>
            <Col sm={4} xs={4} md={4} lg={4} xl={4} xxl={4} xxxl={4}   style={{display:"flex",justifyContent:"center",fontSize:15,alignItems:"center"}}>
            Cantidad de personas
            </Col>
            <Col sm={8} xs={8} md={8} lg={8} xl={8} xxl={8} xxxl={8} style={{display:"flex"}}>
            <input   
                style={{padding:10,backgroundColor:"white",height:20,width:"100%"}}
                placeholder='6'
                 type="number" 
                 value={qty}
                 onChange={(e) => setQty(e.target.value)}
        />
            </Col>
        </Row>
        <Row style={{display:"flex",padding:10,backgroundColor:"#CACACA",color:"black",margin:2}}>
            <Col sm={4} xs={4} md={4} lg={4} xl={4} xxl={4} xxxl={4} style={{display:"flex",justifyContent:"center",fontSize:15,alignItems:"center"}}>
            Comentario
            </Col>
            <Col sm={8} xs={8} md={8} lg={8} xl={8} xxl={8} xxxl={8} style={{display:"flex",justifyContent:"center"}}>
            <textarea
             placeholder='Iré unos días a descansar con mi familia, llevaré a mi tortuga, es súper tranquila.'
        style={{fontSize:13,padding:10}}
        maxLength={300}
        rows={4}
        cols={100}
        id="message"
        name="message"
        value={message}
        onChange={handleMessageChange}
        />
            </Col>
        </Row>
        <Row style={{display:"flex",padding:10,backgroundColor:"#42AB06",margin:2}}>
            <Col  style={{display:"flex",justifyContent:"center",fontSize:15,color:"white"}}>
            Total a pagar 
            </Col>
            <Col style={{display:"flex",justifyContent:"center",color:"white"}}>
            ${mount}
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
             
                        alert("Error insert request ",e)
                    });
  
                }
            }}
            style={{padding:20,backgroundColor:"#037D77",color:"white",fontWeight:"bold"}}>Confirmar Solicitud</button> : 
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
       </div>
    );
}

export default Request;

