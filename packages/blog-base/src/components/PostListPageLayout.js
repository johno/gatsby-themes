import React from 'react'
import { Link, graphql } from 'gatsby'

import PostList from './PostList'

const PostListPageLayout = ({
  pathContext: {
    isFirst,
    isLast,
    nextPage,
    prevPage,
  },
  ...props
}) => (
  <>
    <PostList {...props} />

    {isFirst ? null : <Link to={prevPage}>Previous</Link>}
    {isLast ? null : <Link to={nextPage}>Next</Link>}
  </>
)

export default PostListPageLayout

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
