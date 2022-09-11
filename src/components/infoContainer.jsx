import React, { useState,useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FcNext } from "react-icons/fc";
import { Col, Container, Row } from "react-grid-system";
import InfoImageContainer from "./InfoImage";
import Gallery from "./GalleryImage";
import InfoDescription from "./infoDescription";
import { GiBed,GiRiceCooker,GiSofa,GiDesk,GiCityCar } from "react-icons/gi";
import { FaToilet } from "react-icons/fa";
import { RiHotelBedLine } from "react-icons/ri";
import { WiSunrise } from "react-icons/wi";
import { MdOutlineYard } from "react-icons/md";









function InfoContainer(props) {
    const [loadDocs,setLoadDocs] = useState(true)
    const [loadImages,setLoadImages] = useState(true)


    return (
 
        <div style={{backgroundColor:"#9DC289",marginTop:10,padding:10}}>
  

       <Row style={{display:"flex", backgroundColor:"#454545",color:"white",justifyContent:"center",marginTop:10,padding:15,fontSize:15}}>
        Capacidad 6 Personas
       </Row>
       <Link to={"/information/bedroom"} style={{textDecoration:"none", color:"green"}}>
       <Row style={{display:"flex",justifyContent:"center",marginTop:3,padding:10,fontSize:15, backgroundColor:"#F3F3F3"}}>
       <Col style={{display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"}}>
       <GiBed size={40} style={{margin:10}}/> Habitación 
        </Col>
       </Row>
       </Link>
       <Link to={""} style={{textDecoration:"none", color:"green"}}>
       <Row style={{display:"flex",justifyContent:"center",marginTop:3,padding:10,fontSize:15, backgroundColor:"#F3F3F3"}}>
       <Col style={{display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"}}>
       <FaToilet size={35} style={{margin:10}}/> Baño 
        </Col>
       </Row>
       </Link>
      
       <Row style={{display:"flex",justifyContent:"center",marginTop:3,padding:15,fontSize:15, backgroundColor:"#F3F3F3"}}>
       <Col style={{display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center",color:"green"}}>
       Espacio Común
        </Col>
        
        <Col style={{display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center",flexDirection:"column"}}>

      <Link to={"/information/kitchen"} style={{textDecoration:"none", color:"green", backgroundColor:"#E5E5E5",width:"100%",margin:2}}>
      <Row style={{display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"}}>
      <GiRiceCooker size={20} style={{margin:10}}/> Cocina 
      </Row>
      </Link>
      <Link to={""} style={{textDecoration:"none", color:"green", backgroundColor:"#E5E5E5",width:"100%",margin:2}}>
      <Row style={{display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"}}>
      <RiHotelBedLine size={20} style={{margin:10}}/> Habitación 
      </Row>
      </Link>
      <Link to={""} style={{textDecoration:"none", color:"green", backgroundColor:"#E5E5E5",width:"100%",margin:2}}>
      <Row style={{display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"}}>
      <GiSofa size={20} style={{margin:10}}/> Living 
      </Row>
      </Link>
      <Link to={""} style={{textDecoration:"none", color:"green", backgroundColor:"#E5E5E5",width:"100%",margin:2}}>
      <Row style={{display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"}}>
      <GiDesk size={20} style={{margin:10}}/> Escritorio 
      </Row>
      </Link>
        </Col>
      
       </Row>
       <Link to={""} style={{textDecoration:"none", color:"green"}}>
       <Row style={{display:"flex",justifyContent:"center",marginTop:3,padding:15,fontSize:15, backgroundColor:"#F3F3F3"}}>
       <Col style={{display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"}}>
       <GiCityCar size={40} style={{margin:10}}/> Estacionamiento 
        </Col>
       </Row>
       </Link>
       <Link to={""} style={{textDecoration:"none", color:"green"}}>
       <Row style={{display:"flex",justifyContent:"center",marginTop:3,padding:15,fontSize:15, backgroundColor:"#F3F3F3"}}>
       <Col style={{display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"}}>
       <WiSunrise size={40} style={{margin:10}}/> Patio lateral 
        </Col>
       </Row>
       </Link>
       
       <Link to={""} style={{textDecoration:"none", color:"green"}}>
       <Row style={{display:"flex",justifyContent:"center",marginTop:3,padding:15,fontSize:15, backgroundColor:"#F3F3F3"}}>
       <Col style={{display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"}}>
       <MdOutlineYard size={40} style={{margin:10}}/> Patio inferior 
        </Col>
       </Row>
       </Link>
       
       

       
   
       
        </div>

 
        
    );
}

export default InfoContainer;

