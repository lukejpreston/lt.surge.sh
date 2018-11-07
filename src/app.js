import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Store from './store'
import Home from './components/home'
import Pokemon from './components/pokemon'

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
