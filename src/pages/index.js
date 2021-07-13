import React from "react"
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js"
import CheckoutForm from "../components/CheckoutForm"

const promise = loadStripe("pk_test_51JCWiQL5SsXqkixGf8QU3gRtUY1dzWgPvufnXW83OavRkYeAUAPY0XDpmR0UIuJK30NvLWv5unI9hSVJx1tdmtnV00M9IcjDTN");

export default function Home() {
  return <div>
    <Elements stripe={promise}>
        <CheckoutForm />
      </Elements>
  </div>
}
