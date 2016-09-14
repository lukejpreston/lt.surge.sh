import './pokemon-details.css'

import React, { PropTypes } from 'react'

let PokemonDetails = ({details, goBack}) => {
  return <div className='details pokemon'>
    <button
      onClick={goBack}
      className='back'
      >
      BACK
    </button>
    <div className='content'>
      <img className='block image' src={details.image.src} alt={details.image.alt} />
      <span className='block name'>{details.name}</span>
      <span className='block flavour'>{details.flavour}</span>
      <div className='block types two'>
        <button className='type grass'>grass</button>
        <button className='type poison'>poision</button>
      </div>
    </div>
  </div>
}

PokemonDetails.propTypes = {
  details: PropTypes.object.isRequired,
  goBack: PropTypes.func.isRequired
}

export default PokemonDetails
