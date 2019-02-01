const path = require('path')

module.exports = ({ defaultLayouts = {} } = {}) => {
  const themeLayouts = {
    default: require.resolve('./src/components/Layout')
  }

  return {
    siteMetadata: {
      title: 'Gatsby Card',
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
          name: 'image',
          path: path.join(__dirname, './src/images')
        }
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'image',
          path: 'src/images'
        }
      },
      'gatsby-plugin-sharp',
      'gatsby-transformer-sharp'
    ]
  }
}
