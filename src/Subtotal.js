import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import {getBasketTotal} from './reducer'
function Subtotal() {
    const[{basket}, dispatch] = useStateValue()
    return (
        <div className = "subtotal">
            <CurrencyFormat
                renderText = {(value) => (
                    <>
                    <p>
                Subtotal({basket.length} items): <strong>
                            {value}
                        </strong>
                    </p>
                    <small className = "subtotal-gift">
                        <input type="checkbox"/>This Order Contains a Gift
                    </small>

                    <button className = "checkout-button">Procced to Checkout</button>
                    </>
                )}
                    decimalScale={2}
                    value = {getBasketTotal(basket)}
                    displayType = {"text"}
                    thousandSeparator = {true}
                    prefix={"Rs."}

            />

            
        </div>
    )
}


export default Subtotal
