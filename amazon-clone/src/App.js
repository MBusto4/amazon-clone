
import './App.css';
import './Header';
import Header from './Header'
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"


// need to wrap out app with react router in order to route between multiple pages on our site
function App() {
  return (


    <Router>
      <div className="App">
        <Header />
        <Switch>

          <Route path='/checkout'>
            <Checkout />
          </Route>
          {/* WHEN WE ARE AT THIS PATH RENDER THESE COMPONENTS - DEFAULT ROUTE has to be at the bottom*/}
          <Route path='/'>
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>

  );
}

export default App;
