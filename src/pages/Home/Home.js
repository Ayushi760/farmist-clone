import React from 'react'
import "../Home/Home.css"
import Header from '../../components/Header/Header'
import organicIcon from "../../assets/Organic.png"
import hero from "../../assets/Hero.png"
import Feature from '../../components/feature/Feature'
import Category from '../../components/category/Category'
import Food from '../../components/food/Food'
import ProductVideo from '../../components/productvideo/ProductVideo'
import OrganicProduct from '../../components/organicproduct/OrganicProduct'
const Home = () => {
    return (
        <div>
            <div class='main-top'>
                <Header />
                <div class='main-banner'>
                    <div class='main-banner-left'>
                        <img src={organicIcon} />
                        <h1>Live on</h1>
                        <h2>fruits and vegetables</h2>
                        <h1>to live Healthy</h1>
                        <h3>100% Healthy & Fresh</h3>
                        <button>Shop Now</button>
                    </div>
                    <div class='main-banner-right'>
                        <img src={hero} />
                    </div>
                </div>
                <Feature/>
            </div>
            <div class='main-category'>
            <Category/>
            </div>
            <Food/>
            <ProductVideo/>
            <OrganicProduct/>
        </div>
    )
}

export default Home