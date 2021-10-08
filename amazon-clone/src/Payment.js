import React, { useState } from 'react'
import { useStateValue } from './StateProvider'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'
import './Payment.css'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'
import { getCartTotal } from './reducer';

function Payment() {
    const [{ user, cart, dispatch }] = useStateValue()

    //Hooks to use stripe functions
    const stripe = useStripe()
    const elements = useElements()

    //need 2 pieces of state for the handleSubmit and handleChange functions
    const [error, setError] = useState(null)
    const [disable, setDisable] = useState(true)


    const handleSubmit = (e) => {
        //do all the stripe logic
    }

    const handleChange = (e) => {
        /* Listen for any changes in the CardElement
           and display any errors as the customer types their card details */
        setDisable(e.empty)
        setError(e.error ? e.error.message : '')
    }




    return (
        <div className='payment'>
            <div className="payment__container">
                <h1>
                    Checkout (
                    <Link to='/checkout'>{cart.length} items</Link>
                    )
                </h1>
                {/*Payment Section - Delivery Address */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>129 React Avenue</p>
                        <p>New Jersey, NJ</p>
                    </div>
                </div>
                {/*Payment Section - Review Items */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3> Review Items and Delivery</h3>
                    </div>
                    <div className="payment__items">
                        {/* All of the products in ur cart*/}
                        {
                            cart.map(item => (
                                <CartItem
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))
                        }
                    </div>
                </div>
                {/*Payment Section - Payment Method */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        {/* STRIPE LOGIC GOES HERE */}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className='payment__priceContainer'>
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                            <h3>
                                                Order Total <strong>{value}:</strong>
                                            </h3>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getCartTotal(cart)}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'$'}
                                />
                            </div>
                        </form>
                    </div>
                </div>

            </div >

        </div >
    )
}

export default Payment
