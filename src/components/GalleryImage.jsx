// src/component/Gallery.js
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
class Gallery extends React.Component {
    render() {
        return (
            <div style={{width:"100%"}}>
                <Carousel showIndicators={false} showThumbs={false} autoPlay interval="3000" transitionTime="50" infiniteLoop>
                <div>
                        <img height={400} src="https://firebasestorage.googleapis.com/v0/b/primeravista-50b01.appspot.com/o/assests%2Fimages%2FIMG_2537.jpg?alt=media&token=b86c0087-f047-4f3a-b81c-ea9b17ed43fc" alt="" />
                        <p className="legend">Fachada principal</p>
                    </div>
                    <div>
                        <img height={400} src="https://firebasestorage.googleapis.com/v0/b/primeravista-50b01.appspot.com/o/assests%2Fimages%2Fimage_6483441-2.JPG?alt=media&token=9a20a354-7dfc-4348-8a79-8a8265a16313" alt=""  />
                        <p className="legend">Patio lateral</p>
                    </div>
                    <div>
                        <img height={400} src="https://firebasestorage.googleapis.com/v0/b/primeravista-50b01.appspot.com/o/assests%2Fimages%2Fimage_6483441.JPG?alt=media&token=b797530c-c6f8-45de-9e11-3324e97e0514" alt="" />
                        <p className="legend">Balcón</p>
                    </div>
                    <div>
                        <img height={400} src="https://firebasestorage.googleapis.com/v0/b/primeravista-50b01.appspot.com/o/assests%2Fimages%2FWhatsApp%20Image%202022-07-29%20at%205.12.44%20PM.jpeg?alt=media&token=af4519c8-f370-41f2-b417-e57937b61455" alt="" />
                        <p className="legend">Comedor</p>
                    </div>
                    <div>
                        <img height={400} src="https://firebasestorage.googleapis.com/v0/b/primeravista-50b01.appspot.com/o/assests%2Fimages%2Fimage_67206145.JPG?alt=media&token=0fc75761-16a7-45ab-bc5b-3cdf87924eae" alt="" />
                        <p className="legend">Interior</p>
                    </div>
                    <div>
                        <img height={400} src="https://firebasestorage.googleapis.com/v0/b/primeravista-50b01.appspot.com/o/assests%2Fimages%2FIMG_2625.jpg?alt=media&token=94e7c75a-c57f-4bd5-9c62-d00adb4bb8f6" alt="" />
                        <p className="legend">Puedes traer a tu mascota</p>
                    </div>
                    <div>
                        <img height={400} src=" https://firebasestorage.googleapis.com/v0/b/primeravista-50b01.appspot.com/o/assests%2Fimages%2FIMG_2572.jpg?alt=media&token=7765ec37-1961-4633-ad7a-6bceb9ecb47b" alt="" />
                        <p className="legend">Bajada</p>
                    </div>


                   
                    

                </Carousel>
            </div>
        )
    };
}
export default Gallery