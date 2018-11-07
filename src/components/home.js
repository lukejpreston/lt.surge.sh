import React from 'react'
import Search from './search'

const Home = ({ suggestions = [], onChange, titleLabel = 'LT.SURGE.SH', onClick, input }) => {
  return <section className='section'>
    <div className='container'>
      <h1 className='title is-1 has-text-centered luckiest'>{titleLabel}</h1>
      <div>
        <h2 className='subtitle is-4 has-text-centered'>Welcome to the simple pokedex powered by the poke api</h2>
        <Search onChange={onChange} input={input} suggestions={suggestions} onClick={onClick} large />
      </div>
    </div>
  </section>
}

export default Home
