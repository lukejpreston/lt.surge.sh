import React from 'react'
import Search from './search'

const Home = ({ titleLabel = 'LT.SURGE.SH', search }) => {
  return <div>
    <section className='section'>
      <div className='container'>
        <h1 className='lt-title title is-2 has-text-centered luckiest'>{titleLabel}</h1>
        <div>
          <h2 className='subtitle is-5 has-text-centered'>Welcome to the simple pokedex</h2>
          <Search {...search} large />
        </div>
        <div className='has-text-centered'>
          <p className='about'>
            This is a "simple" project to explore the power of <a href='https://reactjs.org/docs/hooks-intro.html'>React Hooks</a> in favor of <a href='https://redux.js.org/'>Redux</a>
            <br />
            This pokedex is powered by <a href='https://pokeapi.co/'>Poke API</a>
            <br />
            You can find all the code from <a href='https://github.com/lukejpreston/lt.surge.sh'>Github Project</a>
          </p>
        </div>
      </div>
    </section>
  </div>
}

export default Home
