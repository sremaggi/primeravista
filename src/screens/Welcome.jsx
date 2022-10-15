import React from "react";
import Gallery from "../components/GalleryImage";
import {Container,Row,Col} from 'react-grid-system';
import ButtonContainer from "../components/ButtonContainer";
import Navbar from "../components/NavBar";
import TitleContainer from "../components/TitleContainer";
import { UserAuth} from "../context/AuthContext";
import HomeScreen from "./Home";
import NavbarLogin from "../components/NavBarLogin";
import SocialButtons from "../components/SocialButtons";
import CalendarComponent from "../components/Calendar";
import { UseWindowSize } from "../context/UseWidth";
import SocialHorizontal from "../components/SocialHorizontal";
import ResponsiveAppBar from "../components/NavBar";



function WelcomeScreen() {
    const {user} = UserAuth();
    const [width, height] = UseWindowSize()
    console.log(width)
    return (
        <div>
     
     <NavbarLogin />

         {width > 733 ?
        
            <Row >    
            <Col sm={8} xs={8} md={8} lg={8} xl={6} xxl={6} xxxl={6} style={{display:"flex",justifyContent:"start",marginTop:2,flexDirection:"column",alignContent:"center",alignItems:"center"}} >
            <Gallery  />
            
            </Col>
            <Col sm={4} xs={4} md={4} lg={4} xl={6} xxl={6} xxxl={6} style={{display:"flex",marginBottom:10,marginTop:5,justifyContent:"center",alignContent:"center",alignItems:"center",flexDirection:"column"}}>
    
            <Row style={{padding:5,borderRadius:2,color:"white",fontSize:10,alignItems:"center",alignContent:"center",margin:30}}>
              <Col  sm={12} xs={12} md={12} lg={12} xl={12} xxl={12} xxxl={12} style={{display:"flex",backgroundColor:"#454545",padding:10,borderRadius:5,fontSize:13,textJustify:"inter-word",textAlign:"justify"}}>
              Bienvenid@ a hospedaje Primera Vista, aquí encuentrarás toda la información respecto a la casa y podrás crear tu perfil para realizar una reserva o un comentario. Además, facilitamos el canal de comunicación en la pestaña de contacto, con el fin de garantizar una buena experiencia para nuestros huéspedes.

              </Col>
           
              <Col  sm={12} xs={12} md={12} lg={12} xl={12} xxl={12} xxxl={12} style={{justifyContent:"center",width:"100%",marginTop:5}}>
              <ButtonContainer />
              </Col>
         
            </Row>
            
            
            
            </Col>
            </Row>
         
        
            
            :
            <Row>
            <Col sm={12} xs={12} md={12} lg={12} xl={6} xxl={6} xxxl={6} style={{display:"flex",justifyContent:"center"}} >
            <Gallery />
            </Col>
              <Col sm={12} xs={12} md={12} lg={12} xl={6} xxl={6} xxxl={6} style={{marginBottom:10}}>
              <Container>
              <ButtonContainer />
              </Container>
           
              </Col>
              </Row>
            }

  
        
       

        
        </div>
    );
}

export default WelcomeScreen;

