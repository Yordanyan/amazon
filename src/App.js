import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import  Payment  from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";


function App() {
  
const promise = loadStripe(
  'pk_test_51Jvy7OCTquhTlKLOMJ20pxdEpQevkIJPOWH5GgDj6ga3wk7rCJxwSv4RkjbEEbvrXn0MxTnuk1rz5DHA2dB2IOho00iitD4V3s');

  const [{},dispatch] = useStateValue();
  useEffect(() =>{
  auth.onAuthStateChanged(authUser =>{
    console.log('THE USER IS >>>',authUser);
    if(authUser){
     //logged in
     dispatch({
       type: 'SET_USER',
       user: authUser
     })
    }else{
      //logged out
      dispatch({
        type: 'SET_USER',
        user: null
      })
    }
  })
  }, [])
  return (
   <Router>
     <div className="app">
     <Switch>
     <Route path="/login">
         <Login />
       </Route>
       <Route path="/orders">
         <Header />
         <Elements stripe={promise}>
           <Orders />
         </Elements>
        
       </Route>
       <Route path="/payment">
         <Header />
         <Elements stripe={promise}>
           <Payment />
         </Elements>
        
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
