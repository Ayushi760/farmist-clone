import React from 'react'
import "../Header/Header.css"
import bagIcon from "../../assets/bag.png"
import accountIcon from "../../assets/account.png"
import searchIcon from "../../assets/search.png"
import locationIcon from "../../assets/location.png"
const Header = () => {
    return (
        <div class='main-header'>
            <div class='head-text'>Farmiest!</div>
            <div class='head-mid'>
                <a>Home</a>
                <a>Store</a>
                <a>Contact</a>
                <a>About</a>
            </div>
            <div class='head-right'>
                <div class='search-location'>
                    <button class='head-search-location'><img src={searchIcon} /></button>
                    <button class='head-search-location'><img src={locationIcon} /></button>
                </div>
                <button class='head-account'><img src={accountIcon} />Account</button>
                <button class='head-bag'><img src={bagIcon} />Bag</button>
                <select class='head-region'>
                    <option>EN</option>
                    <option>IN</option>
                </select>
            </div>
        </div>
    )
}

export default Header