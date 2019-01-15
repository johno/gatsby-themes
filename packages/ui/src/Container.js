import styled from 'styled-components'
import {space, width, maxWidth, propTypes} from 'styled-system'

/** @component */
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
Container.propTypes = {
  as: propTypes.numberOrString,
  maxWidth: propTypes.responsive,
  width: propTypes.responsive,
  ...space.propTypes
}