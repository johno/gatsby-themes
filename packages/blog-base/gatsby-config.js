const path = require('path')

module.exports = props => {
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
      'gatsby-plugin-meta-redirect'
    ]
  }
}
