// src/component/Gallery.js
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
class Gallery extends React.Component {
    render() {
        return (
            <div style={{width:"100%",marginTop:4}}>
                <Carousel showIndicators={true}  showThumbs={false} showStatus={false} interval="3000" transitionTime="50" infiniteLoop>
                <div>
                        <img height={450} src="https://firebasestorage.googleapis.com/v0/b/primeravista-50b01.appspot.com/o/assests%2Fimages%2FIMG_2537.jpg?alt=media&token=b86c0087-f047-4f3a-b81c-ea9b17ed43fc" alt="" />
                        <p style={{backgroundColor:"green"}} className="legend">Fachada principal</p>
                    </div>
                    <div>
                        <img height={450} src="https://firebasestorage.googleapis.com/v0/b/primeravista-50b01.appspot.com/o/assests%2FhomeImages%2FIMG-1449.jpg?alt=media&token=7633838d-ac9c-440a-9174-fd72ca190f1a" alt=""  />
                        <p style={{backgroundColor:"green"}}  className="legend">Patio lateral</p>
                    </div>
                    <div>
                        <img height={450} src="https://firebasestorage.googleapis.com/v0/b/primeravista-50b01.appspot.com/o/assests%2FhomeImages%2FIMG-1469.jpg?alt=media&token=2c1acd31-3a63-4f33-a727-e40f32e16a8d" alt="" />
                        <p style={{backgroundColor:"green"}}  className="legend">Balcón</p>
                    </div>
                    <div>
                        <img height={450} src="https://firebasestorage.googleapis.com/v0/b/primeravista-50b01.appspot.com/o/assests%2FhomeImages%2FIMG-1441.jpg?alt=media&token=884a0c86-2267-48b7-ab67-a65da9909311" alt="" />
                        <p style={{backgroundColor:"green"}}  className="legend">Oficina</p>
                    </div>
                    <div>
                        <img height={450} src="https://firebasestorage.googleapis.com/v0/b/primeravista-50b01.appspot.com/o/assests%2FhomeImages%2FIMG-1439.jpg?alt=media&token=f6cb3b21-fff2-42d4-b906-a37247c9798c" alt="" />
                        <p style={{backgroundColor:"green"}}  className="legend">Interior</p>
                    </div>
                    <div>
                        <img height={450} src="https://firebasestorage.googleapis.com/v0/b/primeravista-50b01.appspot.com/o/assests%2FhomeImages%2FIMG-1433.jpg?alt=media&token=acfffdd3-61b8-44da-93aa-1e62ab3e17ec" alt="" />
                        <p style={{backgroundColor:"green"}}  className="legend">Equipamiento para tu comodidad</p>
                    </div>
                    <div>
                        <img height={450} src="https://firebasestorage.googleapis.com/v0/b/primeravista-50b01.appspot.com/o/assests%2FhomeImages%2FIMG-1443.jpg?alt=media&token=f32b2fb0-127e-4a9d-ac01-a8eea3009c2b" alt="" />
                        <p style={{backgroundColor:"green"}}  className="legend">Habitación con vista al mar</p>
                    </div>
                    
        


                   
                    

                </Carousel>
            </div>
        )
    };
}
export default Gallery