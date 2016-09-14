import './pokemon-details.css'

import React, { PropTypes } from 'react'

import sprite from '../sprites/1.json'

let PokemonDetails = ({details, goBack}) => {
  return <div className='details pokemon'>
    <button
      onClick={goBack}
      className='back'
      >
      BACK
    </button>
    <img src={sprite.src} alt='bulbasaur' />
    <span>Bulbasaur</span>
    <button className='button'>
      <span className='gen-title' >Generations</span>
        {details.generations.map(gen => {
          return <div className='gen' key={gen}>
            <input id={gen} type='checkbox' />
            <label htmlFor={gen}>{gen}</label>
          </div>
        })}
    </button>
    <div>
      <button>TYPE</button>
      <div>
        <button>I</button>
        <button>GRASS</button>
        <button>POISON</button>
      </div>
    </div>
    <div>
      <button>FLAVOURS</button>
      <div>
        <button>RED</button>
        <span>Something Something Something</span>
      </div>
      <div>
        <button>BLUE</button>
        <span>Something Something Something</span>
      </div>
    </div>
    <div>
      <button>ABILITIES</button>
      <div>
        <button>III</button>
        <span>Overgrow</span>
      </div>
    </div>
    <div>
      <button>CHAIN</button>
      <a href='#'>
        <img src={sprite.src} alt='bulbasaur' />
      </a>
      <span>-> LV: 16 -></span>
      <a href='#'>
        <img src={sprite.src} alt='bulbasaur' />
      </a>
      <span>-> LV: 32 -></span>
      <a href='#'>
        <img src={sprite.src} alt='bulbasaur' />
      </a>
    </div>
    <div>
      <button>ENCOUTER</button>
      <div>
        <button>RED</button>
        <span>Somewhere</span>
      </div>
      <div>
        <button>BLUE</button>
        <button>Somewhere</button>
      </div>
    </div>
    <div>
      <button>LEARNED MOVES</button>
      <div>
        <button>I</button>
        <div>
          <div>
            <button>LV: 0</button>
            <button>TACLE</button>
          </div>
        </div>
      </div>
    </div>
    <div>
      <button>TM MOVES</button>
      <div>
        <button>I</button>
        <div>
          <div>
            <button>TM01</button>
            <button>TACLE</button>
          </div>
        </div>
      </div>
    </div>
    <div>
      <button>EGG MOVES</button>
      <div>
        <button>I</button>
        <div>
          <div>
            <button>EGG GROUP</button>
            <button>TACLE</button>
          </div>
        </div>
      </div>
    </div>
    <div>
      <button>PRE EVOLUTION MOVES</button>
      <div>
        <button>I</button>
        <div>
          <div>
            <button>TACLE</button>
          </div>
        </div>
      </div>
    </div>
    <div>
      <button>BASE STATS</button>
      <div>
        <button>I</button>
        <div>
          <span>ATACK</span>
          <span>100-200</span>
        </div>
      </div>
    </div>

  </div>
}

PokemonDetails.propTypes = {
  details: PropTypes.object.isRequired,
  goBack: PropTypes.func.isRequired
}

export default PokemonDetails
