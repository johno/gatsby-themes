import styled from 'styled-components'
import {space, width, maxWidth, propTypes} from 'styled-system'

/** @component */
export const Image = styled.img`
  ${maxWidth}
  ${space}
  ${width}
`

Image.displayName = 'gatsby-ui.Image'
Image.defaultProps = {
  maxWidth: '100%'
}
Image.propTypes = {
  as: propTypes.numberOrString,
  maxWidth: propTypes.responsive,
  width: propTypes.responsive,
  ...space.propTypes
}
