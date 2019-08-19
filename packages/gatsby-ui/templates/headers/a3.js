/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

export default () => (
  <header
    sx={{
      display: 'grid',
      gridGap: 3,
      maxWidth: 768,
      mx: 'auto',
      px: 3,
      py: 3,
      gridAutoFlow: 'row',
      gridTemplateColumns: [
        'repeat(2, 1fr)',
        'repeat(3, 1fr)',
      ],
      variant: 'styles.header',
    }}>
    <div
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gridColumnStart: [ 1, 2 ],
        gridColumnEnd: [ 3, 3 ],
        order: [ 0, 1 ],
      }}>
      <Link to='/' title='Home'>
        <img
          alt='UI Logo'
          src='https://contrast.now.sh/cff/40f?size=48&fontSize=2&baseline=2&fontWeight=900&radius=32&text=UI'
        />
        <span
          sx={{
            position: 'absolute',
            width: 1,
            height: 1,
            overflow: 'hidden',
            top: -9999,
          }}>
          Home
        </span>
      </Link>
    </div>
    <div
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}>
      <Link to='/work'
        sx={{
          variant: 'styles.navlink',
          p: 2,
        }}>
        Work
      </Link>
      <Link to='/blog'
        sx={{
          variant: 'styles.navlink',
          p: 2,
        }}>
        Blog
      </Link>
    </div>
    <div
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        order: 2
      }}>
      <Link to='/about'
        sx={{
          variant: 'styles.navlink',
          p: 2,
        }}>
        About
      </Link>
      <Link to='/contact'
        sx={{
          variant: 'styles.navlink',
          p: 2,
        }}>
        Contact
      </Link>
    </div>
  </header>
)
