require("dotenv").config()

module.exports = {
  siteMetadata: {
      siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
      {
        resolve: `gatsby-source-stripe`,
        options: {
          objects: ["Price"],
          secretKey: process.env.STRIPE_SECRET_KEY,
          downloadFiles: false,
        },
      },
      {
        resolve: 'gatsby-plugin-snipcartv3',
        options: {
          apiKey: process.env.SNIPCART_SECRET_KEY
        }
      }
    ],
}