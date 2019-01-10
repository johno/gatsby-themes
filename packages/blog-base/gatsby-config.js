const path = require('path')

module.exports = props => {
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
            posts: require.resolve('./src/components/PostPageLayout'),
            default: require.resolve('./src/components/Layout')
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
          path: 'src/pages',
          name: 'pages'
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
      'gatsby-transformer-yaml',
      'gatsby-plugin-meta-redirect'
    ]
  }
}
