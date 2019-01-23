import React from 'react'

import FeaturedPosts from './FeaturedPosts'
import PostLink from './PostLink'

const PostList = ({ data }) => {
  const { allMdx: { edges } } = data
  const [first, second, third, ...posts] = edges

  return (
    <>
      <FeaturedPosts posts={[first.node, second.node, third.node]} />
      {posts.map(post => (
        <PostLink key={post.node.id} post={post.node} />
      ))}
    </>
  )
}

export default PostList
