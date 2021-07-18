require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})
module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ["Price"],
        secretKey: process.env.GATSBY_STRIPE_SECRET,
        downloadFiles: false,
      },
    },
  ],
}
