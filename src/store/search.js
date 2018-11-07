import { useState } from 'react'
import fuzzy from 'fuzzy'

const arr = Array.apply(null, Array(151)).map((x, i) => `${i} Loading ...`)
let router

const Search = () => {
  const [indexes, setIndexes] = useState(arr)
  const [suggestions, setSuggestions] = useState([])
  const [input, setInput] = useState('')

  const state = {
    indexes,
    suggestions,
    input
  }
  const actions = {
    onClick (pokemon) {
      if (pokemon !== 'loading' && pokemon !== 'error') {
        setSuggestions([])
        setInput('')
        const index = pokemon.split(' ')[0]
        router.history.push(`/${index}`)
      }
    },
    onChange (value) {
      setInput(value)
      if (value === '') setSuggestions([])
      else {
        if (indexes[0] === '0 Loading ...') {
          setSuggestions(['loading'])
        } else if (indexes[0] === 'error') {
          setSuggestions(['error: Could connect to PokeAPI'])
        } else {
          const matches = fuzzy.filter(value.toLowerCase(), indexes)
          setSuggestions(matches.map(m => m.string))
        }
      }
    },
    updateRoute (newRouter) {
      router = newRouter
      if (indexes[0] === '0 Loading ...') {
        fetch(`${process.env.REACT_APP_API}/pokemon/`)
          .then(res => res.json())
          .then(res => {
            setIndexes(res.results.slice(0, 151).map((p, index) => `${index + 1} ${p.name}`))
          })
          .catch(() => {
            setIndexes(['error'])
          })
      }
    }
  }

  return {
    ...state,
    ...actions
  }
}

export default Search
