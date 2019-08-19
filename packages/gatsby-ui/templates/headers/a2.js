/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

export default () => (
  <header
    sx={{
      variant: 'styles.header',
    }}>
    <div
      sx={{
        maxWidth: 768,
        mx: 'auto',
        px: 3,
        display: 'flex',
        alignItems: 'baseline',
      }}>
      <Link to='/'
        sx={{
          variant: 'styles.navlink',
          fontSize: 5,
          py: 2,
        }}>
        Hello
      </Link>
      <div sx={{ mx: 'auto' }} />
      <Link to='/blog'
        sx={{
          variant: 'styles.navlink',
          ml: 3,
          py: 2,
        }}>
        Blog
      </Link>
      <Link to='/about'
        sx={{
          variant: 'styles.navlink',
          ml: 3,
          py: 2,
        }}>
        About
      </Link>
    </div>
  </header>
)
