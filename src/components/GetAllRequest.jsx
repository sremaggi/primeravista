import React, { useState,useContext,useEffect } from "react";
import { collection, query, where, getDocs,updateDoc, doc } from "firebase/firestore";
import { firestore } from "../firebase";
import { UserAuth } from "../context/AuthContext";
import { Col, Container, Row } from "react-grid-system";
import { Link, useNavigate } from "react-router-dom";
import ReactLoading from 'react-loading';


function GetAllRequest() {
    const navigate = useNavigate()
    const [documents, setDocuments] = useState([]);
    const [loadDocs,setLoadDocs] = useState(false)
    const [loadApr,setLoadApr] = useState(true)
    const {user} = UserAuth();
     //Firebase Collection Reference query
 
      if (user?.displayName){
        const q = query(collection(firestore, "requests"))
        const getDocuments = async () => {
         const data = await getDocs(q);
         setDocuments(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
         setLoadDocs(true)
     };
     getDocuments();
      }


    return (
        <Container>
  
        {documents.map(d => (
          <Container>
        <Row  style={{backgroundColor:"grey",display:"flex",justifyContent:"center",marginTop:20,padding:3,color:"white",fontSize:10,flexDirection:"column"}}>
          id: {d.id} 
          <Row style={{backgroundColor:"#273A2B",display:"flex",justifyContent:"center",marginTop:10,padding:3,color:"white",fontSize:10}}>
              {d.user.name}
          </Row>
          <Row style={{backgroundColor:"#273A2B",display:"flex",justifyContent:"center",marginTop:1,padding:3,color:"white",fontSize:10}}>
              {d.user.email}
          </Row>
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
            <Row style={{backgroundColor:"#B3D5D3    ",display:"flex",padding:5,justifyContent:"center",fontSize:10,color:"black"}}>
            Telefono: {d.user.phone} 
            </Row>
            <Row style={{backgroundColor:"white",display:"flex",padding:5,justifyContent:"center",fontSize:10}}>
             {d.approved == true ? <div style={{color:"green",fontWeight:"bold"}}> { "Aceptado!"}</div>:<div style={{color:"orange",fontWeight:"bold"}}>{" "+ " En espera"}</div>} 
            </Row>
            </Col>
          </Row>
          <Row style={{backgroundColor:"#273A2B",display:"flex",justifyContent:"center",marginTop:1,padding:3,color:"white",fontSize:10}}>
              {d.user.qty} Personas
          </Row>
          <Row style={{backgroundColor:"#273A2B",display:"flex",justifyContent:"center",marginTop:1,padding:3,color:"white",fontSize:10}}>
              ${d.mount} 
          </Row>
          <Row style={{backgroundColor:"#273A2B",display:"flex",justifyContent:"center",marginTop:1,padding:6,color:"white",fontSize:9}}>
              {d.msg} 
          </Row>
          {loadApr ? 
                    <Row>
                    <button 
                    onClick={()=>{
                      setLoadApr(false)
                      const docRef = doc(firestore, "requests", d.id);
                      d.approved = true
                      updateDoc(docRef, d).then(()=>{
                        alert("Aprobado exitoso")
                        setLoadApr(true)
                      }).catch(e=>{
                        alert(e)
                      })
                   
                    }}
                    style={{width:"100%",padding:10,backgroundColor:"red",color:"white"}}>
                      Aprobar
                    </button>
                  </Row>
          :
          <div style={{display:"flex",justifyContent:"center"}}>
          <ReactLoading type={"spinningBubbles"} color={"green"} height={30} width={30} />
          </div>
          }


          </Row>
          </Container>
        ))}
                <div style={{display:"flex",justifyContent:"center",marginTop:10}}>
            {loadDocs ? "" :<ReactLoading type={"spinningBubbles"} color={"green"} height={40} width={40} />}
            </div>
      </Container>
    );
}

export default GetAllRequest;





