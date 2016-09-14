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
      <div className={`block types types-${details.types.length}`}>{
          details.types.map(t => {
            return <button key={`type-${t}`} className={`type ${t}`}>{t}</button>
          })
      }</div>
      <span className='block flavour'>{details.flavour}</span>
    </div>
  </div>
}

PokemonDetails.propTypes = {
  details: PropTypes.object.isRequired,
  goBack: PropTypes.func.isRequired
}

export default PokemonDetails
