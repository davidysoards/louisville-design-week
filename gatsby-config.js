module.exports = {
  siteMetadata: {
    title: `Louisville Design Week`,
    subtitle: `September 9th - 14th, 2019`,
    description: `AIGA Louisville or AIGA LOU Design Week is an annual celebration of all things design, printmaking, UX, typography, creativity & more!`,
    author: `David Soards`,
    url: `https://louisvilledesignweek.com`, // No trailing slash allowed!
    image: `/images/og-image.png`, // Path to your image you placed in the 'static' folder
    twitterUsername: `@aigalou`,

    menuLinks: [
      {
        name: `Speakers`,
        link: `/speakers`,
      },
      {
        name: `Schedule`,
        link: `/schedule`,
      },
      {
        name: `Sponsors`,
        link: `/sponsors`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `AIGALou`,
        short_name: `AIGALou`,
        start_url: `/`,
        background_color: `#8B55A3`,
        theme_color: `#fff`,
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
