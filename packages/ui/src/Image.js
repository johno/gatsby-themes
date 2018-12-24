import styled from 'styled-components'
import {space, width, maxWidth} from 'styled-system'

export const Image = styled.img`
  ${maxWidth}
  ${space}
  ${width}
`

Image.displayName = 'gatsby-ui.Image'
Image.defaultProps = {
  maxWidth: '100%'
}
