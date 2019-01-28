import React from 'react'
import { Container } from 'gatsby-ui'

import FeaturedPosts from './FeaturedPosts'
import PostLink from './PostLink'

const PostList = ({ data }) => {
  const { allMdx: { edges } } = data
  const [first, second, third, ...posts] = edges

  return (
    <>
      <FeaturedPosts posts={[first.node, second.node, third.node]} />
      <Container maxWidth="measureWide" mt={[4, 4, 5]}>
        {posts.map(post => (
          <PostLink key={post.node.id} post={post.node} />
        ))}
      </Container>
    </>
  )
}

export default PostList
