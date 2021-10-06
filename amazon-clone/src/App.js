
import './App.css';
import './Header';
import Header from './Header'
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from './Login';


// need to wrap out app with react router in order to route between multiple pages on our site
function App() {
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
      </div>
    </Router>

  );
}

export default App;
