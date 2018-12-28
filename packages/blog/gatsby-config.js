module.exports = () => {
  return {
    siteMetadata: {
      title: `Awesome blog`,
      author: `John Otander`,
      description: `A wonderfully, minimal starter blog`,
      siteUrl: `https://johno.com`,
    },
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
          path: `src/pages`
        }
      }
    ]
  }
}
