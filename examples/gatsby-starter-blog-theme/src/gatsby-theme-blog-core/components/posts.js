/** @jsx jsx */
import { jsx, Container } from 'theme-ui'

import Layout from '../../components/layout'
import PostLink from '../../components/post-link'

export default ({ data: { allBlogPost: { edges } } }) => (
  <Layout>
    <Container>
      {edges.map(({ node }) => (
        <PostLink key={node.id} {...node} />
      ))}
    </Container>
  </Layout>
)
