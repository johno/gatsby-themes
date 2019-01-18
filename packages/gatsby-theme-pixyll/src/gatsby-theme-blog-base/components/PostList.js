import React from 'react'
import { Link } from 'gatsby'

export const toPath = ({ frontmatter = {}, parent = {} }) => {
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
  console.log(data)

  return (
    <div className="posts">
      {posts.map(({ node: post }) => {
        const { frontmatter } = post

        return (
          <div key={post.id} className="post py3">
            <div className="post-meta">{frontmatter.date}</div>
            <Link to={toPath(post)} className="post-link">
              <h3 className="h1 post-title">
                {frontmatter.title}
              </h3>
            </Link>
            <p className="post-summary">
              {frontmatter.summary || post.excerpt || 'Here is an excerpt for the blog post'}
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default PostList
