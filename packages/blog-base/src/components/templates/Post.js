import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Post from '../Post'

/**
 * Template for the post page
 */
const PostTemplate = props => <Post {...props} />

PostTemplate.propTypes = {
  /**
   * MDX string that is passed to MDXRenderer
   */
  code: PropTypes.shape({
    body: PropTypes.string
  }),
  /**
   * Frontmatter from the post consisting of the title
   * and formatted date
   */
  frontmatter: PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.string
  })
}

export default PostTemplate

export const pageQuery = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      code {
        body
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
