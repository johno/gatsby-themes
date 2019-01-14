import React from 'react'
import PropTypes from 'prop-types'

import {Image} from './Image'

const BASE_URL = 'https://logo.clearbit.com'

/**
 * Logo component that uses Clearbit's Logo API
 */
export const Logo = ({domain, ...props}) => {
  const url = [BASE_URL, domain].join('/')

  return <Image src={url} alt={`Logo for ${domain}`} {...props} />
}

Logo.displayName = 'gatsby-ui.Logo'
Logo.propTypes = {
  /**
   * Domain for the logo, for example gatsbyjs.com
   */
  domain: PropTypes.string.isRequired
}
