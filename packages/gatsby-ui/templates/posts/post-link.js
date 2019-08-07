/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'

export default ({ title, excerpt, date, slug }) => (
  <div
    sx={{
      mt: 4
    }}
  >
    <Styled.p
      sx={{
        m: 0,
        color: 'gray'
      }}
    >
      {date}
    </Styled.p>
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
    <Styled.p
      sx={{
        mt: 2
      }}
    >
      {excerpt}
    </Styled.p>
  </div>
)
