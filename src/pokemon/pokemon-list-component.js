import './pokemon-list.css'
import React, { PropTypes } from 'react'

import PokemonRow from './pokemon-row-component'
import PokemonFilter from './pokemon-list-filter'

let List = ({list}) => {
  return <div className='list'>
    <h4 className='title'>Pokemon</h4>
    <PokemonFilter />
    <div className='list-container'>
      <ul>
        <PokemonRow index='001' name='fletchfinder' caught />
        <PokemonRow index='001' name='fletchfinder' caught={false} />
        <PokemonRow index='001' name='a' caught={false} />
        <PokemonRow index='001' name='b' caught={false} />
        <PokemonRow index='001' name='c' caught={false} />
        <PokemonRow index='001' name='d' caught={false} />
        <PokemonRow index='001' name='e' caught={false} />
        <PokemonRow index='001' name='f' caught={false} />
        <PokemonRow index='001' name='g' caught={false} />
        <PokemonRow index='001' name='h' caught={false} />
        <PokemonRow index='001' name='i' caught={false} />
        <PokemonRow index='001' name='j' caught={false} />
      </ul>
    </div>
  </div>
}

List.propTypes = {
  list: PropTypes.array.isRequired
}

export default List
