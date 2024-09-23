import React from 'react'
import "../organicproduct/OrganicProduct.css";
import opimg from "../../assets/opimg.png";
import bread from "../../assets/food/bread.png";
import star from "../../assets/star.png";
const OrganicProduct = () => {
    return (
        <div className='op-name'>
            <h1>Fresh <span>Organic</span> Products</h1>
            <div className='op-container'>
                <div className='op-container-left'>
                    <img src={opimg} />
                    <div>
                        <h1>Fresh Juice</h1>
                        <h1>100% Organic</h1>
                        <button>Shop Now</button>
                    </div>
                </div>
                <div className='op-container-right'>
                    {Array.from({ length: 6 }, (_, i) => (
                        <div className='op-card'>
                            <img src={bread} className='op-card-img'/>
                            <div className='op-card-info'>
                                <h1>Bread</h1>
                                <div className='star-rating'>
                                    {[1, 2, 3, 4, 5].map((starIndex) => (
                                        <img
                                            src={star}
                                            className="star"
                                        />
                                    ))}
                                </div>
                                <p>&#8377; 10</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OrganicProduct