import React from 'react';
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id,
        })
    }

    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct-image' src={image} />

            <div className='checkoutProduct-info'>
                <p className='checkoutProduct-title'>{title}</p>
                <p className="checkoutProduct-price">
                    <small>Rs.</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct-rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <span> <i className = "fa fa-star"></i>
                          </span>
                    ))}
                </div>
                <button className="cart-button" onClick={removeFromBasket}>Remove from Cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct