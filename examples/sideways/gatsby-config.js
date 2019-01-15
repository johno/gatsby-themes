const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'johno',
    twitterHandle: '4lpine',
    githubHandle: 'johno'
  },
  pathPrefix: '/examples/sideways',
  __experimentalThemes: [
    {
      resolve: 'gatsby-theme-sideways',
      options: {}
    },
    {
      resolve: 'gatsby-theme-redirects',
      options: {}
    }
  ]
}
