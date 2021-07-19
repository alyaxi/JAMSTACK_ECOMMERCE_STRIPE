import React from 'react'
import {graphql, useStaticQuery} from "gatsby";
import { loadStripe } from "@stripe/stripe-js"

export default function Products() {
    const products = useStaticQuery( graphql`
    query MyQuery {
      allStripePrice {
        edges {
          node {
            product {
              description
              images
              id
              name
            }
            id
          }
        }
      }
    }
    `
    )
    const redirectToCheckout = async (event, id) => {
      event.preventDefault()
      const stripe = await loadStripe("pk_test_51JCWiQL5SsXqkixGf8QU3gRtUY1dzWgPvufnXW83OavRkYeAUAPY0XDpmR0UIuJK30NvLWv5unI9hSVJx1tdmtnV00M9IcjDTN")
      const { error } = await stripe.redirectToCheckout({
        mode: "payment",
        lineItems: [{ price: id, quantity: 1 }],
        successUrl: `http://localhost:8000/payment-success/`,
        cancelUrl: `http://localhost:8000/payment-error`,
      })
      if (error) {
        console.warn("Error:", error)
   
      }
    }

    console.log(products);
    return (
     
        <div>
            <h1>My Products</h1>
           
            {products.allStripePrice.edges.map(({node}) => (
              <div key={node.product.id}>
                <h3>{node.product.name}</h3>
                <img src={node.product.images} alt="" height="100px" />
                <p>{node.product.description}</p>
                
                <button onClick={e => redirectToCheckout(e, node.id)}>Buy {node.product.name}</button>
              </div>
            ))}
            
        </div>
     
    )
}
