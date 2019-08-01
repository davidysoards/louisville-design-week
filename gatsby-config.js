module.exports = {
  siteMetadata: {
    title: `Design Week 2019`,
    description: `Info and Events Calendar for AIGA Louisville's Annual Design Week.`,
    author: `David Soards`,
    menuLinks: [
      // {
      //   name: 'Home',
      //   link: '/',
      // },
      {
        name: 'Speakers',
        link: '/speakers',
      },
      {
        name: 'Theme',
        link: '/theme',
      },
      {
        name: 'Storefront',
        link: '/storefront',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-emotion`,
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
        name: `aiga-louisville-design-week-2019`,
        short_name: `design-week`,
        start_url: `/`,
        background_color: `#f0f0f0`,
        theme_color: `#ef5350`,
        display: `minimal-ui`,
        icon: `src/images/aiga-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
