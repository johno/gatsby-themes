import React from 'react'
import { graphql } from 'gatsby'

import PostPageRenderer from './PostPageRenderer'

const PostPageLayout = props =><PostPageRenderer {...props} />

export default PostPageLayout

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
      }
    }
  }
`
