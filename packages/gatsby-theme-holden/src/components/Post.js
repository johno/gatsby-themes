import React from 'react'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import Image from 'gatsby-image'
import styled from 'styled-components'
import { Box, Container, Heading } from 'gatsby-ui'

import Layout from './Layout'

const ImageWrap = styled(Box)`
  max-height: 400px;
  overflow: hidden;
`

const PostPage = ({ data: { mdx: { code, frontmatter } } }) => (
  <Layout>
    {frontmatter.image ? (
      <ImageWrap textAlign="center">
        <Image {...frontmatter.image.childImageSharp} />
      </ImageWrap>
    ) : null}
    <Container maxWidth="measureWide">
      <Heading as="h1" mt={[4, 4, 5]} fontSize={[4, 4, 6]}>
        {frontmatter.title}
      </Heading>
      <Heading mb={[4, 4, 5]} fontSize={1} fontWeight="normal">
        {frontmatter.date}
      </Heading>
      <MDXRenderer>{code.body}</MDXRenderer>
    </Container>
  </Layout>
)

export default PostPage