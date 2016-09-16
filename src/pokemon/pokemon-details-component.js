import './pokemon-details.css'

import React, { PropTypes } from 'react'

let PokemonDetails = ({details, goBack}) => {
  let chainPoke = 0
  let chainLink = 0
  return <div className='details pokemon'>
    <button
      onClick={goBack}
      className='back'
      >
      BACK
    </button>
    <div className='content'>
      <img className='block image' src={details.image.src} alt={details.image.alt} />
      <span className='block name'>{details.name}</span>
      <div className={`block types types-${details.types.length}`}>{
          details.types.map(item => {
            return <button key={`type-${item}`} className={`type ${item.toLowerCase()}`}>{item}</button>
          })
      }</div>
      <span className='block flavour'>{details.flavour}</span>
      <div className={`block egg-groups egg-groups-${details.eggGroups.length}`}>{
          details.eggGroups.map(item => {
            return <button key={`egg-group-${item}`} className={`egg-group ${item.toLowerCase()}`}>{item}</button>
          })
      }</div>
      <div className='block abilities'>{
          details.abilities.map(item => {
            let hidden = null
            if (item.hidden) hidden = <button>hidden</button>
            return <div key={`abilitiy-${item.name}`}>
              <button>{item.name}</button>
              {hidden}
              <span>{item.effect}</span>
              <span>{item.shortEffect}</span>
            </div>
          })
      }</div>
      <div className='block evolution'>{
          details.evolution.pokes.concat(details.evolution.links).map((e, index) => {
            if (index % 2 === 0) {
              let poke = details.evolution.pokes[chainPoke]
              chainPoke += 1
              return <img key={`chain-${index}`} className='image' src={poke.image.src} alt={poke.image.alt} />
            } else {
              let link = details.evolution.links[chainLink]
              chainLink += 1
              return <span key={`chain-${index}`}>{link}</span>
            }
          })
      }</div>
      <div className='block encounters'>{
        details.encounters.map((e, index) => {
          return <button key={`encounter-${index}`}>{e}</button>
        })
      }</div>
      <div className='block stats'>{
        details.stats.map((s, index) => {
          return <div key={`stat-${index}`}>
            <button>{s.name}</button>
            <button>{s.value}</button>
          </div>
        })
    }</div>
    </div>
  </div>
}

PokemonDetails.propTypes = {
  details: PropTypes.object.isRequired,
  goBack: PropTypes.func.isRequired
}

export default PokemonDetails
