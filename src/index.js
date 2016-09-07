import './index.css'

import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'

import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer as routing } from 'react-router-redux'

let store = createStore(combineReducers({
  routing
}))

const history = syncHistoryWithStore(browserHistory, store)

let comp = <div>hello</div>

render(
  <Provider store={store}>
    <Router history={history} >
      <Route path='/' component={comp} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
