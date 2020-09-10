import React from 'react'
import Product from './Product'
import { Link } from 'react-router-dom'
function Home() {
    return (
        <div className = "home">
            <div className = "home-container">
                
                <img className="home-image" 
                src = "https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Rajeshwari/September/GWBanners/Control/DesktopHero_1500x600._CB405007888_.jpg" alt="">

                </img>
                
                
                <div className = "home-row">
               
                    <Product id= "2123141" title = 'Samsung 80cm Wondertainment Series HD Ready LED Smart TV UA32TE40AAKXXL (Titan Grey) (2020 Model)'
                    price={15999} image = 'https://m.media-amazon.com/images/I/81cB6pJsTaL._AC_UY218_.jpg' rating = {4}/>
                <Product id= "2123142" title = 'IFB 6.5 Kg Fully-Automatic Front Loading Washing Machine (Elena ZX, White, Inbuilt Heater)' price={28999} image = 'https://m.media-amazon.com/images/I/81WnWcQNSLL._AC_UL320_.jpg' rating = {4}/>

                </div>

                <div className = "home-row">
                    <Product id ="2123143" title= 'Samsung Galaxy Note 20 Ultra 5G (Mystic Black, 12GB RAM, 256GB Storage)' price = {104999} image = "https://m.media-amazon.com/images/I/81frwlzRG5L._AC_UY218_.jpg"
                    rating = {4}/>
                    <Product id="2123144" title = "Mi Notebook 14 Intel Core i5-10210U 10th Gen Thin and Light Laptop" price = {43999} image ="https://m.media-amazon.com/images/I/51bGwoibbKL._AC_UL320_.jpg" rating={4}/>

                    <Product id="2123145" title = "Samsung 253L 3 Star Inverter Frost Free Double Door Refrigerator (RT28T3483S8/HL, Elegant Inox,)" price ={23340} image="https://m.media-amazon.com/images/I/71WdrLib1GL._AC_UL320_.jpg" rating={4}/>
                </div>
               
            </div>
            
            
        </div>
    )
}

export default Home
