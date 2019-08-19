/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { Link } from 'gatsby'

export default ({ posts }) => (
  <ul
    sx={{
      listStyle: 'none',
      display: 'grid',
      gridGap: 3,
      gridTemplateColumns: 'repeat(auto-fit, minmax(256px, 1fr))',
      m: 0,
      px: 3,
      py: 4,
    }}>
    {posts.map(post => (
      <li key={post.id}
        sx={{
        }}>
        <Styled.h2
          sx={{
            m: 0,
          }}>
          <Link to={post.slug}
            sx={{
              color: 'inherit',
              textDecoration: 'none',
              ':hover,:focus': {
                color: 'primary',
                textDecoration: 'underline',
              }
            }}>
            {post.title}
          </Link>
        </Styled.h2>
        <small sx={{ fontWeight: 'bold' }}>{post.date}</small>
        <Styled.p
          sx={{
            m: 0,
          }}>
          {post.excerpt}
        </Styled.p>
      </li>
    ))}
  </ul>
)
