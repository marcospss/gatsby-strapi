const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Gatsby Strapi News`,
    author: `marcospss`,
    description: `A starter news demonstrating what Gatsby/Strapi can do`,
    siteUrl: `https://gatsby-strapi-news.netlify.com/`,
    keywords: `React, Gatsby, Strapi, TypeScript`,
    social: {
      twitter: `marcospss`,
      git: `marcospss`,
      facebook: `marcospss`,
      linkedin: `marcospss`,
    },
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        components: path.join(__dirname, 'src/components'),
        css: path.join(__dirname, 'src/css'),
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
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`400`, `700`],
          },
          {
            family: `Open Sans`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
  ],
};
