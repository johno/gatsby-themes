const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Minimal blog theme example',
    description: 'Example usage of gatsby-theme-minimal-blog',
    author: 'John Otander'
  },
  pathPrefix: '/examples/blog',
  __experimentalThemes: [
    {
      resolve: 'gatsby-theme-minimal-blog',
      options: {}
    }
  ]
}
