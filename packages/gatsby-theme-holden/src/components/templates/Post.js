import React from 'react'
import { graphql } from 'gatsby'

import Post from '../Post'

export default props => <Post {...props} />

export const pageQuery = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      id
      code {
        body
      }
      frontmatter {
        title
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
`
