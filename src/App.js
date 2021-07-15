import './App.css';
import Header from './Header.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';


function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
