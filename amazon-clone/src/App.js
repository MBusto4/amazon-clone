
import './App.css';
import './Header';
import React, { useEffect } from 'react';
import Header from './Header'
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from './Login';
import { auth } from './firebase'
import { useStateValue } from './StateProvider'
import Footer from './Footer'


// need to wrap out app with react router in order to route between multiple pages on our site
function App() {

  const [{ }, dispatch] = useStateValue()
  useEffect(() => {
    //will only run once when the app loads
    auth.onAuthStateChanged(authUser => {
      console.log('THIS IS THE USER--->', authUser)
      if (authUser) {
        //the user logged in or user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="App">
        <Switch>

          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          {/* WHEN WE ARE AT THIS PATH RENDER THESE COMPONENTS - DEFAULT ROUTE has to be at the bottom*/}
          <Route path='/'>
            <Header />
            <Home />
          </Route>

        </Switch>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
