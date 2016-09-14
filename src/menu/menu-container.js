import './menu.css'

import React from 'react'
import { Link } from 'react-router'

let Menu = () => {
  return <div className='menu'>
    <ul>
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
      <li>
        <Link
          to='/generations'
          className='button generations'>
          GENERATIONS
        </Link>
      </li>
    </ul>
  </div>
}

export default Menu
