import Pokemon from './data/pokemon.json'
import PokemonSpeciesNames from './data/pokemon_species_names.json'

function filterLanguage (ls) {
  return ls.filter(l => {
    return l.local_language_id === '9'
  })
}

const pokemonSpeciesNames = filterLanguage(PokemonSpeciesNames)
const pokemon = Pokemon.filter(p => {
  return p.id !== ''
})

function getIndex (number) {
  if (number < 10) return '00' + number
  else if (number < 100) return '0' + number
  return '' + number
}

export default {
  pokemonList () {
    return pokemon
      .filter(p => {
        let id = parseInt(p.id, 10)
        return id <= 718
      })
      .map((p, index) => {
        let speciesName = pokemonSpeciesNames.filter(psn => {
          return psn.pokemon_species_id === p.species_id
        })[0].name
        return {
          index: getIndex(index),
          name: speciesName,
          href: speciesName.toLowerCase()
        }
      })
  }
}
