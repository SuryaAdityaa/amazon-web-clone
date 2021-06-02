import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './pages/Header';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Payment from './pages/Payment';
import { auth } from './firebase';
import { useStateValue } from './provider/StateProvider';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const promise = loadStripe('pk_test_51IUQeAH3KKLZeaeM982nEHjSiy0pn95TFv8rCVqhUmNfLqBi5qUMMT4EIpebajVsQGyRRxfOi2fxpH9bvBlDtFIV00CTNsINT5');

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // Will only work once
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        // User logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })

      } else {
        // User is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>
          <Route path="/payment">
            <Header/>
            <Elements stripe={promise}>
              <Payment/>
            </Elements>
          </Route>
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
