const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Gatsby UI'
  },
  pathPrefix: '/examples/docs',
  __experimentalThemes: [
    {
      resolve: 'gatsby-theme-docs',
      options: {
        componentsPath: path.join(__dirname, '../../packages/ui/src'),
        formatDisplayName: ({ displayName }) => {
          return displayName.replace(/^gatsby-ui\./, '')
        }
      }
    }
  ]
}
