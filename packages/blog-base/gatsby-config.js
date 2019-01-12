const path = require('path')

module.exports = ({ defaultLayouts = {} } = {}) => {
  const themeLayouts = {
    posts: require.resolve('./src/components/templates/Post'),
    default: require.resolve('./src/components/Layout')
  }

  return {
    siteMetadata: {
      title: 'Gatsby Blog',
      siteUrl: 'https://gatsbyjs.org'
    },
    mapping: {
      'Mdx.frontmatter.author': 'AuthorYaml'
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
        resolve: 'gatsby-source-filesystem',
        options: {
          path: 'src/posts',
          name: 'posts'
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
          name: 'data',
          path: path.join(__dirname, './src/data'),
          ignore: ['**/\.*']
        },
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'components',
          path: path.join(__dirname, './src/components')
        }
      },
      'gatsby-transformer-yaml',
      'gatsby-plugin-meta-redirect',
      'gatsby-transformer-react-docgen'
    ]
  }
}
