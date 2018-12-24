const path = require(`path`)

module.exports = ({ root }) => ({
  siteMetadata: {
    title: `Awesome blog`,
    author: `John Otander`,
    description: `A wonderfully, minimal starter blog`,
    siteUrl: `https://johno.com/blog`,
  },
  pathPrefix: '/blog',
  plugins: [
    {
      resolve: `gatsby-mdx`,
      options: {
        defaultLayouts: {
          posts: require.resolve(`./src/post-page-layout`)
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `posts`,
        name: `posts`
      }
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: require.resolve(`./src/pages`)
      }
    }
  ]
})
