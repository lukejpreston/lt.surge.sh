import { useState } from 'react'

const Pokemon = () => {
  const [pokemon, setPokemon] = useState({ index: -1 })

  const state = {
    ...pokemon
  }

  return {
    ...state,
    updateRoute (router) {
      const index = parseInt(router.location.pathname.replace('/', ''), 10)
      setPokemon({
        name: 'Loading ...',
        index
      })

      if (index > 0 && index < 152) {
        fetch(`${process.env.REACT_APP_API}/pokemon/${index}/`)
          .then(res => res.json())
          .then(res => {
            setPokemon({
              name: res.name,
              index
            })
          })
      }
    }
  }
}

export default Pokemon
