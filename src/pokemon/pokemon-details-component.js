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
          details.types.map(item => {
            return <button key={`type-${item}`} className={`type ${item.toLowerCase()}`}>{item}</button>
          })
      }</div>
      <span className='block flavour'>{details.flavour}</span>
      <div className={`block egg-groups egg-groups-${details.eggGroups.length}`}>{
          details.eggGroups.map(item => {
            return <button key={`egg-group-${item}`} className={`egg-group ${item.toLowerCase()}`}>{item}</button>
          })
      }</div>
    </div>
  </div>
}

PokemonDetails.propTypes = {
  details: PropTypes.object.isRequired,
  goBack: PropTypes.func.isRequired
}

export default PokemonDetails
