import React, { useState,useContext,useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { firestore } from "../firebase";
import { UserAuth } from "../context/AuthContext";
import { Col, Container, Row } from "react-grid-system";
import { Link } from "react-router-dom";
import ReactLoading from 'react-loading';
import ReactStars from 'react-rating-stars-component'

function GetAllMyComments() {

    const [documents, setDocuments] = useState([]);
    const [loadDocs,setLoadDocs] = useState(false)
    const {user} = UserAuth();
     //Firebase Collection Reference query
     const q = query(collection(firestore, "comments"),where("active","==",true))
     useEffect(() => {
        const getDocuments = async () => {
            const data = await getDocs(q);
            setDocuments(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
            setLoadDocs(true)
        };

        getDocuments();
    }, []);

    console.log(documents)

    return (
        <>
  
        {documents.map(d => (
        <>
                  <Row style={{display:"flex",backgroundColor:"green"}}>
                  <img style={{display:"flex",width:200,height:150,marginTop:2,marginBottom:2}} src={d.img}></img>
            <Col style={{display:"flex",backgroundColor:"white",margin:2,flexDirection:"column"}}>
            <Row style={{display:"flex",margin:1,fontSize:5}}>
             <Col style={{display:"flex",justifyContent:"space-between"}}>
             <ReactStars  size={12} value={d.stars} />
             {d.timestamp} 
             </Col>
         
         
            </Row>  
            <Row style={{display:"flex",margin:5}}>
             <Col style={{display:"flex",margin:5,justifyContent:"start",fontWeight:"bold",alignItems:"center",fontSize:10}}>
             {d.userName} 
             </Col> 
     
            
            </Row>    
            <Row style={{display:"flex",margin:1,justifyContent:"center"}}>
            <textarea
            style={{resize:"none",width:"100%",margin:1,fontSize:7,padding:1,borderWidth:0}}
        maxLength={800}
        rows={5}
        cols={40}
        id="message"
        name="message"
        value={d.msg}

        />
            </Row>  
          
            </Col>
        </Row>
        </>

        ))}
            <div style={{display:"flex",justifyContent:"center"}}>
            {loadDocs ? "" :<ReactLoading type={"spinningBubbles"} color={"green"} height={40} width={40} />}
            </div>

      </>
    );
}

export default GetAllMyComments;





