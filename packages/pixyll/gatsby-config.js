const path = require('path')

module.exports = () => {
  return {
    siteMetadata: {
      title: 'Pixyll',
      twitterHandle: 'gatsbyjs',
      githubHandle: 'gatbsjs',
      siteUrl: 'https://gatsbyjs.org',
      headerLinks: [
        {
          title: 'About',
          path: '/about'
        }
      ]
    },
    plugins: ['gatsby-plugin-sass'],
    __experimentalThemes: [
      {
        resolve: 'gatsby-theme-blog-base',
        options: {
          postsPath: '/blog',
          postsPerPage: 2,
          defaultLayouts: {
            default: require.resolve('./src/gatsby-theme-blog-base/components/Layout')
          }
        }
      }
    ]
  }
}
