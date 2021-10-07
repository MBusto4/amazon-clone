import React from 'react'
import "./Product.css"
import { useStateValue } from "./StateProvider"

function Product({ id, title, image, price, rating }) {

    const [{ cart }, dispatch] = useStateValue();
    // console.log(cart)
    const addToCart = () => {
        //dispatch the action of adding an item to the cart pushing into the data layer.

        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,

            }
        });
    };
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
            <button onClick={addToCart}>ADD to CART</button>

        </div>
    )
}

export default Product
