import './pokemon.css'

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import reducer from './pokemon-reducer'
import dispatcher from './pokemon-dispatcher'

import List from './pokemon-list-component'
import Preview from './pokemon-preview-component'
import Details from './pokemon-details-component'

let Pokemon = ({list, preview, details, goBack}) => {
  let content = null
  if (details) content = <Details details={details} goBack={goBack} />
  else content = <div>
    <List list={list} />
    <Preview preview={preview} />
  </div>
  return <div className='page'>
    {content}
  </div>
}

Pokemon.propTypes = {
  list: PropTypes.array,
  preview: PropTypes.object,
  details: PropTypes.object,
  goBack: PropTypes.func.isRequired
}

Pokemon = connect(reducer, dispatcher)(Pokemon)

export default Pokemon
