const path = require('path')

module.exports = () => {
  let defaultLayout = require.resolve('./src/components/Layout')
  let defaultPostLayout = require.resolve('./src/components/PostPageLayout')

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
            default: defaultLayout,
            posts: defaultPostLayout
          }
        }
      }
    ],
    plugins: [
      'gatsby-plugin-styled-components'
    ]
  }
}
