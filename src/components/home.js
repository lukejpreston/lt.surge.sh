import React from 'react'
import Search from './search'

const Home = ({ titleLabel = 'LT.SURGE.SH', search }) => {
  return <div>
    <section className='section'>
      <div className='container'>
        <h1 className='title is-2 has-text-centered luckiest'>{titleLabel}</h1>
        <div>
          <h2 className='subtitle is-5 has-text-centered'>Welcome to the simple pokedex powered by the poke api</h2>
          <Search {...search} large />
        </div>
        <div className='has-text-centered'>
          <p className='about'>
          This is a simple project to explore the power of React Hooks in favor of Redux
            <br />
          You can find out more on my <a href='https://github.com/lukejpreston/lt.surge.sh'>Github Project</a>
          </p>
        </div>
      </div>
    </section>
  </div>
}

export default Home
