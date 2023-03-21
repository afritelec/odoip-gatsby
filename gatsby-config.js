/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    "title": "Odoswitch",
  },
  plugins: ["gatsby-plugin-image","gatsby-plugin-sharp",
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: `services`,
      path: `${__dirname}/services`,
    }
  },
],
}
