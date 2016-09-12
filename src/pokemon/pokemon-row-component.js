import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import Pokeball from './pokeball-component'

let PokemonRow = ({index, name, caught}) => {
  return <li className='pokemon-row'>
    <div className='pokemon-row-container'>
      <Pokeball caught={caught} />
      <Link to={`/pokemon/${name}`} className='button info'>
        <span className='index'>{index}</span>
        <span className='name'>{name}</span>
      </Link>
    </div>
  </li>
}

PokemonRow.propTypes = {
  index: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  caught: PropTypes.bool.isRequired
}

export default PokemonRow
