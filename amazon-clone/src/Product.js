import React from 'react'

function Product() {
    return (
        <div className='product'>
            <div className="product__info">
                <p>TITLE</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>19.99</strong>
                </p>
                <div className="product__rating">
                    <p>🌟</p>
                </div>
                <img src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" alt="" />
            </div>
            <button>ADD to CART</button>

        </div>
    )
}

export default Product
