import React from "react"
import { graphql, StaticQuery } from "gatsby"
import SkuCard from "./SkuCard"


const conatinerStyles = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  padding: '1rem 0 1rem 0',
};


export default props => (
  <StaticQuery
    query={graphql`
      query ProductPrices {
        prices: allStripePrice(
          filter: { active: { eq: true }, currency: { eq: "usd" } }
          sort: { fields: [unit_amount] }
        ) {
          edges {
            node {
              id
              active
              unit_amount
              currency
              product {
                id
                description
                name
                images
              }
            }
          }
        }
      }
    `}
    render = {({prices}) => (
      <div style={conatinerStyles}>
        {prices.edges.map(({node : price}) => {
          const newSku = {
            sku : price.id,
            name: price.product.name,
            description: price.product.description,
            currency: price.currency,
            Image: price.product.images,
            price: price.unit_amount
          };
          return <SkuCard key={price.id} newSku={newSku} />
        })}
      </div>
    )}
  />
)
