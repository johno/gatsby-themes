/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

export default () => (
  <header
    sx={{
      display: 'flex',
      alignItems: 'center',
      variant: 'styles.header',
    }}>
    <Link to='/'
      sx={{
        variant: 'styles.navlink',
        p: 2,
      }}>
      Hello
    </Link>
    <div sx={{ mx: 'auto' }} />
    <Link to='/blog'
      sx={{
        variant: 'styles.navlink',
        p: 2,
      }}>
      Blog
    </Link>
    <Link to='/about'
      sx={{
        variant: 'styles.navlink',
        p: 2,
      }}>
      About
    </Link>
  </header>
)
