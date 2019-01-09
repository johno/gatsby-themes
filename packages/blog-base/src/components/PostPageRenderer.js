import React from 'react'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

const PostPage = ({ data: { mdx } }) => <MDXRenderer>{mdx.code.body}</MDXRenderer>

export default PostPage