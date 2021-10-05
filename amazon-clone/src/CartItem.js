import React from 'react'
import './CartItem.css'
import { useStateValue } from './StateProvider'

function CartItem({ id, image, title, price, rating }) {

    //magic snippet to get out state value
    const [{ cart }, dispatch] = useStateValue()

    const removeFromCart = () => {
        // remove the item from the cart
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id,
        })

    }
    return (
        <div className='cartItem'>
            <img
                className='cartItem__image'
                src={image} alt="" />

            <div className="cartItem__info">
                <p className='cartItem__title'>{title}</p>
                <p className='cartItem__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="cartItem__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_, i) => (
                                <p>🌟</p>
                            ))
                    }
                </div>
                <button onClick={removeFromCart}>Remove From Cart</button>
            </div>
        </div>
    )
}

export default CartItem
