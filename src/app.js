import React, {useState} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import './app.css'
import fuzzy from 'fuzzy'

const arr = Array.apply(null, Array(151)).map((x, i) => ({name: ''}))

const Store = () => {
  let router

  const [indexes, setIndexes] = useState(arr)
  const [suggestions, setSuggestions] = useState([])

  const state = {indexes, suggestions}
  const actions = {
    onChange (value) {
      if (value === '') setSuggestions([])
      else {
        const matches = fuzzy.filter(value, indexes)
        setSuggestions(matches.map(m => m.string))
      }
    }
  }

  fetch(`${process.env.REACT_APP_API}/pokemon/`)
    .then(res => res.json())
    .then(res => {
      setIndexes(res.results.slice(0, 151).map((p, index) => `${index + 1} ${p.name}`))
    })

  return {
    ...state,
    ...actions,
    router (newRouter) {
      router = newRouter
      return null
    }
  }
}

const Header = ({suggestions = [], onChange}) => {
  return <section className='section'>
    <p>Welcome to the pokedex</p>
    <input placeholder='Pokemon Name or Index' onChange={evt => onChange(evt.target.value)} />
    <div>
      {suggestions.map((pokemon, index) => {
        return <div>
          <Link to={`/${pokemon.slice(' ')[0]}`}>{pokemon}</Link>
        </div>
      })}
    </div>
  </section>
}

const App = () => {
  const store = Store()
  return <div>
    <Router >
      <div>
        <Header {...store} />
        <Route render={store.router} />
      </div>
    </Router>
  </div>
}

export default App
