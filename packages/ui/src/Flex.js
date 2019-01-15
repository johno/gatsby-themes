import styled from 'styled-components'

import {
  alignItems,
  flexDirection,
  flexWrap,
  height,
  justifyContent,
  space,
  width,
  propTypes
} from 'styled-system'

/** @component */
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
Flex.propTypes = {
  as: propTypes.numberOrString,
  alignItems: propTypes.responsive,
  flexDirection: propTypes.responsive,
  flexWrap: propTypes.responsive,
  height: propTypes.responsive,
  justifyContent: propTypes.responsive,
  width: propTypes.responsive,
  ...space.propTypes
}