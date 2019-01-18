import React from 'react'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

import Layout from './Layout'

const PostPage = ({ data: { mdx }, pageContext: { frontmatter } }) => (
  <Layout>
    <div className="post-header mb2">
      <h1>{frontmatter.title}</h1>
      <span class="post-meta">{frontmatter.date}</span>
    </div>
    <article className="post-content">
      <MDXRenderer>{mdx.code.body}</MDXRenderer>
    </article>
  </Layout>
)

export default PostPage