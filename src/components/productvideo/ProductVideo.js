import React from 'react'
import "../productvideo/ProductVideo.css";
import videoImage from "../../assets/productvideo.png";
import playIcon from "../../assets/play.png"
const ProductVideo = () => {
  return (
    <div class='product-video-container'>
        <img src={videoImage}/>
        <div>
            <h1>Everyday Fresh & Clean</h1>
            <img src={playIcon} class='play-btn'/>
        </div>
    </div>
  )
}

export default ProductVideo