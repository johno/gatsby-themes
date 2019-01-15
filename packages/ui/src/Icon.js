import React from 'react'

import {Spectrum} from './icons/Spectrum'

const URL_BASE = 'https://icon.now.sh'

/**
 * Icon component using icon.now.sh
 */
export const Icon = ({name, color = '#000', size = 64, ...props}) => {
  if (name === 'spectrum') {
    return <Spectrum color={color} size={size} {...props} />
  }

  const url = `${URL_BASE}/${name}/${color.replace('#', '')}/${size}`

  return <img src={url} alt={`Icon for ${name}`} {...props} />
}

Icon.displayName = 'gatsby-ui.Icon'
Icon.defaultProps = {
  color: '#000',
  size: 64
}
Icon.propTypes = {
  /**
   * Color of the icon
   */
  color: PropTypes.string,
  /**
   * Size of the SVG
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}