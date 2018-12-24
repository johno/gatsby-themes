import styled from 'styled-components'

import {
  alignItems,
  flexDirection,
  flexWrap,
  height,
  justifyContent,
  space,
  width
} from 'styled-system'

export const Flex = styled.div`
  box-sizing: border-box;
  display: flex;

  ${alignItems}
  ${flexDirection}
  ${flexWrap}
  ${height}
  ${justifyContent}
  ${space}
  ${width}
`

Flex.displayName = 'gatsby-ui.Flex'
