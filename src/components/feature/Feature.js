import React from 'react'
import "../feature/Feature.css"
import feature1 from "../../assets/feature/feature1.png"
import feature2 from "../../assets/feature/feature2.png"
import feature3 from "../../assets/feature/feature3.png"
import feature4 from "../../assets/feature/feature4.png"
const Feature = () => {
    return (
        <div class='feature-main'>
            <div class='feature-card'>
                <img src={feature1} width={80} height={80}/>
                <div class='feature-info'>
                    <h1>Grocery</h1>
                    <p>Fresh grocery delivered</p>
                </div>
            </div>
            <div class='feature-card'>
                <img src={feature2} width={80} height={80}/>
                <div class='feature-info'>
                    <h1>Salad</h1>
                    <p>Order nutritious salads</p>
                </div>
            </div>
            <div class='feature-card'>
                <img src={feature3} width={80} height={80}/>
                <div class='feature-info'>
                    <h1>Cart Value</h1>
                    <p>Cart value review your cart</p>
                </div>
            </div>
            <div class='feature-card'>
                <img src={feature4} width={80} height={80}/>
                <div class='feature-info'>
                    <h1>Grocery</h1>
                    <p>Fresh grocery delivered</p>
                </div>
            </div>
        </div>
    )
}

export default Feature