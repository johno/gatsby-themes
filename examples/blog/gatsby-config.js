module.exports = {
  siteMetadata: {
    title: 'Minimal blog theme example',
    author: 'John Otander',
    description: 'Example usage of gatsby-theme-minimal-blog',
    siteUrl: 'https://gatsby-themes.johno.com/examples/blog'
  },
  pathPrefix: '/examples/blog',
  __experimentalThemes: [
    {
      resolve: 'gatsby-theme-minimal-blog',
      options: {
        root: __dirname
      }
    }
  ]
}
