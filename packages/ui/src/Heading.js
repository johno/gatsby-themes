import styled from 'styled-components'

import {
  color,
  fontSize,
  fontWeight,
  lineHeight,
  space,
  textAlign,
  propTypes
} from 'styled-system'

import {fontFamilies} from './theme'

/** @component */
export const Heading = styled.h3`
  font-family: ${fontFamilies.sans};

  ${color}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${space}
  ${textAlign}
`

Heading.displayName = 'gatsby-ui.Heading'
Heading.defaultProps = {
  m: 0,
  fontSize: 3,
  fontWeight: 'bold',
  lineHeight: 'title'
}
Heading.propTypes = {
  as: propTypes.numberOrString,
  color: propTypes.responsive,
  fontSize: propTypes.responsive,
  fontWeight: propTypes.responsive,
  lineHeight: propTypes.responsive,
  textAlign: propTypes.responsive,
  ...space.propTypes
}
