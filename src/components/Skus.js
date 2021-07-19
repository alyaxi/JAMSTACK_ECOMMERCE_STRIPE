import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import SkuCard from "./SkuCard"


const conatinerStyles = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  padding: '1rem 0 1rem 0',
};


const Skus = props => {
  const products = useStaticQuery(graphql`
  query MyQuery {
    allStripePrice{
      edges {
        node {
          product {
            id
            images
            description
            name
          }
          id
          currency
          unit_amount
        }
      }
    }
  }
  
    `)
    // console.log(products)
      return (
        <div style={conatinerStyles}>
          {products.allStripePrice.edges.map(({node: price}) => {
            const newSku = {
              id: price.id,
              name: price.product.name,
              description: price.product.description,
              image: price.product.images,
              currency: price.currency,
              price: price.unit_amount
            }
            return (
              <SkuCard newSku={newSku} key={price.id}/>
            )
          })}
        </div>
      )
     
  
    }
    export default Skus