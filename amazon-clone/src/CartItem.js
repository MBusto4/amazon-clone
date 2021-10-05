import React from 'react'
import './CartItem.css'

function CartItem({ id, image, title, price, rating }) {
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
                <button>Remove From Cart</button>
            </div>
        </div>
    )
}

export default CartItem
