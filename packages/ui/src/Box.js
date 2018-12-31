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
  width
} from 'styled-system'

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
  ...alignSelf.propTypes,
  ...borderColor.propTypes,
  ...boxShadow.propTypes,
  ...color.propTypes,
  ...display.propTypes,
  ...flex.propTypes,
  ...order.propTypes,
  ...space.propTypes,
  ...textAlign.propTypes,
  ...width.propTypes
}
Box.propertyControls = {
  color: {
    type: 'STRING',
    themeKey: 'colors',
    system: true
  },
  bg: {
    type: 'STRING',
    themeKey: 'colors',
    system: true,
    title: 'Background Color'
  },
  shadow: {
    type: 'STRING',
    themeKey: 'shadows',
    title: 'Box Shadow'
  }
}
