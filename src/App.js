import React, { useEffect } from 'react';
import './App.css';
import Header from './Header.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';

function App() {
  const [{ }, dispatch] = useStateValue();
  // createing a listener to always keep track off who is signed in
  //useEffect only run once when the app component loads...
  useEffect(() => {
    //this lister onAuthStateChanged does all the work for login and logout from firebase
    auth.onAuthStateChanged(authUser => {
      console.log('The user is ...', authUser);

      if (authUser) {
        //the user is logged in.   if the user logged in or refresh the page after logging we will know that who logged in from firebase and be logged in 
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else {
        //  the user is logged out... if logged out no user
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
    // if we keep the array blank it only runs when the app component loads... 
    //But in array if pass any parameters like user the useEffect runs whenever the user changes, if pass in basket it runs whenever the basket changes...so whatever the we pass in it runs when pass params change.
  }, []);



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
          <Route path="/payment">
            <Header />
            <Payment />
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
