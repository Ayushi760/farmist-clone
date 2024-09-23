import React from 'react'
import { Categories } from '../../utility/utils'
import "../category/Category.css"
const Category = () => {
  return (
    <div class='category-main'>
      {Categories.map((item, index) => (
        <div class='category'>
          <img src={item.image} />
          <div class='category-info'>
            <p>{item.description}</p>
            <h2>{item.name}</h2>
            <button>Shop Now</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Category