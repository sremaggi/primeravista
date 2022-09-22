import React, { useEffect } from "react";
import Gallery from "../components/GalleryImage";
import {Container,Row,Col} from 'react-grid-system';
import TitleContainer from "../components/TitleContainer";
import ButtonContainer from "../components/ButtonContainer";
import NavbarLogin from "../components/NavBarLogin";
import GetAllReqs from "../components/GetAllRequest";
import GetMyReqs from "../components/GetMyReq";


function Admin() {
    useEffect(() => {
        //scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    return (

        
        <div style={{width:"100%"}}>
     
     <NavbarLogin title="Primera Vista" />
     <Container>
        <Row style={{display:"flex",justifyContent:"center",marginTop:10,fontSize:15,backgroundColor:"purple",color:"white",padding:10}}>
            Gestión Solicitudes
        </Row>
     <GetAllReqs />
     </Container>
       
       </div>

    );
}

export default Admin;



