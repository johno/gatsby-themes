/** @jsx jsx */
import { jsx, Header, Container } from 'theme-ui'
import { Link } from 'gatsby'

const HeaderLink = props =>
  <Link
    {...props}
    activeClassName='active'
    sx={{
      textDecoration: 'none',
      fontWeight: 'bold',
      color: 'primary',
      '&.active': {
        color: 'secondary',
      }
    }}
  />

export default () => (
  <Header>
    <Container
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        width: '100%'
      }}
    >
      <p
        sx={{
          fontSize: 3,
          fontWeight: 'bold'
        }}
      >
        Title
      </p>
      <nav
        sx={{
          ml: 'auto',
          a: {
            ml: 3
          }
        }}
      >
        <HeaderLink to='/about'>About</HeaderLink>
        <HeaderLink to='https://twitter.com/4lpine'>Twitter</HeaderLink>
        <HeaderLink to='https://github.com/johno'>GitHub</HeaderLink>
      </nav>
    </Container>
  </Header>
)
