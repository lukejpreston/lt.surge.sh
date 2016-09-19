const fs = require('fs')
const path = require('path')
const dexter = require('./dexter')
const dataOutput = path.join(__dirname, '../src/data')

let pokemonDetails = dexter.pokemonList
  .map(p => {
    return Object.assign({}, p, dexter.getPokemonDetails(p.name))
  })

fs.writeFileSync(
  path.join(dataOutput, 'pokemon-details.json'),
  JSON.stringify(pokemonDetails, null, 4)
)
