import React, { useState, useEffect } from 'react'
import { useStateValue } from './StateProvider'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'
import './Payment.css'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'
import { getCartTotal } from './reducer';
import axios from 'axios'

function Payment() {
    const [{ user, cart, dispatch }] = useStateValue()

    //Hooks to use stripe functions
    const stripe = useStripe()
    const elements = useElements()

    //need pieces of state for the handleSubmit and handleChange functions
    const [error, setError] = useState(null)
    const [disabled, setDisable] = useState(true)
    const [succeeded, setSucceeded] = useState(false)
    const [processing, setProcessing] = useState('')
    const [clientSecret, setClientSecret] = useState(true)

    useEffect(() => {
        //generate the special stripe secret which allows us to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payment/create?total=${getCartTotal(cart)}`
            })
        }
        getClientSecret()

    }, [cart])


    const handleSubmit = async (event) => {
        //do all the stripe logic
        event.preventDefault()
        setProcessing(true)

        //need a client secret 

    }

    const handleChange = (event) => {
        /* Listen for any changes in the CardElement
           and display any errors as the customer types their card details */
        setDisable(event.empty)
        setError(event.error ? event.error.message : '')
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
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Procesing...</p> : "Buy Now"}</span>
                                </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>

            </div >

        </div >
    )
}

export default Payment
