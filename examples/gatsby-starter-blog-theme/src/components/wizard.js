/** @jsx jsx */
import { jsx, Styled, ThemeProvider } from 'theme-ui'
import theme from 'gatsby-plugin-theme-ui/src'

import * as headers from '../../../../packages/gatsby-ui/templates/headers'
import * as footers from '../../../../packages/gatsby-ui/templates/footers'
import * as postLists from '../../../../packages/gatsby-ui/templates/post-lists'

const POSTS = [
  {
    title: 'A Conceptual Look at Theming',
    id: '/a-conceptual-look-at-theming',
    slug: '/a-conceptual-look-at-theming',
    excerpt:
      'The word theme can mean a lot of different things and invoke a lot of different interpretations, which can be both a blessing and a curse.',
    date: '2019-08-10',
  },
  {
    title: 'Code Literacy',
    id: '/code-literacy',
    slug: '/code-literacy',
    excerpt: `Ah yes, everyone's favorite question: should designers code? As much as I'd love to pontificate on the matter, I think the framing of this question is fundamentally wrong.`,
    date: '2019-07-25',
  },
  {
    title: 'Portability',
    id: '/portability',
    slug: '/portability',
    excerpt: `In software development, formats help ensure that content and data are portable and can be used in many different applications.`,
    date: '2019-07-23',
  },
  {
    title: 'Themeability',
    id: '/themeability',
    slug: '/themeability',
    excerpt: `I've been interested in the idea of constraint-based design for a while. By constraining the solution space for a particular problem, new and novel ideas can emerge beyond the initial problem's scope.`,
    date: '2019-07-21',
  }
]

export default () => (
  <ThemeProvider theme={theme}>
    <Styled.root
      sx={{
        display: 'flex',
        width: '100%',
        minHeight: '100vh'
      }}
    >
      <div
        sx={{
          width: '33%',
          minHeight: '100vh',
          backgroundColor: '#fafafa'
        }}
      >
        {Object.entries(headers).map(([key, Component]) => (
          <div
            key={key}
            sx={{
              backgroundColor: 'white'
            }}
          >
            <Component />
          </div>
        ))}
      </div>
      <div
        sx={{
          width: '67%',
          minHeight: '100vh'
        }}
      >

      </div>
    </Styled.root>
  </ThemeProvider>
)
