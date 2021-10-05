import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
function Login() {
    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className='login__logo'
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>
                <form action="">
                    <h5>E-mail</h5>
                    <input type='text'></input>

                    <h5>Password</h5>
                    <input type='password'></input>

                    <button
                        className='login__signInButton'
                    >Sign In</button>
                </form>

                <p>By signing-in you agree to MY AMAZON FAKE CLONE conditions of use & sale. Please
                    see our Privacy Notice, our Cookies Notice and our Internet-Based Ads Notice.
                </p>
                <button
                    className='login__registerButton'
                >Create an Amazon-Clone Account</button>
            </div>
        </div>
    )
}

export default Login
