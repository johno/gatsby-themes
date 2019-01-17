const path = require('path')

module.exports = () => {
  return {
    siteMetadata: {
      title: 'Sideways',
      twitterHandle: 'gatsbyjs',
      githubHandle: 'gatbsjs',
      siteUrl: 'https://gatsbyjs.org'
    },
    __experimentalThemes: [
      {
        resolve: 'gatsby-theme-blog-base',
        options: {
          postsPath: '/writing',
          defaultLayouts: {
            default: require.resolve('./src/gatsby-theme-blog-base/components/Layout')
          }
        }
      }
    ],
    plugins: [
      'gatsby-plugin-styled-components'
    ]
  }
}
