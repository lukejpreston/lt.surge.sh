import './case.css'

import React, { PropTypes } from 'react'

let Case = ({open, status, children}) => {
  children = children || null
  return <div className={`pokedex ${status}`}>
    <div className='row'>
      <div className='content columns twelve'>
        {children}
      </div>
    </div>
    <div className='case'>
      <div className='top'>
        <div className='ball' />
        <button className='btn' onClick={open} />
      </div>
      <div className='bottom'>
        <div className='ball' />
      </div>
    </div>
  </div>
}

Case.propTypes = {
  open: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  children: PropTypes.object
}

export default Case
