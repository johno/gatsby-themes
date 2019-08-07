/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'

export default ({ title, excerpt, date, slug }) => (
  <div
    sx={{
      mt: 2
    }}
  >
    <Styled.h3
      sx={{
        fontSize: 4,
        m: 0
      }}
    >
      <Styled.a
        href={slug}
        sx={{
          textDecoration: 'none',
          color: 'text'
        }}
      >
        {title}
      </Styled.a>
    </Styled.h3>
  </div>
)
