import React from 'react'

let PokemonListFilter = () => {
  return <div className='filter-container'>
    <input className='search' type='text' placeholder='Search' />
    <div className='checkbox'>
      <input id='caught' type='checkbox' />
      <label htmlFor='caught'>Caught</label>
    </div>
    <div className='checkbox'>
      <input id='uncaught' type='checkbox' />
      <label htmlFor='uncaught'>Uncaught</label>
    </div>
  </div>
}

export default PokemonListFilter
