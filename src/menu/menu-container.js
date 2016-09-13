import './menu.css'

import dexter from '../dexter'

import React from 'react'
import { Link } from 'react-router'

let Menu = () => {
  return <div className='menu'>
    <ul>
      <li className='generations button'>
        <span className='gen-title' >Generations</span>
        {dexter.generations.map(gen => {
          return <div className='gen' key={gen}>
            <input id={gen} type='checkbox' />
            <label htmlFor={gen}>{gen}</label>
          </div>
        })}
      </li>
      <li>
        <Link
          to='/pokemon'
          className='button pokemon'>
          POKEMON
        </Link>
      </li>
      <li>
        <Link
          to='/items'
          className='button items'>
          ITEMS
        </Link>
      </li>
      <li>
        <Link
          to='/egg-groups'
          className='button egg-groups'>
          EGG GROUPS
        </Link>
      </li>
    </ul>
  </div>
}

export default Menu
