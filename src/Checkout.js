import React from 'react'
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'

function Checkout() {
    const[{basket}, dispatch] = useStateValue()
    return (
        <div className = "checkout">
           <div className = "checkout-left">
               <img className ="checkout-ad" src = "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Books/062020/Bookbazaar/Header_showcases._CB407576112_SY500_.jpg" alt=""/>
               <div>
                    <h2 className = "checkout-title">Your Cart</h2>
                    {basket.map(item => (
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        />
                    ))}
               </div>
            </div> 

            <div className = "checkout-right">
                <Subtotal/>
            </div>
            
        </div>
    )
}

export default Checkout
