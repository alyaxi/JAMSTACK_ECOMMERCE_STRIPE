import React from "react"
import { graphql, useStaticQuery } from "gatsby"
export default function Home() {
  const products = useStaticQuery(graphql`
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
            unit_amount
          }
        }
      }
    }
  `)
  console.log(products)

  return (
    <div>
      <h1>My Products</h1>

      {products.allStripePrice.edges.map(({ node }) => (
        <div key={node.id}>
          <h3>{node.product.name}</h3>
          <img src={node.product.images} height="100px" />
          <p>{node.product.description}</p>

          <button
            className="snipcart-add-item"
            data-item-id={node.id}
            data-item-price={node.unit_amount}
            data-item-url="https://priceless-perlman-23b7cb.netlify.app/"
            data-item-description={node.product.description}
            data-item-image={node.product.images}
            data-item-name={node.product.name}
          >
            Add to cart
          </button>
        </div>
      ))}
    </div>
  )
}
