import { useState } from 'react'
import { camel } from 'change-case'

const Pokemon = () => {
  const [pokemon, setPokemon] = useState({ index: -1 })

  const state = {
    ...pokemon
  }

  const actions = {
    updateRoute (router) {
      const index = parseInt(router.location.pathname.replace('/', ''), 10)
      setPokemon({
        name: 'Loading ...',
        index
      })

      if (index > 0 && index < 152) {
        const description = fetch(`${process.env.REACT_APP_API}/pokemon-species/${index}/`)
          .then(res => res.json())
          .then(res => {
            return res['flavor_text_entries'].filter(text => {
              return text.language.name === 'en' && text.version.name === 'alpha-sapphire'
            })[0]['flavor_text']
          })

        const info = fetch(`${process.env.REACT_APP_API}/pokemon/${index}/`)
          .then(res => res.json())
          .then(res => {
            const pokemon = {
              name: res.name,
              index,
              image: res.sprites.front_default,
              types: res.types.sort((left, right) => {
                if (left.slot > right.slot) return 1
                if (left.slot < right.slot) return 1
                return 0
              }).map(({ type }) => type.name)
            }

            res.stats.forEach(stat => {
              pokemon[camel(stat.stat.name)] = stat.base_stat
            })

            return pokemon
          })

        Promise.all([description, info]).then(res => {
          setPokemon({ description: res[0], ...res[1] })
        })
      }
    }
  }

  return {
    ...state,
    ...actions
  }
}

export default Pokemon
