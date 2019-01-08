const path = require(`path`)

module.exports = (props) => {
  let defaultLayout = require.resolve(`./src/components/Layout`)
  let defaultPostLayout = require.resolve(`./src/components/PostPageLayout`)

  if (props.layoutVariant === 'sidebar') {
    defaultLayout = require.resolve(`./src/components/SideNavLayout`)
    defaultPostLayout = require.resolve(`./src/components/SideNavPostPageLayout`)
  }

  return {
    siteMetadata: {
      title: `Sideways`,
      twitterHandle: 'gatsbyjs',
      githubHandle: 'gatbsjs',
      siteUrl: `https://gatsbyjs.org`
    },
    plugins: [
      {
        resolve: `gatsby-mdx`,
        options: {
          defaultLayouts: {
            posts: require.resolve(`./src/components/PostPageLayout`),
            default: require.resolve(`./src/components/Layout`)
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
