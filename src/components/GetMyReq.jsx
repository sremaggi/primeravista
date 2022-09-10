import React, { useState,useContext,useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { firestore } from "../firebase";
import { UserAuth } from "../context/AuthContext";
import { Col, Container, Row } from "react-grid-system";
import { Link, useNavigate } from "react-router-dom";
import ReactLoading from 'react-loading';


function GetMyReqs() {
    const navigate = useNavigate()
    const [documents, setDocuments] = useState([]);
    const [loadDocs,setLoadDocs] = useState(false)
    const {user} = UserAuth();
     //Firebase Collection Reference query
 
      if (user?.displayName){
        const q = query(collection(firestore, "requests"),where("user.email", "==", user.email))
        const getDocuments = async () => {
          try{
            const data = await getDocs(q);
            setDocuments(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
            setLoadDocs(true)
          }catch(e){
            console.log(e)
          }
     
     };
     getDocuments();
      }






    return (
        <Container>
  
        {documents.map(d => (
        <Link to={"/myRequest"} state={{ doc: d }} style={{textDecoration:"none",color:"black"}}>
          <Row style={{backgroundColor:"#E3E3E3",display:"flex",justifyContent:"space-around"}}>
            <Col style={{display:"flex",flexDirection:"column",justifyContent:"space-around",padding:10}}>
            <Row style={{backgroundColor:"#8BC088",display:"flex",padding:5,justifyContent:"center",fontSize:10}}>
            LLegada
            </Row>
            <Row style={{backgroundColor:"#8BC088",display:"flex",padding:5,justifyContent:"center",fontSize:10}}>
            {(d.startDate.y )+" "} 
            / {(d.startDate.d > 10 ? d.startDate.m+" " : `0${d.startDate.m} `)} 
             / {(d.startDate.d > 10 ? d.startDate.d+" " : `0${d.startDate.d}`)}
            </Row>

            </Col>

            <Col style={{display:"flex",flexDirection:"column",justifyContent:"space-around",padding:10}}>
            <Row style={{backgroundColor:"#B26C41",display:"flex",padding:5,justifyContent:"center",fontSize:10}}>
            Salida 
            </Row>
            <Row style={{backgroundColor:"#B26C41",display:"flex",padding:5,justifyContent:"center",fontSize:10}}>
            {(d.startDate.y )+" "} 
            / {(d.finishDate.d > 10 ? d.finishDate.m+" " : `0${d.finishDate.m} `)} 
             / {(d.finishDate.d > 10 ? d.finishDate.d+" " : `0${d.finishDate.d}`)}
            </Row>

            </Col>
    
            <Col style={{display:"flex",flexDirection:"column",justifyContent:"space-around",padding:10}}>
            <Row style={{backgroundColor:"#B3D5D3    ",display:"flex",padding:5,justifyContent:"center",fontSize:8}}>
            Telefono: {d.user.phone} 
            </Row>
            <Row style={{backgroundColor:"white",display:"flex",padding:5,justifyContent:"center",fontSize:10}}>
             {d.approved == true ? <div style={{color:"green",fontWeight:"bold"}}> { "Aceptado!"}</div>:<div style={{color:"orange",fontWeight:"bold"}}>{" "+ " En espera"}</div>} 
            </Row>
            </Col>
          </Row>

          </Link>

        ))}
                <div style={{display:"flex",justifyContent:"center"}}>
            {loadDocs ? "" :<ReactLoading type={"spinningBubbles"} color={"green"} height={40} width={40} />}
            </div>
      </Container>
    );
}

export default GetMyReqs;





