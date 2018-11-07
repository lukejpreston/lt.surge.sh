import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import fuzzy from 'fuzzy'

import Home from './components/home'
import Pokemon from './components/pokemon'

const arr = Array.apply(null, Array(151)).map((x, i) => `${i} Loading ...`)

const Store = () => {
  let router

  const [indexes, setIndexes] = useState(arr)
  const [suggestions, setSuggestions] = useState([])
  const [input, setInput] = useState('')
  const [pokemon, setPokemon] = useState({ index: -1 })

  const state = {
    indexes,
    suggestions,
    input,
    pokemon
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
    router (newRouter) {
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

const App = () => {
  const store = Store()
  return <div>
    <Router >
      <div>
        <Switch>
          <Route path='/' exact>
            <Home {...store} />
          </Route>
          <Route path='/:index'>
            <Pokemon {...store} />
          </Route>
        </Switch>
        <Route render={store.router} />
      </div>
    </Router>
  </div>
}

export default App
