import React from 'react';
import { FoodInfo } from '../../utility/utils';
import star from "../../assets/star.png";
import filledstar from "../../assets/filledstar.png";
import like from "../../assets/like.png";
import eye from "../../assets/eye.png";
const FoodCard = () => {
    return (
        <div className='food-container'>
            {FoodInfo.map((item, index) => (
                <div className="food-card" key={index}>
                    <img src={item.image} alt={item.name} class='food-card-img'/>
                    <p>{item.category}</p>
                    <h3>{item.name}</h3>
                    <div class='price-rating'>
                        {item.discountedprice !== 0 ? <h4> <s>&#8377; {item.price}</s> &#8377; {item.discountedprice}</h4> : <h4>&#8377; {item.price}</h4>}
                        <div className="star-rating">
                            {[1, 2, 3, 4, 5].map((starIndex) => (
                                <img
                                    key={starIndex}
                                    src={starIndex <= item.rating ? filledstar : star}
                                    alt={starIndex <= item.rating ? 'Filled Star' : 'Unfilled Star'}
                                    className="star"
                                />
                            ))}
                        </div>
                    </div>
                    <div class='cart-buttons'>
                        <button class='cart-add'>ADD TO CART &#8594;</button>
                        <div>
                            <button class='cart-btn'><img src={like}/></button>
                            <button class='cart-btn'><img src={eye}/></button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FoodCard;
