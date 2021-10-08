import React from 'react'
import { useStateValue } from './StateProvider'
import CartItem from './CartItem'

function Payment() {
    const [{ user, cart, dispatch }] = useStateValue()
    return (
        <div className='payment'>
            <div className="payment__container">
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
                <div className="payment__section"></div>

            </div>

        </div>
    )
}

export default Payment
