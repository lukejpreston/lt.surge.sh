import React, { PropTypes } from 'react'

import sprite from '../sprites/1.json'

let PokemonDetails = ({details}) => {
  return <div className='details'>
    <img src={sprite.src} alt='bacon' />
  </div>
}

PokemonDetails.propTypes = {
  details: PropTypes.object.isRequired
}

export default PokemonDetails
