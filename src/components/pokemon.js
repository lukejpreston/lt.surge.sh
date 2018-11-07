import React from 'react'
import { Link } from 'react-router-dom'
import Search from './search'

const Pokemon = ({ search, pokemon }) => {
  return <div>
    <Link to='/'>Home</Link>
    <Search {...search} />
    <span>{pokemon.name}</span>
  </div>
}

export default Pokemon
