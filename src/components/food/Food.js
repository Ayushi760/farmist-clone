import React, { useState } from 'react'
import "../food/Food.css"
import FoodCard from './FoodCard';
const Food = () => {
    const categories = ['Breakfast', 'Fruits', 'Salads'];
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };
    return (
        <div class='food-main'>
            <h1>New <span>Organic</span> Add-ons</h1>
            <div className='button-container'>
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => handleCategoryClick(category)}
                        className={selectedCategory === category ? 'active' : ''}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <FoodCard/>
        </div>
    )
}

export default Food