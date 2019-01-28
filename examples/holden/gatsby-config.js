const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Holden',
    twitterHandle: '4lpine',
    githubHandle: 'johno'
  },
  pathPrefix: '/examples/holden',
  __experimentalThemes: [
    {
      resolve: 'gatsby-theme-holden',
      options: {}
    },
    {
      resolve: 'gatsby-theme-redirects',
      options: {}
    }
  ]
}
