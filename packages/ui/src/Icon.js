import React from 'react'

import {Spectrum} from './icons/Spectrum'

const URL_BASE = 'https://icon.now.sh'

export const Icon = ({name, color = '#000', size = 64, ...props}) => {
  if (name === 'spectrum') {
    return <Spectrum color={color} size={size} {...props} />
  }

  const url = `${URL_BASE}/${name}/${color.replace('#', '')}/${size}`

  return <img src={url} {...props} />
}

Icon.displayName = 'gatsby-ui.Icon'
Icon.defaultProps = {
  color: '#000',
  size: 64
}
