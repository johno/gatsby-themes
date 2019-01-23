import React from 'react'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import Image from 'gatsby-image'
import styled from 'styled-components'
import { Box, Container, Heading, Text } from 'gatsby-ui'

import Layout from './Layout'

const ImageWrap = styled(Box)`
  max-height: 400px;
  overflow: hidden;
`

const PostPage = ({ data: { mdx: { code, frontmatter } } }) => (
  <Layout>
    <ImageWrap textAlign="center">
      <Image {...frontmatter.image.childImageSharp} />
    </ImageWrap>
    <Container maxWidth="measureWide">
      <Heading mt={[4, 4, 5]} fontSize={[4, 4, 6]}>
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