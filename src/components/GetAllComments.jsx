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
    const [loadImages,setLoadImages] = useState(true)
    const {user} = UserAuth();
    
     //Firebase Collection Reference query
     const q = query(collection(firestore, "comments"),where("active","==",true))
     useEffect(() => {
        const getDocuments = async () => {
            const data = await getDocs(q);
            setDocuments(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
            setLoadDocs(true)
            setLoadImages(false)
            
        };

        getDocuments();
    }, []);



    return (
        < div style={{marginTop:10}}>

        {documents.map(d => (
  
              <Row style={{display:"flex",justifyContent:"center",borderColor:"green",borderWidth:1,marginTop:3,backgroundColor:"#235264",borderRadius:10}}>
          
            <Col   sm={5} xs={5} md={3} lg={3} xl={3} xxl={3} xxxl={3}  style={{display:"flex",justifyContent:"center",height:200,width:300}} >

            {loadImages ? "" :
                        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <ReactLoading  type={"spinningBubbles"} color={"green"} height={20} width={20} />
            </div>
            }
         
            <img onLoad={()=>setLoadImages(true)}   style={{display:"flex",width:"100%" ,height:"100%"}} src={d.img}></img>
            </Col>

            <Col sm={7} xs={7} md={9} lg={9} xl={9} xxl={9} xxxl={9} style={{display:"flex",flexDirection:"column",padding:5}}>
            <Row style={{display:"flex",margin:1,fontSize:5}}>
             <Col style={{display:"flex",justifyContent:"space-between",color:"#EEEEEE"}}>
             <ReactStars  size={12} value={d.stars} />
             {d.timestamp} 
             </Col>
         
         
            </Row>  
            <Row style={{display:"flex",margin:5}}>
             <Col style={{display:"flex",color:"white",margin:5,justifyContent:"start",alignItems:"center",fontSize:10}}>
             {d.userName} 
             </Col> 
     
            
            </Row>    
            <Row style={{display:"flex",margin:1,justifyContent:"center"}}>
            <textarea
            style={{resize:"none",backgroundColor:"#5E7A86",width:"100%",margin:1,fontSize:7,padding:3,borderWidth:0,color:"#EEEEEE"}}
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
 

        ))}

<div style={{display:"flex",justifyContent:"center"}}>
            {loadDocs ? "" :<ReactLoading type={"spinningBubbles"} color={"green"} height={40} width={40} />}
            </div>
      </ div>
    );
}

export default GetAllMyComments;





