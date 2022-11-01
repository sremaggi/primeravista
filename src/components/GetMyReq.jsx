import React, { useState,useContext,useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { firestore } from "../firebase";
import { UserAuth } from "../context/AuthContext";
import { Col, Container, Row } from "react-grid-system";
import { Link, useNavigate } from "react-router-dom";
import ReactLoading from 'react-loading';

const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timeZone: 'America/Santiago',
}

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
            {new Date(d.startDate.y, d.startDate.m -1, d.startDate.d)
                  .toLocaleString('es-CL', options)
                  .toUpperCase()}
            </Row>

            </Col>

            <Col style={{display:"flex",flexDirection:"column",justifyContent:"space-around",padding:10}}>
            <Row style={{backgroundColor:"#B26C41",display:"flex",padding:5,justifyContent:"center",fontSize:10}}>
            Salida 
            </Row>
            <Row style={{backgroundColor:"#B26C41",display:"flex",padding:5,justifyContent:"center",fontSize:10}}>
            {new Date(d.finishDate.y, d.finishDate.m -1, d.finishDate.d)
                  .toLocaleString('es-CL', options)
                  .toUpperCase()}
            </Row>

            </Col>
    
            <Col style={{display:"flex",flexDirection:"column",justifyContent:"space-around",padding:10}}>
            <Row style={{backgroundColor:"#B3D5D3    ",display:"flex",padding:5,justifyContent:"center",fontSize:8}}>
            Telefono: {d.user.phone} 
            </Row>
            <Row
                  style={{
                    backgroundColor: 'white',
                    display: 'flex',
                    padding: 5,
                    justifyContent: 'center',
                    fontSize: 10,
                  }}
                >
                  {d.approved === true ? (
                    <div style={{ color: 'green', fontWeight: 'bold' }}>
                      {' '}
                      Aceptado!
                    </div>
                  ) : ( d.rejected === true ? 
                    <div style={{ color: 'red', fontWeight: 'bold' }}>
                      {' ' + ' Rechazado'}
                    </div>
                  : <div style={{ color: 'orange', fontWeight: 'bold' }}>
                  {' ' + ' En espera'}
                </div>)}
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





