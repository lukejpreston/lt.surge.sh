import React from 'react'
import { Link } from 'react-router-dom'
import Search from './search'

const Pokemon = ({ suggestions = [], onChange, onClick, input, pokemon }) => {
  return <div>
    <Link to='/'>Home</Link>
    <Search onChange={onChange} input={input} suggestions={suggestions} onClick={onClick} />
    <span>{pokemon.name}</span>
  </div>
}

export default Pokemon
