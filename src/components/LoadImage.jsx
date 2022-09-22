import React from 'react';
import { LazyLoadImage, trackWindowScroll }
  from 'react-lazy-load-image-component';

  function MyImage ({ props }){

    <div>
      <LazyLoadImage


        src={props.src} 
        width={props.width} />
    </div>
}
  
  export default MyImage;