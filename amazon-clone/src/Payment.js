import React, { useState, useEffect } from 'react'
import { useStateValue } from './StateProvider'
import CartItem from './CartItem'
import { Link, useHistory } from 'react-router-dom'
import './Payment.css'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'
import { getCartTotal } from './reducer';
import axios from './axios'

import { db, auth } from './firebase'

function Payment() {
    const [{ user, cart }, dispatch] = useStateValue()
    const history = useHistory()

    //Hooks to use stripe functions
    const stripe = useStripe()
    const elements = useElements()

    //need pieces of state for the handleSubmit and handleChange functions
    const [error, setError] = useState(null)
    const [disabled, setDisable] = useState(true)
    const [succeeded, setSucceeded] = useState(false)
    const [processing, setProcessing] = useState('')
    //clientSecret is so Stripe knows how much to charge the client
    const [clientSecret, setClientSecret] = useState(true)

    useEffect(() => {
        //generate the special stripe secret which allows us to charge a customer

        /********************** 
        when ever the basket changes it will make a post request and will update the special client secret and will
        charge the right amount 
        */
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                //Stripe expects the total in a currencies subunits so need to multiple by 100(dollars to cents)
                url: `/payments/create?total=${getCartTotal(cart) * 100}`
            })
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [cart])

    console.log("THE SECRET IS ---->", clientSecret)

    const handleSubmit = async (event) => {
        //do all the stripe logic
        event.preventDefault()
        setProcessing(true)

        //need a client secret 
        //uses the client secret
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            //paymentIntent = payment confirmation

            //push into the database
            db.collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    cart: cart,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                })
            setSucceeded(true)
            setError(null)
            setProcessing(false)

            dispatch({
                type: 'EMPTY_CART',
            });
            history.replace('/orders')
        })
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
                            {/* For Errors */}
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Payment
