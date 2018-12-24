import styled from 'styled-components'
import {space, width, maxWidth} from 'styled-system'

export const Container = styled.div`
  ${space}
  ${width}
  ${maxWidth}
`

Container.displayName = 'gatsby-ui.Container'
Container.defaultProps = {
  maxWidth: 1420,
  m: 'auto',
  px: 3
}
