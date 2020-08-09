module.exports = {
  siteMetadata: {
    title: `Aaron Duke`,
    description: `Aaron Duke is a Web Developer from Norfolk, UK. Creating custom, bespoke websites for all types of businesses.`,
    author: `@AaronDuke`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Aaron Duke`,
        short_name: `Aaron Duke`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    `styled-components`,
    `gatsby-plugin-netlify`,
    'gatsby-plugin-robots-txt',
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-174984908-1',
      },
    },
  ],
}
