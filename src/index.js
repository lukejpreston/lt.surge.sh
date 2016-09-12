import './index.css'

import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'

import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer as routing } from 'react-router-redux'

import Pokdex from './pokedex/pokedex-container'
import pokedex from './pokedex/pokedex-reducer'

import Pokemon from './pokemon/pokemon-container'
import pokemon from './pokemon/pokemon-reducer'

let store = createStore(combineReducers({
  routing,
  pokedex,
  pokemon
}))

const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Router history={history} >
      <Route path='/' component={Pokdex}>
        <Route path='pokemon' component={Pokemon} />
        <Route path='pokemon/preview/:pokemon' component={Pokemon} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
