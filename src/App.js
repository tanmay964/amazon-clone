import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Home from './Home';
import Checkout from './Checkout'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
 
function App() {
  const [{}, dispatch] = useStateValue();

    useEffect(() => {
      auth.onAuthStateChanged(authUser => {
        console.log('The user is', authUser)
        if (authUser) {

          dispatch({
            type: 'SET_USER',
            user: authUser
          })
        } else {
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
        <Route path ="/signin">
            <Login/>
          </Route>
          <Route path ="/checkout">
          <Header/>

            <Checkout/>
          </Route>
          <Route path = "/">
          <Header/>

            <Home/>
          </Route>
          
        </Switch>
        
        </div>
  </Router>
    
  );
}

export default App;
