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
      setSuggestions([])
      setInput('')
      const index = pokemon.split(' ')[0]
      router.history.push(`/${index}`)
    },
    onChange (value) {
      setInput(value)
      if (value === '') setSuggestions([])
      else {
        const matches = fuzzy.filter(value.toLowerCase(), indexes)
        setSuggestions(matches.map(m => m.string))
      }
    }
  }

  if (indexes[0].name === '') {
    fetch(`${process.env.REACT_APP_API}/pokemon/`)
      .then(res => res.json())
      .then(res => {
        setIndexes(res.results.slice(0, 151).map((p, index) => `${index + 1} ${p.name}`))
      })
  }

  return {
    ...state,
    ...actions,
    setRouter (newRouter) {
      router = newRouter
    }
  }
}

export default Search
