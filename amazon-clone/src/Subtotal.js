import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from "./StateProvider"
import { getCartTotal } from './reducer';

export default function Subtotal() {

    const [{ cart }, dispatch] = useStateValue();



    // let totalPrice = cart.reduce(function (accumulator, item) {
    //     return accumulator + item.price;
    // }, 0);

    // console.log("THIS IS TOTAL PRICE---->", totalPrice)


    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({cart.length} items):
                            {/* <strong>$ {totalPrice}</strong> */}
                            <strong>{value}</strong>
                        </p>
                        <small className='subtotal__gift'>
                            <input type='checkbox' /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                // value={totalPrice}
                value={getCartTotal(cart)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            />
            <button>Proceed to Checkout</button>

        </div>
    )
}
