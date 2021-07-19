import React from "react"
import Skus from "../components/Skus"
import CardOverview  from '../components/CardOverview'

// import { loadStripe } from '@stripe/stripe-js';
// import { CartProvider } from 'use-shopping-cart';

// const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE)



export default  function  index  () {

  
  return <div>
      <h1>Gatsby Shopping Cart</h1>
      
      <CardOverview />
      <Skus />
    
    
  </div>
}
