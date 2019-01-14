import styled from 'styled-components'

import {
  alignSelf,
  borderColor,
  boxShadow,
  color,
  display,
  flex,
  order,
  space,
  textAlign,
  width,
  propTypes
} from 'styled-system'

/** @component */
export const Box = styled.div`
  box-sizing: border-box;

  ${alignSelf}
  ${borderColor}
  ${boxShadow}
  ${color}
  ${display}
  ${flex}
  ${order}
  ${space}
  ${textAlign}
  ${width}
`

Box.displayName = 'gatsby-ui.Box'
Box.propTypes = {
  as: propTypes.responsive,
  alignSelf: propTypes.responsive,
  bg: propTypes.responsive,
  borderColor: propTypes.responsive,
  boxShadow: propTypes.responsive,
  color: propTypes.responsive,
  display: propTypes.responsive,
  flex: propTypes.responsive,
  order: propTypes.responsive,
  textAlign: propTypes.responsive,
  width: propTypes.responsive,
  ...space.propTypes
}
