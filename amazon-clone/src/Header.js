import React from 'react'
import './Header.css'

function header() {
    return (
        <div className='header'>
            <img src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
                className='header-logo'
                alt='' />
            <div className='header_search'>
                <input
                    className='header_search-field'
                    type='text'
                ></input>
            </div>
            <div
                className='header_nav'>
                <div className='header-option'>
                    <span className='header-option-lineOne'>
                        Hello Guest
                    </span>
                    <span className='header-option-lineTwo'>
                        Sign In
                    </span>
                </div>

                <div className='header-option'>
                    <span className='header-option-lineOne'>
                        Returns
                    </span>
                    <span className='header-option-lineTwo'>
                        & Orders
                    </span>
                </div>

                <div className='header-option'>
                    <span className='header-option-lineOne'>
                        Your
                    </span>
                    <span className='header-option-lineTwo'>
                        Prime
                    </span>
                </div>
            </div>


        </div>
    )
}

export default header
