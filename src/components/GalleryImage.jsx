// src/component/Gallery.js
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Col } from "react-grid-system";
class Gallery extends React.Component {
    render() {
        return (
            <div style={{display:"flex",marginTop:4,borderRadius:100}}>
                <Carousel    showIndicators={true}  showThumbs={false} showStatus={false} interval="3000" transitionTime="50" infiniteLoop>
                
                <div>
                        <img  height={450} style={{borderRadius:100}} src="https://firebasestorage.googleapis.com/v0/b/primeravista-50b01.appspot.com/o/assests%2FhomeImages%2FIMG-1630.jpg?alt=media&token=5b06921d-010c-4984-8a39-ae93f7a7fd78" alt="" />
                        <p style={{backgroundColor:"green"}} className="legend">Entrada</p>
                    </div>
                <div>
                        <img  height={450} style={{borderRadius:100}}  src="https://firebasestorage.googleapis.com/v0/b/primeravista-50b01.appspot.com/o/assests%2Fimages%2FIMG_2537.jpg?alt=media&token=b86c0087-f047-4f3a-b81c-ea9b17ed43fc" alt="" />
                        <p style={{backgroundColor:"green"}} className="legend">Fachada principal</p>
                    </div>
                    <div>
                        <img height={450} style={{borderRadius:100}}  src="https://firebasestorage.googleapis.com/v0/b/primeravista-50b01.appspot.com/o/assests%2FhomeImages%2FIMG-1449.jpg?alt=media&token=7633838d-ac9c-440a-9174-fd72ca190f1a" alt=""  />
                        <p style={{backgroundColor:"green"}}  className="legend">Patio lateral</p>
                    </div>
                    
                    <div>
                        <img height={450} style={{borderRadius:100}}  src="https://firebasestorage.googleapis.com/v0/b/primeravista-50b01.appspot.com/o/assests%2FhomeImages%2FIMG-1590.jpg?alt=media&token=6a1e3ff3-d095-49b9-b243-c4aeb8448770" alt="" />
                        <p style={{backgroundColor:"green"}}  className="legend">Comedor</p>
                    </div>
                    <div>
                        <img height={450} style={{borderRadius:100}}  src="https://firebasestorage.googleapis.com/v0/b/primeravista-50b01.appspot.com/o/assests%2FhomeImages%2FIMG-1582.jpg?alt=media&token=d2d406c2-87d1-4a15-96f9-36a5ea777710" alt="" />
                        <p style={{backgroundColor:"green"}}  className="legend">Balcón</p>
                    </div>
                    <div>
                        <img height={450} style={{borderRadius:100}}  src="https://firebasestorage.googleapis.com/v0/b/primeravista-50b01.appspot.com/o/assests%2FhomeImages%2FIMG-1441.jpg?alt=media&token=884a0c86-2267-48b7-ab67-a65da9909311" alt="" />
                        <p style={{backgroundColor:"green"}}  className="legend">Oficina</p>
                    </div>
                    <div>
                        <img height={450} style={{borderRadius:100}}  src="https://firebasestorage.googleapis.com/v0/b/primeravista-50b01.appspot.com/o/assests%2FhomeImages%2FIMG-1439.jpg?alt=media&token=f6cb3b21-fff2-42d4-b906-a37247c9798c" alt="" />
                        <p style={{backgroundColor:"green"}}  className="legend">Interior</p>
                    </div>
                    <div>
                        <img height={450} style={{borderRadius:100}}  src="https://firebasestorage.googleapis.com/v0/b/primeravista-50b01.appspot.com/o/assests%2FhomeImages%2FIMG-1433.jpg?alt=media&token=acfffdd3-61b8-44da-93aa-1e62ab3e17ec" alt="" />
                        <p style={{backgroundColor:"green"}}  className="legend">Cocina</p>
                    </div>
                    <div>
                        <img height={450} style={{borderRadius:100}}  src="https://firebasestorage.googleapis.com/v0/b/primeravista-50b01.appspot.com/o/assests%2FhomeImages%2FIMG-1621.jpg?alt=media&token=1e6efb0f-7e91-41d5-ad26-2c64f51fbd68" alt="" />
                        <p style={{backgroundColor:"green"}}  className="legend">Habitación</p>
                    </div>
           
                    
        
                    

                   
                    

                </Carousel>
            </div>
        )
    };
}
export default Gallery