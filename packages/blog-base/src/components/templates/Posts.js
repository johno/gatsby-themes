import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import PostList from '../PostList'
import Pagination from '../Pagination'

/**
 * Post list template
 */
const PostsTemplate = ({
  pathContext,
  ...props
}) => (
  <>
    <PostList {...props} />
    <Pagination {...pathContext} />
  </>
)

PostsTemplate.propTypes = {
  /**
   * List of posts
   */
  edges: PropTypes.shape({
    node: PropTypes.shape({
      id: PropTypes.string,
      parent: PropTypes.shape({
        name: PropTypes.string,
        sourceInstanceName: PropTypes.string
      }),
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        path: PropTypes.string,
        date: PropTypes.string
      })
    })
  })
}

export default PostsTemplate

export const pageQuery = graphql`
  query PostList($limit: Int, $skip: Int) {
    allMdx(
      limit: $limit
      skip: $skip
      sort: {
        fields: [frontmatter___date]
        order: DESC
      }
      filter: {
        frontmatter: {
          draft: { ne: true }
          archived: { ne: true }
        }
      }
    ) {
      edges {
        node {
          id
          parent {
            ... on File {
              name
              sourceInstanceName
            }
          }
          frontmatter {
            title
            path
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
