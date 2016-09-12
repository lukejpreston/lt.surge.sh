import React, { PropTypes } from 'react'

const Pokeball = ({caught}) => {
  let status = caught ? 'caught' : 'uncaught'
  return <button className='pokeball'>
    <div className={`pokeball-icon ${status}`}>
      <div className='ball-top' />
      <div className='ball-bottom'>
        <div className='ball-btn' />
      </div>
    </div>
  </button>
}

Pokeball.propTypes = {
  caught: PropTypes.bool.isRequired
}

export default Pokeball
