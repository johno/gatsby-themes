import styled from 'styled-components'

import { Box } from 'gatsby-ui'

const Card = styled(Box)`
  border-radius: 10px;
  box-shadow: 0 15px 40px 0 rgba(0, 0, 0, .11), 0 5px 35px 0 rgba(0, 0, 0, .1);
`

Card.defaultProps = {
  bg: '#0c0621',
  color: 'white'
}

export default Card