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
    `gatsby-mdx`,
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
