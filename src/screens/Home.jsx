import React from "react";
import Gallery from "../components/GalleryImage";
import {Container,Row,Col} from 'react-grid-system';
import TitleContainer from "../components/TitleContainer";
import ButtonContainer from "../components/ButtonContainer";
import NavbarLogin from "../components/NavBarLogin";
import SocialButtons from "../components/SocialButtons";


function HomeScreen() {

    return (
        <div>

        <div style={{width:"100%"}}>
        <NavbarLogin/>
        </div>
 

     <Row>
     <Col sm={0} xs={0} md={0.3} lg={0.3} xl={0.3} xxl={0.3} xxxl={0.3} style={{display:"flex",justifyContent:"center"}} >

     </Col>
            <Col sm={12} xs={12} md={5.7} lg={5.7} xl={5.7} xxl={5.7} xxxl={5.7} style={{display:"flex",justifyContent:"center"}} >
            <Gallery />
            </Col>
  
            <Col sm={12} xs={12} md={5.9} lg={5.9} xl={5.9} xxl={5.9} xxxl={5.9} style={{marginBottom:10}}>
            <ButtonContainer />
            </Col>
         
        
         </Row>

       </div>
    );
}

export default HomeScreen;



