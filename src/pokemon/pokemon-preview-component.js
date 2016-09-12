import React, { PropTypes } from 'react'

import { Link } from 'react-router'
import Pokemon from '../sprites/1.js'

let Preview = ({preview}) => {
  return <div className='preview'>
    <Pokemon />
    <span>{preview.name}</span>
    <span>{preview.flavour}</span>
    <Link to={`/pokemon/${preview.name.toLowerCase()}`}>MORE</Link>
  </div>
}

Preview.propTypes = {
  preview: PropTypes.object.isRequired
}

export default Preview
