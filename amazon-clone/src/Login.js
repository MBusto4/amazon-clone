import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'


function Login() {


    //React Hooks to keep track of state for the email and password for a user
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = e => {
        e.preventDefault()
        //some firebase login logic
    }
    const register = e => {
        e.preventDefault()
        //some firebase register logic
    }


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
                    <input
                        type='text'
                        value={email}
                        //this is how we keep track of what a user is typing
                        onChange={e => setEmail(e.target.value)}>

                    </input>

                    <h5>Password</h5>
                    <input
                        type='password'
                        value={password}
                        //this is how we keep track of what a user is typing
                        onChange={e => setPassword(e.target.value)}
                    ></input>

                    <button
                        className='login__signInButton'
                        onClick={signIn}
                        type='submit'
                    >Sign In</button>
                </form>

                <p>By signing-in you agree to MY AMAZON FAKE CLONE conditions of use & sale. Please
                    see our Privacy Notice, our Cookies Notice and our Internet-Based Ads Notice.
                </p>
                <button
                    onClick={register}
                    className='login__registerButton'
                >Create an Amazon-Clone Account</button>
            </div>
        </div>
    )
}

export default Login
