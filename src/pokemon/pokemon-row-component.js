import React, { PropTypes } from 'react'

import Pokeball from './pokeball-component'

let PokemonRow = ({index, name, caught}) => {
  return <li className='pokemon-row'>
    <Pokeball caught={caught} />
    <button className='index'>{index}</button>
    <button className='name'>
      <span>{name}</span>
    </button>
  </li>
}

PokemonRow.propTypes = {
  index: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  caught: PropTypes.bool.isRequired
}

export default PokemonRow
