import styled from 'styled-components'

import {
  borderRadius,
  color,
  fontSize,
  fontWeight,
  lineHeight,
  space,
  textAlign
} from 'styled-system'

import {fontFamilies} from './theme'

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
  ...color.propTypes,
  ...fontSize.propTypes,
  ...fontWeight.propTypes,
  ...lineHeight.propTypes,
  ...space.propTypes,
  ...textAlign.propTypes
}

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
  ...color.propTypes,
  ...fontSize.propTypes,
  ...fontWeight.propTypes,
  ...lineHeight.propTypes,
  ...space.propTypes,
  ...textAlign.propTypes,
  ...borderRadius.propTypes
}
