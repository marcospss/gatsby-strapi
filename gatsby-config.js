const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Gatsby Strapi Portfolio`,
    author: `marcospss`,
    description: `A starter Portfolio demonstrating what Gatsby/Strapi can do`,
    siteUrl: `https://gatsby-strapi-portfolio.netlify.com/`,
    keywords: `React, Gatsby, Strapi, TypeScript`,
    social: {
      twitter: `marcospss`,
      git: `marcospss`,
      facebook: `marcospss`,
      linkedin: `marcospss`,
    },
  },
  plugins: [
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        components: path.join(__dirname, 'src/components'),
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 100,
        contentTypes: [`categories`, `contents`],
      },
    },
  ],
};
