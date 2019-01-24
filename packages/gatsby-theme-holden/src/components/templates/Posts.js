import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../Layout'
import PostList from '../PostList'
import Pagination from '../Pagination'

const Posts = ({
  pathContext,
  pageContext,
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
          excerpt
          parent {
            ... on File {
              name
              sourceInstanceName
            }
          }
          frontmatter {
            title
            path
            category
            summary
            date(formatString: "MMMM DD, YYYY")
            image {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  src
                  srcSet
                  tracedSVG
                  aspectRatio
                }
              }
            }
          }
        }
      }
    }
  }
`
