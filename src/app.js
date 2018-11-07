import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import './app.css'
import fuzzy from 'fuzzy'
import { title } from 'change-case'

const arr = Array.apply(null, Array(151)).map((x, i) => ({ name: '' }))

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

const Header = ({ suggestions = [], onChange, titleLabel = 'LT.SURGE.SH', onClick }) => {
  return <section className='section'>
    <div className='container'>
      <h1 className='title is-1 has-text-centered luckiest'>{titleLabel}</h1>
      <div>
        <h2 className='subtitle is-4 has-text-centered'>Welcome to the simple pokedex powered by the poke api</h2>
        <Search onChange={onChange} large />
        <Suggestions suggestions={suggestions} onClick={onClick} />
      </div>
    </div>
  </section>
}

const Search = ({ onChange, large, input }) => <input className={`input is-${large ? 'large' : 'normal'}`} placeholder='Pokemon Name or Index' onChange={evt => onChange(evt.target.value)} value={input} />

const Suggestions = ({ suggestions, onClick }) => <div>
  {suggestions.map((pokemon, index) => {
    return <div key={`${pokemon}-${index}`}>
      <button className='button' to={`/${pokemon.split(' ')[0]}`} onClick={() => onClick(pokemon)}>{title(pokemon)}</button>
    </div>
  })}
</div>

const Pokemon = ({ suggestions = [], onChange, onClick, input, pokemon }) => {
  return <div>
    <Link to='/'>Home</Link>
    <Search onChange={onChange} input={input} />
    <Suggestions suggestions={suggestions} onClick={onClick} />
    <span>{pokemon.name}</span>
  </div>
}

const App = () => {
  const store = Store()
  return <div>
    <Router >
      <div>
        <Switch>
          <Route path='/' exact>
            <Header {...store} />
          </Route>
          <Route path='/:index' exact>
            <Pokemon {...store} />
          </Route>
        </Switch>
        <Route render={store.router} />
      </div>
    </Router>
  </div>
}

export default App
