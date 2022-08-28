import React, { useState,useContext,useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { firestore } from "../firebase";
import { UserAuth } from "../context/AuthContext";
import { Col, Container, Row } from "react-grid-system";
import { Link } from "react-router-dom";

function GetMyReqs() {

    const [documents, setDocuments] = useState([]);
    const {user} = UserAuth();
     //Firebase Collection Reference query
     const q = query(collection(firestore, "requests"),where("user.email", "==", user.email))
     useEffect(() => {
        const getDocuments = async () => {
            const data = await getDocs(q);
            setDocuments(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };

        getDocuments();
    }, []);

    console.log(documents)

    return (
        <Container>
  
        {documents.map(d => (
        <>
          <Row style={{backgroundColor:"#E3E3E3",display:"flex",justifyContent:"space-around"}}>
            <Col style={{display:"flex",flexDirection:"column",justifyContent:"space-around",padding:10}}>
            <Row style={{backgroundColor:"#8BC088",display:"flex",padding:5,justifyContent:"center"}}>
            LLegada 
            </Row>
            <Row style={{backgroundColor:"#8BC088",display:"flex",padding:5,justifyContent:"center"}}>
            {(d.startDate.y )} 
            / {(d.startDate.d > 10 ? d.startDate.m+" " : `0${d.startDate.m} `)} 
             / {(d.startDate.d > 10 ? d.startDate.d+" " : `0${d.startDate.d}`)}
            </Row>

            </Col>

            <Col style={{display:"flex",flexDirection:"column",justifyContent:"space-around",padding:10}}>
            <Row style={{backgroundColor:"#B26C41",display:"flex",padding:5,justifyContent:"center"}}>
            Salida 
            </Row>
            <Row style={{backgroundColor:"#B26C41",display:"flex",padding:5,justifyContent:"center"}}>
            {(d.startDate.y )} 
            / {(d.finishDate.d > 10 ? d.finishDate.m+" " : `0${d.finishDate.m} `)} 
             / {(d.finishDate.d > 10 ? d.finishDate.d+" " : `0${d.finishDate.d}`)}
            </Row>

            </Col>
    
            <Col style={{display:"flex",flexDirection:"column",justifyContent:"space-around",padding:10}}>
            <Row style={{backgroundColor:"#8BC088",display:"flex",padding:5,justifyContent:"center",fontSize:13}}>
            Telefono: {d.user.phone} 
            </Row>
            <Row style={{backgroundColor:"#8BC088",display:"flex",padding:5,justifyContent:"center",fontSize:13}}>
             {d.approved == true ? <div style={{color:"green"}}> { "Aceptado!"}</div>:<div style={{color:"orange"}}>{" "+ " En espera"}</div>} 
            </Row>
            </Col>
          </Row>

          </>

        ))}
    
      </Container>
    );
}

export default GetMyReqs;





