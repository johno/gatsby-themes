/** @jsx jsx */
import { jsx, Container } from 'theme-ui'

import PostLink from '../components/post-link'

export default posts => (
  <Container>
    {posts.map(post => (
      <PostLink key={post.id} {...post} />
    ))}
  </Container>
)
