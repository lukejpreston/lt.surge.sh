import { useState } from 'react'

const Pokemon = () => {
  let router

  const [pokemon, setPokemon] = useState({ index: -1 })

  const state = {
    pokemon
  }

  return {
    ...state,
    setRouter (newRouter) {
      router = newRouter
      const index = parseInt(router.location.pathname.replace('/', ''), 10)
      if (pokemon.index !== index && index > 0 && index < 152) {
        setPokemon({
          name: 'Loading ...',
          index
        })
        fetch(`${process.env.REACT_APP_API}/pokemon/${index}/`)
          .then(res => res.json())
          .then(res => {
            setPokemon({
              name: res.name,
              index
            })
          })
      }
      return null
    }
  }
}

export default Pokemon
