import React from 'react'
import CartItem from './CartItem';
import "./Checkout.css"
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';


function Checkout() {
    const [{ cart, user }, dispatch] = useStateValue()
    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img className='checkout__ad' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
                <div>
                    <h3>Hello, {user ? user?.email : 'Guest'}</h3>
                    <h2 className="checkout__title">
                        Your Shopping Cart
                    </h2>
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

            <div className="checkout__right">
                <Subtotal />

            </div>
        </div>
    )
}

export default Checkout
