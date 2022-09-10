import React, { useState,useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FcNext } from "react-icons/fc";
import { Col, Container, Row } from "react-grid-system";
import InfoImageContainer from "./InfoImage";
import Gallery from "./GalleryImage";
import InfoDescription from "./infoDescription";





function InfoContainer(props) {
    const [loadDocs,setLoadDocs] = useState(true)
    const [loadImages,setLoadImages] = useState(true)


    return (
 
        <div style={{backgroundColor:"#9DC289",marginTop:10,padding:10}}>
  
       <Row style={{display:"flex",justifyContent:"center",fontWeight:"bold",backgroundColor:"#2F5E20",padding:3,color:"white"}}>
        Características Generales
       </Row>
       <Row style={{display:"flex",justifyContent:"center",marginTop:10,padding:5,fontSize:12, backgroundColor:"#DCDCDC"}}>
        <Col style={{display:"flex",justifyContent:"center"}}>
        Cocina 
        </Col>
   
       </Row>
       <Row style={{display:"flex",justifyContent:"center",marginTop:3,padding:5,fontSize:12, backgroundColor:"#DCDCDC"}}>
        <Col style={{display:"flex",justifyContent:"center"}}>
        Estacionamiento
        </Col>
   
       </Row>
       <Row style={{display:"flex",justifyContent:"center",marginTop:3,padding:5,fontSize:12, backgroundColor:"#DCDCDC"}}>
        <Col style={{display:"flex",justifyContent:"center"}}>
        Wifi
        </Col>
   
       </Row>
       <Row style={{display:"flex",justifyContent:"center",marginTop:3,padding:5,fontSize:12, backgroundColor:"#DCDCDC"}}>
        <Col style={{display:"flex",justifyContent:"center"}}>
        Capacidad 6 Personas
        </Col>
 
       </Row>
       <Row style={{display:"flex",justifyContent:"center",marginTop:3,padding:5,fontSize:12, backgroundColor:"#DCDCDC"}}>
        <Col style={{display:"flex",justifyContent:"center"}}>
       1 Habitación
        </Col>

       </Row>
       <Row style={{display:"flex",justifyContent:"center",marginTop:3,padding:5,fontSize:12, backgroundColor:"#DCDCDC"}}>
        <Col style={{display:"flex",justifyContent:"center"}}>
        Baño
        </Col>
   
       </Row>
       <Row style={{display:"flex",justifyContent:"center",marginTop:3,padding:5,fontSize:12, backgroundColor:"#DCDCDC"}}>
        <Col style={{display:"flex",justifyContent:"center"}}>
        Bajada directo al mar
        </Col>
   
       </Row >

       <Row style={{display:"flex",justifyContent:"center",fontWeight:"bold",backgroundColor:"#2F5E20",padding:3,color:"white",marginTop:20}}>
        Habitación Principal
       </Row>
       <Row style={{display:"flex",justifyContent:"center",marginTop:3,padding:5,fontSize:14, backgroundColor:"#454545",color:"white"}}>
        <Col style={{display:"flex",justifyContent:"center"}}>

        </Col>
        <Col style={{display:"flex",justifyContent:"center"}}>
        Descripción
        </Col>
        <Col style={{display:"flex",justifyContent:"center"}}>
        Cantidad
        </Col>

       </Row>
       <InfoDescription title="Cama" desc="Super King" qty="1"  />
       <InfoDescription title="Almohada" desc="--" qty="4"  />
       <InfoDescription title="Plumón" desc="--" qty="1"  />
       <InfoDescription title="Velador" desc="--" qty="2"  />
       <InfoDescription title="Lámpara" desc="Lámpara de noche" qty="2"  />
       <InfoDescription title="Calefactor Eléctrico" desc="--" qty="1"/>
       <InfoDescription title="TV" desc="Conexión HDMI" qty="1"/>
       <InfoDescription title="Chromecast" desc="Versión 3 " qty="1"/>
       <InfoDescription title="Repelente" desc="Enchufe eléctrico" qty="1"/>
       <InfoDescription title="Alargador" desc="--" qty="1"/>
       <Row style={{display:"flex",justifyContent:"center",margin:10,padding:10}}>
        <img style={{width:"80%",height:300}} src="https://firebasestorage.googleapis.com/v0/b/primeravista-50b01.appspot.com/o/assests%2FhomeImages%2FIMG-1621.jpg?alt=media&token=1e6efb0f-7e91-41d5-ad26-2c64f51fbd68"></img>
       </Row>

       <Row style={{display:"flex",justifyContent:"center",fontWeight:"bold",backgroundColor:"#2F5E20",padding:3,color:"white",marginTop:20}}>
       Cocina
       </Row>
       <Row style={{display:"flex",justifyContent:"center",marginTop:3,padding:5,fontSize:14, backgroundColor:"#454545",color:"white"}}>
        <Col style={{display:"flex",justifyContent:"center"}}>

        </Col>
        <Col style={{display:"flex",justifyContent:"center"}}>
        Descripción
        </Col>
        <Col style={{display:"flex",justifyContent:"center"}}>
        Cantidad
        </Col>
        </Row>
        <InfoDescription title="Horno" desc="--" qty="1"/>
        <InfoDescription title="Hervidor" desc="--" qty="1"/>
       <InfoDescription title="Microondas" desc="--" qty="1"/>
       <InfoDescription title="Minipimer" desc="--" qty="1"/>
       <InfoDescription title="Platos" desc="Set Completo" qty="6 c/u"/>
       <InfoDescription title="Tazas" desc="--" qty="6"/>
       <InfoDescription title="Servicios" desc="--" qty="6 c/u"/>
       <InfoDescription title="Set Cuchillos" desc="--" qty="1"/>
       <InfoDescription title="Set Ollas" desc="--" qty="2"/>
       <InfoDescription title="Set Cucharas de palo" desc="--" qty="1"/>
       <InfoDescription title="Cucharas de plástico" desc="--" qty="1"/>
       <InfoDescription title="Vasos" desc="200ml" qty="6"/>
       <InfoDescription title="Tabla de picar" desc="--" qty="2"/>
       <InfoDescription title="Exprimidor Limón" desc="--" qty="1"/>
       <InfoDescription title="Sartenes" desc="Set Completo" qty="4"/>
       <InfoDescription title="Wok" desc="--" qty="1"/>
       <InfoDescription title="Potes ensalada" desc="--" qty="2"/>
       <InfoDescription title="Rallador" desc="--" qty="1"/>
       <InfoDescription title="Pelador" desc="--" qty="1"/>
       <InfoDescription title="Aliños" desc="--" qty="--"/>

       <Row style={{display:"flex",justifyContent:"center",margin:10,padding:10}}>
        <Col>
        <img style={{width:"100%",height:250}} src="https://firebasestorage.googleapis.com/v0/b/primeravista-50b01.appspot.com/o/assests%2FhomeImages%2FIMG-1606.jpg?alt=media&token=631ffb04-d56e-4e77-8f27-d59965a7c13e"></img>
        </Col>
        <Col>
        <img style={{width:"100%",height:250}} src="https://firebasestorage.googleapis.com/v0/b/primeravista-50b01.appspot.com/o/assests%2FhomeImages%2FIMG-1433.jpg?alt=media&token=acfffdd3-61b8-44da-93aa-1e62ab3e17ec"></img>
        </Col>

        
       </Row>
   
       
        </div>

 

    );
}

export default InfoContainer;


