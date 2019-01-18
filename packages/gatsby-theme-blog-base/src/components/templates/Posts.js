import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../Layout'
import PostList from '../PostList'
import Pagination from '../Pagination'

const Posts = ({
  pathContext,
  ...props
}) => (
  <Layout>
    <PostList {...props} />
    <Pagination {...pathContext} />
  </Layout>
)

export default Posts

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
