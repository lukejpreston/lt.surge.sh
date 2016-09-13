import './pokemon-preview.css'
import React, { PropTypes } from 'react'

import { Link } from 'react-router'

let Preview = ({preview}) => {
  return <div className='preview pokemon'>
    <div className='img-container'>
      <img src={preview.image.src} alt={preview.image.alt} />
    </div>
    <div className='title'>
      <span>{preview.name}</span>
    </div>
    <div className='flavour'>
      <span>{preview.flavour}</span>
    </div>
    <div className='button-container'>
      <Link to={preview.to} className='button'>MORE</Link>
    </div>
  </div>
}

Preview.propTypes = {
  preview: PropTypes.object.isRequired
}

export default Preview
