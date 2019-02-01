module.exports = {
  siteMetadata: {
    name: 'Benjamin Franklin',
    description: `
      The card theme is for folks that just want a business card landing page.
      You can also add links to numerous social networks and email.
      All configurable from site metadata.
    `,
    twitterHandle: 'gatsbyjs',
    githubHandle: 'gatsbyjs',
    dribbbleHandle: 'gatsby',
    email: 'themes@gatsbyjs.org',
    color: 'purple'
  },
  __experimentalThemes: [
    {
      resolve: 'gatsby-theme-card',
      options: {}
    }
  ]
}
