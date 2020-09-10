import React from 'react'
import Rating from './Rating'
import { useStateValue } from './StateProvider'

function Product({id, title, image, price, rating}) {
    const[{basket}, dispatch] = useStateValue()
    console.log("This is basket", basket)
    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_CART",
            item : {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating

            }
        })
    }
    return (
        <div className = "product">
            <div className = "product-info">
                <p>{title}</p>
                <p className ="product-price">
                    <small>Rs.</small>
                    <strong>{price}</strong>
                </p>
                <div className = "product-rating">
                    {Array(rating).fill().map((_, i) => (
                          <span> <i className = "fa fa-star"></i>
                          </span>
                    ))}
                  
                </div>
            </div> 
            

        <img src={image}>
            
        </img>
        <button className = "cart-button" onClick = {addToBasket}>Add To cart</button>     
        </div>
    )
}

export default Product
