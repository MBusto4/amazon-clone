import React from 'react'
import './Footer.css'

import { Link } from 'react-router-dom'
function Footer() {
    return (
        <>
            <Link to='/'>
                <div className='backToTop'>
                    <span className='backToTop__text'>Back To Top</span>
                </div>
            </Link>
            <div className='footer'>
                <ul className="footer__option">
                    <h2 className="footer__title"> Get to Know Us</h2>
                    <h5 className="foot__link">Careers</h5>
                    <h5 className="foot__link">Blog</h5>
                    <h5 className="foot__link">About Amazon</h5>
                    <h5 className="foot__link">Sustainability</h5>
                    <h5 className="foot__link">Press Center</h5>
                    <h5 className="foot__link">Investor Relations</h5>
                    <h5 className="foot__link">Amazon Devices</h5>
                </ul>

                <ul className="footer__option">
                    <h2 className="footer__title"> Make Money with Us</h2>
                    <h5 className="foot__link">Sell products on Amazon</h5>
                    <h5 className="foot__link">Sell apps on Amazon</h5>
                    <h5 className="foot__link">Become an Affiliate</h5>
                    <h5 className="foot__link">Become a Delivery Driver</h5>
                    <h5 className="foot__link">Start a package delivery business</h5>
                    <h5 className="foot__link">Advertise Your Products</h5>
                    <h5 className="foot__link">Self-Publish with Us</h5>
                    <h5 className="foot__link">Host an Amazon Hub</h5>
                    <h5 className="foot__link">See More Ways to Make Money</h5>
                </ul>
                <ul className="footer__option">
                    <h2 className="footer__title"> Amazon Payment Products</h2>
                    <h5 className="foot__link">Amazon Rewards Visa Signature Cards</h5>
                    <h5 className="foot__link">Amazon.com Store Card</h5>
                    <h5 className="foot__link">Amazon Secured Card</h5>
                    <h5 className="foot__link">Amazon Business Card</h5>
                    <h5 className="foot__link">Amazon Business Line of Credit</h5>
                    <h5 className="foot__link">Credit Card Marketplace</h5>
                    <h5 className="foot__link">Reload Your Balance</h5>
                    <h5 className="foot__link">Amazon Currency Converter</h5>
                </ul>
                <ul className="footer__option">
                    <h2 className="footer__title"> Let Us Help You</h2>
                    <h5 className="foot__link">Amazon and COVID-19</h5>
                    <h5 className="foot__link">Your Account</h5>
                    <h5 className="foot__link">Your Orders</h5>
                    <h5 className="foot__link">Shipping Rates & Policies</h5>
                    <h5 className="foot__link">Amazon Prime</h5>
                    <h5 className="foot__link">Returns & Replacements</h5>
                    <h5 className="foot__link">Amazon Assistant</h5>
                </ul>
            </div>
        </>
    )
}

export default Footer
