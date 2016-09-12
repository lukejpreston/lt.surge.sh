import React, { PropTypes } from 'react'

import { Link } from 'react-router'

let Preview = ({preview}) => {
  return <div className='preview'>
    <span>{preview.name}</span>
    <span>{preview.flavour}</span>
    <Link to={`/pokemon/${preview.name.toLowerCase()}`}>MORE</Link>
  </div>
}

Preview.propTypes = {
  preview: PropTypes.object.isRequired
}

export default Preview
