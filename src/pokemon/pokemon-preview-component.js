import React, { PropTypes } from 'react'

import { Link } from 'react-router'

let Preview = ({preview}) => {
  return <div className='preview'>
    <img src={preview.image.src} alt={preview.image.alt} />
    <span>{preview.name}</span>
    <span>{preview.flavour}</span>
    <Link to={preview.to}>MORE</Link>
  </div>
}

Preview.propTypes = {
  preview: PropTypes.object.isRequired
}

export default Preview
