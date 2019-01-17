import React from 'react'
import { Link } from 'gatsby'

import Layout from './Layout'

export const toPath = ({ frontmatter, parent = {} }) => {
  if (frontmatter.path) {
    return frontmatter.path
  }

  return [
    parent.sourceInstanceName,
    parent.name
  ].join('/')
}

const PostList = ({ data }) => {
  const { allMdx: { edges: posts } } = data

  return (
    <Layout>
      <div className="posts">
        {posts.map(post => {

          return (
            <div className="post py3">
              <div className="post-meta">{post.date}</div>
              <h3 className="post-link">
                <Link to={toPath(post)}>{post.title}</Link>
              </h3>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default PostList
