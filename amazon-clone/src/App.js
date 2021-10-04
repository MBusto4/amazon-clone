
import './App.css';
import './Header';
import Header from './Header'
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"


// need to wrap out app with react router in order to route between multiple pages on our site
function App() {
  return (


    <Router>
      <div className="App">
        <Switch>

          <Route path='/checkout'>
            <h1> I AM THE CHECKOUT PAGE</h1>
          </Route>
          {/* WHEN WE ARE AT THIS PATH RENDER THESE COMPONENTS - DEFAULT ROUTE*/}
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
