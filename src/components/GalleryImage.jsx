// src/component/Gallery.js
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
class Gallery extends React.Component {
    render() {
        return (
            <div>
                <Carousel showIndicators={false} showThumbs={false} autoPlay interval="3000" transitionTime="50" infiniteLoop>
                    <div>
                        <img height={400} src="https://firebasestorage.googleapis.com/v0/b/primeravista-50b01.appspot.com/o/assests%2Fimages%2FWhatsApp%20Image%202022-07-29%20at%205.12.44%20PM.jpeg?alt=media&token=af4519c8-f370-41f2-b417-e57937b61455" alt=""  />
                        <p className="legend">My Photo 1</p>
                    </div>
                    <div>
                        <img height={400} src="https://firebasestorage.googleapis.com/v0/b/primeravista-50b01.appspot.com/o/assests%2Fimages%2FWhatsApp%20Image%202022-07-29%20at%206.11.57%20PM.jpeg?alt=media&token=445a6a51-8049-4d36-8792-2b11ea7d291f" alt="" />
                        <p className="legend">My Photo 2</p>
                    </div>
                    <div>
                        <img height={400} src="https://firebasestorage.googleapis.com/v0/b/primeravista-50b01.appspot.com/o/assests%2Fimages%2FWhatsApp%20Image%202022-07-29%20at%206.13.21%20PM.jpeg?alt=media&token=1fd8f167-a99b-4a16-a82b-69645717ca61" alt="" />
                        <p className="legend">My Photo 3</p>
                    </div>
                    <div>
                        <img height={400} src="https://firebasestorage.googleapis.com/v0/b/primeravista-50b01.appspot.com/o/assests%2Fimages%2Fkrika2.jpeg?alt=media&token=04d01a88-41f7-47a9-98f3-7539b8bc8118" alt="" />
                        <p className="legend">My Photo 4</p>
                    </div>
                </Carousel>
            </div>
        )
    };
}
export default Gallery