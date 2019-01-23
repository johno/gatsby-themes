import React from 'react'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

import Layout from './Layout'

const PostPage = ({ data: { mdx } }) => (
  <Layout>
    <MDXRenderer>{mdx.code.body}</MDXRenderer>
  </Layout>
)

export default PostPage