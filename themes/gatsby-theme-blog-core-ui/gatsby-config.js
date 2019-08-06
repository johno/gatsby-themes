module.exports = ({ blog: blogOptions }) => {
  return {
    plugins: [
      'gatsby-plugin-theme-ui',
      {
        resolve: 'gatsby-theme-blog-core',
        options: blogOptions
      }
    ]
  }
}
