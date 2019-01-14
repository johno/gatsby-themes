const path = require('path')
const { resolver } = require('react-docgen')
const annotationResolver = require('react-docgen-annotation-resolver').default

module.exports = ({ defaultLayouts = {}, componentsPath = 'src/docs' } = {}) => {
  const themeLayouts = {
    docs: require.resolve('./src/components/templates/Doc'),
    default: require.resolve('./src/components/Layout')
  }

  return {
    siteMetadata: {
      title: 'Gatsby Blog',
      siteUrl: 'https://gatsbyjs.org'
    },
    plugins: [
      {
        resolve: 'gatsby-mdx',
        options: {
          defaultLayouts: {
            ...themeLayouts,
            ...defaultLayouts
          }
        }
      },
      {
        resolve: 'gatsby-plugin-page-creator',
        options: {
          path: path.join(__dirname, './src/pages')
        }
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'components',
          path: componentsPath
        }
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'docs',
          path: 'docs',
          ignore: ['**/\.*']
        },
      },
      {
        resolve: 'gatsby-transformer-react-docgen',
        options: {
          resolver: (ast, recast) => {
            const { findAllExportedComponentDefinitions } = resolver
            const annotatedComponents = annotationResolver(ast, recast)
            const exportedComponents = findAllExportedComponentDefinitions(ast, recast)

            return annotatedComponents.concat(exportedComponents)
          }
        }
      }
    ]
  }
}
