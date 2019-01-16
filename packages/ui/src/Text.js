import styled from 'styled-components'

import {
  borderRadius,
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
export const Text = styled.p`
  font-family: ${fontFamilies.sans};

  ${color}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${space}
  ${textAlign}
`

Text.displayName = 'gatsby-ui.Text'
Text.defaultProps = {
  m: 0,
  fontSize: 3,
  lineHeight: 'copy'
}
Text.propTypes = {
  as: propTypes.numberOrString,
  bg: propTypes.responsive,
  color: propTypes.responsive,
  fontSize: propTypes.responsive,
  fontWeight: propTypes.responsive,
  lineHeight: propTypes.responsive,
  textAlign: propTypes.responsive,
  ...space.propTypes
}

/** @component */
export const Code = styled(Text)`
  font-family: ${fontFamilies.mono};

  ${borderRadius};
`

Code.displayName = 'gatsby-ui.Code'
Code.defaultProps = {
  as: 'code',
  borderRadius: 4,
  bg: 'grays.1',
  color: 'grays.9',
  px: 2
}
Code.propTypes = {
  as: propTypes.numberOrString,
  bg: propTypes.responsive,
  borderRadius: propTypes.responsive,
  color: propTypes.responsive,
  fontSize: propTypes.responsive,
  fontWeight: propTypes.responsive,
  lineHeight: propTypes.responsive,
  textAlign: propTypes.responsive,
  ...space.propTypes
}
