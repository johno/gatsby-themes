/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'

export default ({ title, excerpt, date, slug }) => (
  <Styled.h3>
    <Styled.a href={slug}>{title}</Styled.a>
  </Styled.h3>
)
