import styled from 'styled-components'
import {space, width, maxWidth, borderColor, propTypes} from 'styled-system'

/** @component */
export const Divider = styled.hr`
  border-top: none;
  border-left: none;
  border-right: none;

  ${borderColor}
  ${maxWidth}
  ${space}
  ${width}
`

Divider.displayName = 'gatsby-ui.Divider'
Divider.defaultProps = {
  borderColor: 'grays.1',
  my: 4
}
Divider.propTypes = {
  as: propTypes.numberOrString,
  borderColor: propTypes.responsive,
  maxWidth: propTypes.responsive,
  width: propTypes.responsive,
  ...space.propTypes
}
