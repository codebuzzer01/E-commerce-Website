 import React, {useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from "./Login"

import Header from './Header';
import Home from "./Home";
import { auth } from "./firebase";
import { useStateValue } from './StateProvider';
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
"pk_test_51JA9VXSCv9B67se6V2WEB5JGUAnYHNwpfdbxmY6NaUwa6fxxl1HEXzEFiKTPvw0Qz4O9kKBhnM6aaFL5LNJ9yCsd00nwfPVXgz"

);


function App() {
  const[{}, dispatch]= useStateValue();

useEffect(() => {
 auth.onAuthStateChanged(authUser =>{
   console.log('USER IS >>> ', authUser);
   if (authUser){
     dispatch({
       type: 'SET_USER',
       user: authUser
     })

   } else{
      dispatch({

        type: 'SET_USER',
        user:null
      })
   }

 })
}, [])

  return (
    //BEM
    <Router>
    <div className="App">
    
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

       <Elements stripe={promise}>
       <Payment />
       </Elements>
       
       
       
       
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
