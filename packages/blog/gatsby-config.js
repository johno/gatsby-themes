const path = require(`path`)

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
            posts: require.resolve(`./src/components/PostPageLayout.js`),
            default: require.resolve(`./src/components/Layout.js`)
          }
        }
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `src/posts`,
          name: `posts`
        }
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `src/pages`,
          name: `pages`
        }
      },
      {
        resolve: `gatsby-plugin-page-creator`,
        options: {
          path: path.join(__dirname, `./src/pages`)
        }
      },
      `gatsby-plugin-meta-redirect`,
      `gatsby-plugin-styled-components`
    ]
  }
}
