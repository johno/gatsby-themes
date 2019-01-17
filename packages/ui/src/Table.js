import styled from 'styled-components'
import {borderColor, color, fontWeight, space, textAlign, width, propTypes} from 'styled-system'

import {fontFamilies} from './theme'

export const Table = styled.table`
  overflow: auto;
  font-family: ${fontFamilies.sans};
  border-collapse: collapse;
  border-spacing: 0;

  ${space}
  ${width}
`
Table.displayName = 'gatsby-ui.Table'
Table.defaultProps = {
  width: '100%'
}
Table.propTypes = {
  width: propTypes.responsive,
  ...space.propTypes
}

Table.THead = styled.thead``
Table.TBody = styled.tbody``
Table.TR = styled.tr``

Table.TH = styled.th`
  border-top: thin solid;
  border-bottom: thin solid;

  ${borderColor}
  ${color}
  ${fontWeight}
  ${textAlign}
  ${space}
`
Table.TH.defaultProps = {
  borderColor: 'grays.2',
  bg: 'grays.0',
  fontWeight: 'bold',
  textAlign: 'left',
  p: 2
}

Table.TD = styled.td`
  border-bottom: thin solid;

  ${borderColor}
  ${color}
  ${fontWeight}
  ${space}
`
Table.TD.defaultProps = {
  borderColor: 'grays.1',
  p: 2
}