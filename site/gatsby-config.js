module.exports = {
  siteMetadata: {
    title: `Family Recipe`,
    description: `A collection of recipes my girlfriend and I try, love, and forget...`,
    author: `Michael Cacciano`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/salty.jpg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Roboto',
            variants: ['100', '300', '400', '700', '900'],
          },
          {
            family: 'Rubik',
            variants: ['100', '300', '400', '700', '900'],
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'r3imi338',
        dataset: 'production',
        overlayDrafts: false,
        watchMode: true,
        // a token with read permissions is required
        // if you have a private dataset
        // token: process.env.MY_SANITY_TOKEN,
        token:
          'skDFQ8onFLI05HXyMuEof65O0RJzkOXRQ5TVcXqTENWIbJeYZPp6XMwXNR2j2bu1DzgoTtTrn1VpFn9FnUm1xsrRhbwWoBk5XY6YNiOqahB66djdRhu3uIP5XecyDBU8H4GEDFNtnHG9adCPAJk6bp25W8ZDCBfHENkt3piOLAI9kAEFbEOV',

        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: 'default',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
