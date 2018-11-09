import React from 'react'
import { title } from 'change-case'

import Search from './search'
import Name from './name'

const Pokemon = ({ search, pokemon }) => {
  if (pokemon.index === -1) return null
  if (pokemon.name.toLowerCase().includes('loading')) return <span>Loading</span>
  return <section className='section'>
    <div className='container'>
      <Search {...search} />
      <div className='columns'>
        <div className='column is-half'>
          <Name name={pokemon.name} type={pokemon.types[0]} index={pokemon.index} />
          <figure className='image is-128x128'>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.index}.png`} alt={pokemon.name} />
          </figure>
          <div className='types'>
            {pokemon.types.map(type => <span className={`type is-${type}`} key={type}>{title(type)}</span>)}
          </div>
        </div>
        <div className='column is-half'>
          <div className='stat'>
            <span className='stat-label'>HP</span>
            <progress className='progress is-danger' value={pokemon.hp} max='255'>{pokemon.hp}%</progress>
          </div>
          <div className='stat'>
            <span className='stat-label'>Attack</span>
            <progress className='progress is-danger' value={pokemon.attack} max='190'>{pokemon.attack}%</progress>
          </div>
          <div className='stat'>
            <span className='stat-label'>Special Attack</span>
            <progress className='progress is-danger' value={pokemon.specialAttack} max='194'>{pokemon.specialAttack}%</progress>
          </div>
          <div className='stat'>
            <span className='stat-label'>Defense</span>
            <progress className='progress is-danger' value={pokemon.defense} max='230'>{pokemon.defense}%</progress>
          </div>
          <div className='stat'>
            <span className='stat-label'>Special Defence</span>
            <progress className='progress is-danger' value={pokemon.specialDefense} max='230'>{pokemon.specialDefense}%</progress>
          </div>
          <div className='stat'>
            <span className='stat-label'>Speed</span>
            <progress className='progress is-danger' value={pokemon.speed} max='180'>{pokemon.speed}%</progress>
          </div>
        </div>
      </div>
      <div className='description'>
        <p>{pokemon.description}</p>
      </div>
    </div>
  </section>
}

export default Pokemon
