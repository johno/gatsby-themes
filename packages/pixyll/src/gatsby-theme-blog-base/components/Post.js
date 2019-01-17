import React from 'react'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

import Layout from './Layout'

const PostPage = ({ data: { mdx } }) => (
  <Layout>
    <h1>shadowedddd</h1>
    <article className="post-content">
      <MDXRenderer>{mdx.code.body}</MDXRenderer>
    </article>
  </Layout>
)

export default PostPage