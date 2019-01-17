const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Pixyll',
    twitterHandle: '4lpine',
    githubHandle: 'johno'
  },
  pathPrefix: '/examples/pixyll',
  __experimentalThemes: [
    {
      resolve: 'gatsby-theme-pixyll',
      options: {}
    }
  ]
}
