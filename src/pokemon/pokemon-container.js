import './pokemon.css'

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import reducer from './pokemon-reducer'
import dispatcher from './pokemon-dispatcher'

let Pokemon = () => {
  return <div>pokemon</div>
}

Pokemon.propTypes = {
}

Pokemon = connect(reducer, dispatcher)(Pokemon)

export default Pokemon
