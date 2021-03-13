import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './pages/Header';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import { auth } from './firebase';
import { useStateValue } from './provider/StateProvider';
import Payment from './pages/Payment';

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
            <Payment/>
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
