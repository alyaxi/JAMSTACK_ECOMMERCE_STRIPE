import React from 'react'
import { CartProvider } from 'use-shopping-cart';

// var stripe = Stripe(process.env.GATSBY_STRIPE_PUBLISHABLE)

export const wrapRootElement = ({element}) => {
    return (
        <CartProvider
        mode="payment"
        cartMode="client-only"
        stripe={"pk_test_51JCWiQL5SsXqkixGf8QU3gRtUY1dzWgPvufnXW83OavRkYeAUAPY0XDpmR0UIuJK30NvLWv5unI9hSVJx1tdmtnV00M9IcjDTN"}
        successUrl={`https://gatsbyecommerce21.netlify.app/success-page/`}
        cancelUrl={`https://gatsbyecommerce21.netlify.app/`}
        currency="USD"
        allowedCountries={['US', 'GB', 'CA']}
        billingAddressCollection={true}
      >
        {element}
      </CartProvider>
    )
}
