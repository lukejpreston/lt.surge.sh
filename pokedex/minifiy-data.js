const fs = require('fs')
const path = require('path')
const dexter = require('./dexter')
const dataOutput = path.join(__dirname, '../src/data')

let pokemonDetails = dexter.pokemonList
  .map(p => {
    let details = dexter.getPokemonDetails(p.name)
    let pokemon = Object.assign({}, p, details)
    if (details.identifier === 'castform') console.log(pokemon.evolution)
    return pokemon
  })

// fs.writeFileSync(
//   path.join(dataOutput, 'pokemon-details.json'),
//   JSON.stringify(pokemonDetails, null, 4)
// )
