import './pokemon.css'

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import reducer from './pokemon-reducer'
import dispatcher from './pokemon-dispatcher'

import List from './pokemon-list-component'
import Preview from './pokemon-preview-component'

let Pokemon = ({list, preview}) => {
  return <div className='page'>
    <List list={list} />
    <Preview preview={preview} />
  </div>
}

Pokemon.propTypes = {
  list: PropTypes.array.isRequired,
  preview: PropTypes.object.isRequired
}

Pokemon = connect(reducer, dispatcher)(Pokemon)

export default Pokemon
