import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
// import SearchIcon from '@mui/icons-material/Search';
// import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { BsFillCartCheckFill, BsSearch } from "react-icons/bs";
import { useStateValue } from "./StateProvider"
import { auth } from './firebase'



function Header() {

    /*
        this represent our state value from our StateProvider
        we can further deconstruct the state value to get a specific state value 
       const [state, dispatch] = useStateValue();*/


    const [{ cart, user }, dispatch] = useStateValue();
    const handleAuthentication = () => {
        if (user) {
            auth.signOut()
        }
    }


    return (
        <div className='header'>
            <Link to='/'>
                <img src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
                    className='header__logo'
                    alt='' />
            </Link>
            <div className='header__search'>
                <input
                    className='header__searchField'
                    type='text'>
                </input>
                <BsSearch className='header__icon' />
            </div>
            <div
                className='header__nav'>
                <Link to={!user && '/login'}>
                    <div onClick={handleAuthentication} className='header__option'>
                        <span className='header__option__lineOne'>
                            {/* Hello Guest{user.email} */}
                            Hello Guest
                        </span>
                        <span className='header__option__lineTwo'>
                            {user ? 'Sign Out' : "Sign In"}
                        </span>
                    </div>
                </Link>

                <div className='header__option'>
                    <span className='header__option__lineOne'>
                        Returns
                    </span>
                    <span className='header__option__lineTwo'>
                        & Orders
                    </span>
                </div>

                <div className='header__option'>
                    <span className='header__option__lineOne'>
                        Your
                    </span>
                    <span className='header__option__lineTwo'>
                        Prime
                    </span>
                </div>

                <div className='header__optionCart'>
                    <Link to='/checkout'>
                        <BsFillCartCheckFill />
                    </Link>
                    <span className="header__option__lineTwo header__cartCount">{cart?.length}</span>
                </div>
            </div>


        </div>
    )
}

export default Header
