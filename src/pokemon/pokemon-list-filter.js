import React from 'react'

let PokemonListFilter = () => {
  return <div>
    <input className='filter' type='text' placeholder='Search' />
    <div className='filter'>
      <input id='caught' type='checkbox' />
      <label htmlFor='caught'>Caught</label>
    </div>
    <div className='filter'>
      <input id='uncaught' type='checkbox' />
      <label htmlFor='uncaught'>Uncaught</label>
    </div>
  </div>
}

export default PokemonListFilter
