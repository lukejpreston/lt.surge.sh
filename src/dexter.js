import Pokemon from './data/pokemon.json'
import PokemonSpeciesNames from './data/pokemon_species_names.json'
import PokemonSpeciesFlavour from './data/pokemon_species_flavor_text.json'

function filterLanguage (ls) {
  return ls.filter(l => {
    return l.local_language_id === '9' || l.language_id === '9'
  })
}

const pokemon = Pokemon.filter(p => {
  return p.id !== ''
})
const pokemonSpeciesNames = filterLanguage(PokemonSpeciesNames)
const pokemonSpeciesFlavour = filterLanguage(PokemonSpeciesFlavour)

function getIndex (number) {
  if (number < 10) return '00' + number
  else if (number < 100) return '0' + number
  return '' + number
}

function pokemonList () {
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
        index: getIndex(index + 1),
        name: speciesName,
        href: speciesName.toLowerCase()
      }
    })
}

function getPokemon () {
  return {
    name: 'Bulbasaur',
    sprite: '1',
    flavour: 'Yup Yup'
  }
}

function generations () {
  return ['I', 'II', 'III', 'IV', 'V', 'VI']
}

export default {
  generations,
  pokemon: getPokemon,
  pokemonList
}
