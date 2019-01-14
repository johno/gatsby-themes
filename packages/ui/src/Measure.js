import styled from 'styled-components'

import {maxWidth, space, width, propTypes} from 'styled-system'

/** @component */
export const Measure = styled.div`
  ${maxWidth}
  ${space}
  ${width}
`

Measure.displayName = 'gatsby-ui.Measure'
Measure.defaultProps = {
  maxWidth: 'measure'
}
Measure.propTypes = {
  as: propTypes.numberOrString,
  maxWidth: propTypes.responsive,
  width: propTypes.responsive,
  ...space.propTypes
}
