const path = require('path')
const Components = require('../../packages/ui/dist')

module.exports = {
  siteMetadata: {
    title: 'Gatsby UI'
  },
  pathPrefix: '/examples/docs',
  __experimentalThemes: [
    {
      resolve: 'gatsby-theme-docs',
      options: {
        components: Components,
        theme: Components.theme,
        componentsPath: path.join(__dirname, '../../packages/ui/src')
      }
    }
  ]
}
