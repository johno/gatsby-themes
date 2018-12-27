import styled from 'styled-components'

import {
  alignSelf,
  borderColor,
  boxShadow,
  color,
  flex,
  order,
  space,
  textAlign,
  width
} from 'styled-system'

export const Box = styled.div`
  box-sizing: border-box;

  ${alignSelf}
  ${borderColor}
  ${boxShadow}
  ${color}
  ${flex}
  ${order}
  ${space}
  ${textAlign}
  ${width}
`

Box.displayName = 'gatsby-ui.Box'
