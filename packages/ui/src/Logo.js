import React from 'react'
import PropTypes from 'prop-types'

import {Image} from './Image'

const BASE_URL = 'https://logo.clearbit.com'

export const Logo = ({domain, ...props}) => {
  const url = [BASE_URL, domain].join('/')

  return <Image src={url} alt={`Logo for ${domain}`} {...props} />
}

Logo.displayName = 'gatsby-ui.Logo'
Logo.propTypes = {
  domain: PropTypes.string.isRequired
}
