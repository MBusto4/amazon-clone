import React from 'react'
import "./Product.css"

function Product({ id, title, image, price, rating }) {
    return (
        <div className='product'>
            <div className="product__info">
                <p>{title}</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {/* we populate an array with the rating and display how many stars that product has through props*/}
                    {
                        Array(rating)
                            .fill()
                            .map((_, i) => (
                                <p>🌟</p>

                            ))
                    }
                </div>
            </div>
            <img src={image} alt="" />
            <button>ADD to CART</button>

        </div>
    )
}

export default Product
