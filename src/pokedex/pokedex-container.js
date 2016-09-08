import './pokedex.css'

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import reducer from './pokedex-reducer'
import dispatcher from './pokedex-dispatcher'

import Case from './case-component'

let Pokedex = ({open, status, children}) => {
  return <Case open={open} status={status} children={children} />
}

Pokedex.propTypes = {
  open: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  children: PropTypes.object
}

Pokedex = connect(reducer, dispatcher)(Pokedex)

export default Pokedex
