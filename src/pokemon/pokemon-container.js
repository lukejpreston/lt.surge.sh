import './pokemon.css'

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import reducer from './pokemon-reducer'
import dispatcher from './pokemon-dispatcher'

let Pokemon = () => {
  let list = null
  let preview = null
  // let list = <div className='list'>list</div>
  // let preview = <div className='preview'>preview</div>

  // let details = null
  let details = <div className='details'>details</div>

  return <div className='page'>
    {list}
    {preview}
    {details}
  </div>
}

Pokemon.propTypes = {
}

Pokemon = connect(reducer, dispatcher)(Pokemon)

export default Pokemon
