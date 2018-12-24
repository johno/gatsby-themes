import React from 'react'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import { Provider, mdComponents, Box, Container, Heading, Measure } from 'gatsby-ui'

function PostPageTemplate({ data: { mdx } }) {
  return (
    <Provider>
      <Container maxWidth="measureWide">
        <Box mb={[3, 4, 5]}>
          <Heading fontSize={6}>
            {mdx.frontmatter.title}
          </Heading>
          <Heading
            fontSize={1}
            fontWeight="light"
            color="grays.7"
          >
            {mdx.frontmatter.date}
          </Heading>
        </Box>
        <MDXRenderer components={mdComponents}>
          {mdx.code.body}
        </MDXRenderer>
      </Container>
    </Provider>
  )
}

export default PostPageTemplate

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
