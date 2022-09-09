import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-grid-system";
import Navbar from "../components/NavBar";
import NavbarLogin from "../components/NavBarLogin";
import TitleContainer from "../components/TitleContainer";
import { UserAuth } from "../context/AuthContext";
import {Link, useNavigate } from 'react-router-dom';
import {ref,uploadBytesResumable,getDownloadURL} from "firebase/storage"
import ReactStars from 'react-rating-stars-component'
import ReactLoading from 'react-loading';

import { collection, addDoc,getDocs} from "firebase/firestore"; 
import { firestore } from "../firebase";

import { storage } from "../firebase";





function ComentsCreate() {
    let today = new Date().toDateString()
    const navigate = useNavigate();
    const {user} = UserAuth()
    const [stars, setStars] = useState(0);
    const [urlImage,setUrl] = useState("");
    const [percent, setPercent] = useState(0);
    const [file, setFile] = useState("");
    const [loadDocs,setLoadDocs] = useState(true)

    const [message, setMessage] = useState('');

    var example = {
        size: 23,
        value: stars,
        onChange: (newValue) => {
          setStars(newValue);
        }
      };
      var example2 = {
        size: 15,
        value: stars,
        onChange: (newValue) => {
          setStars(newValue);
        }
      };


    function handleUpload() {
        setLoadDocs(false)
        if (!file) {
            setLoadDocs(true)
            alert("Debes escoger una foto")
        }else{

        console.log(file.name+today+new Date().getMinutes().toString()+new Date().getSeconds().toString())
        const storageRef = ref(storage, `/commentsImages/${file.name+today+new Date().getMinutes().toString()+new Date().getSeconds().toString()}`)
       const uploadTask = uploadBytesResumable(storageRef, file)
       uploadTask.on(
        "state_changed",
        (snapshot) => {
            const percent = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );

            // update progress
            setPercent(percent);
        },
        (err) => alert(err),
        () => {
            // download url
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                
                addDoc(collection(firestore, "comments"), { 
                    userPhoto:`https://ui-avatars.com/api/name=${user.displayName.split(" ")[0]}&background=random`,
                    timestamp:today,
                    userName: user.displayName,
                    img:url,
                    stars:stars,
                    msg:message,
                    active:true,
                    email:user.email
                    } ).then(()=>{
                        setLoadDocs(true)
                        alert("Comentario creado correctamente")
                        navigate("/comments")
                        
        

                    }).catch(e=>{
                        setLoadDocs(true)
                        alert("Error creando comentario ",e)
                    });
        
            });
        },


    )
        }


    }   

    function handleChange(event) {
            setFile(event.target.files[0]);
        }

    const handleMessageChange = event => {
      // 👇️ access textarea value
      setMessage(event.target.value);
      console.log(event.target.value);
    };


    return (
       <Container>
       {user?.displayName ? <NavbarLogin title="Crear comentario" />:<Navbar />}

       <Container>
        <Row style={{marginTop:10}}>
            <Col style={{display:"flex",flexDirection:"column",padding:10}}>
            <label style={{fontSize:12,padding:5}}>Escoge tu mejor foto en Primera vista hospedaje!</label>
                        <input style={{height:30}} type="file" accept="image/*"  onEnded={()=>{console.log("termine")}} onChange={handleChange}/>


            </Col>
        </Row>
        <Row style={{display:"flex",padding:10,justifyContent:"center",alignItems:"center"}}>
            Cuentanos que te ha parecido tu experiencia en Primera Vista Hospedaje.

            </Row>
            <Row style={{display:"flex",padding:10,justifyContent:"center",alignItems:"center"}}>

            <ReactStars {...example} />
            </Row>
        <Row> 
        <textarea
        style={{fontSize:13,padding:10}}
        maxLength={250}
        rows={5}
        cols={99999}
        id="message"
        name="message"
        value={message}
        onChange={handleMessageChange}
        />
        </Row>

         
         

        <Row style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
            { file != "" && stars >0 && message != "" && loadDocs == true
            ?             <button 
            onClick={handleUpload}
       style={{display:"flex",padding:10,fontSize:15,color:"white",backgroundColor:"green",margin:1,justifyContent:"center"}}>
        Enviar Comentario</button>
            : ""
            }
            {file != "" && stars >0 && message != "" ? "" :<p style={{display:"flex",justifyContent:"center",color:"red"}}>Debes rellenar todos los campos</p>}

                        <div style={{display:"flex",justifyContent:"center"}}>
            {loadDocs ? "" :<ReactLoading type={"spinningBubbles"} color={"green"} height={40} width={40} />}
            </div>            

          
        </Row>
       </Container>

 
       </Container>
    );
}

export default ComentsCreate;


