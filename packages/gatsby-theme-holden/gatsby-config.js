const path = require('path')

module.exports = ({ defaultLayouts = {} } = {}) => {
  const themeLayouts = {
    posts: require.resolve('./src/components/templates/Post'),
    default: require.resolve('./src/components/Layout')
  }

  return {
    siteMetadata: {
      title: 'Holden',
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
        resolve: 'gatsby-source-filesystem',
        options: {
          path: 'src/data',
          name: 'data',
          ignore: ['**/\.*']
        },
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          path: 'src/images',
          name: 'images'
        }
      },
      {
        resolve: 'gatsby-plugin-page-creator',
        options: {
          path: path.join(__dirname, './src/pages')
        }
      },
      'gatsby-plugin-meta-redirect',
      'gatsby-plugin-styled-components',
      'gatsby-plugin-sharp',
      'gatsby-transformer-sharp',
      'gatsby-transformer-yaml'
    ]
  }
}
