import React from "react"
import { loadStripe } from '@stripe/stripe-js';
import { CartProvider } from 'use-shopping-cart';
import Skus from "../components/Skus"
import CardOverview  from '../components/CardOverview'


const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE)


export default function CartExample () {
  const conatinerStyles = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: '1rem 0 1rem 0',
  };
  
  return <div>
     <CartProvider
      mode="client-only"
      stripe={stripePromise}
      successUrl={`${window.location.origin}/success-page/`}
      cancelUrl={`${window.location.origin}/`}
      currency="USD"
      allowedCountries={['US', 'GB', 'CA']}
      billingAddressCollection={true}
    >
      <CardOverview />
      <Skus />
    </CartProvider>
  </div>
}
