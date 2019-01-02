import React from 'react'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import { mdComponents, Box, Container, Heading } from 'gatsby-ui'

import Layout from './Layout'

function PostPage({ data: { mdx } }) {
  return (
    <Layout>
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
    </Layout>
  )
}

export default PostPage
