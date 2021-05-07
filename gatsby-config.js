module.exports = {
  siteMetadata: {
    title: `The Squirrels Drey`,
    description: `The Squirrels Drey Pub & Restaurant in Sporle, Swaffham, Norfolk. Boasting fresh, locally sourced, homemade food in an idyllic location. Vegan and Vegetarians, Gluten Free and Dairy Free, we can cater to any dietary requirement.`,
    author: `@AaronDuke`,
    siteUrl: `https://squirrelsdrey.co.uk`,
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
        background_color: `#0a0a0a`,
        theme_color: `#0a0a0a`,
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
