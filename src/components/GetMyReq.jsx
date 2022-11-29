import React, { useState,useContext,useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { firestore } from "../firebase";
import { UserAuth } from "../context/AuthContext";
import { Col, Container, Row } from "react-grid-system";
import { Link, useNavigate } from "react-router-dom";
import ReactLoading from 'react-loading';
import RequestPreview from "./RequestPreview";

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
        <Link to={"/myRequest"} state={{ doc: d }} style={{textDecoration:"none",color:"black",marginTop:10}}>
          <RequestPreview  doc={d} ></RequestPreview>
          </Link>

        ))}
                <div style={{display:"flex",justifyContent:"center"}}>
            {loadDocs ? "" :<ReactLoading type={"spinningBubbles"} color={"green"} height={40} width={40} />}
            </div>
      </Container>
    );
}

export default GetMyReqs;





