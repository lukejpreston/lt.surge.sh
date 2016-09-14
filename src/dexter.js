import Pokemon from './data/pokemon.json'
import PokemonSpeciesNames from './data/pokemon_species_names.json'
import PokemonSpeciesFlavour from './data/pokemon_species_flavor_text.json'
import TypeNames from './data/type_names.json'
import PokemonTypes from './data/pokemon_types.json'
import EggGroups from './data/egg_group_prose.json'
import PokemonEggGroups from './data/pokemon_egg_groups.json'
import Abilities from './data/ability_names.json'
import AbilityProes from './data/ability_prose.json'
import PokemonAbilities from './data/pokemon_abilities.json'

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
const typeNames = filterLanguage(TypeNames)
const eggGroups = filterLanguage(EggGroups)
const abilities = filterLanguage(Abilities)
const abilityProes = filterLanguage(AbilityProes)

const GENERATIONS = {
  I: '1',
  II: '2',
  III: '3',
  IV: '4',
  V: '5',
  VI: '6'
}
let generations = []

function getIndex (number) {
  if (number < 10) return '00' + number
  else if (number < 100) return '0' + number
  return '' + number
}

function getPokemonName (p) {
  return pokemonSpeciesNames.filter(psn => {
    return psn.pokemon_species_id === p.species_id
  })[0].name
}

function getFlavour (p) {
  return pokemonSpeciesFlavour.filter(psf => {
    return psf.species_id === p.species_id
  })[0].flavor_text.replace(/"/g, '')
}

function pokemonList () {
  return pokemon
    .filter(p => {
      let id = parseInt(p.id, 10)
      return id <= 718
    })
    .map((p, index) => {
      let speciesName = getPokemonName(p)
      return {
        index: getIndex(index + 1),
        name: speciesName,
        href: speciesName.toLowerCase()
      }
    })
}

function getPokemon (name) {
  name = name.toLowerCase()
  let poke = pokemon.filter(p => {
    return p.identifier === name
  })[0]
  let image = require(`./sprites/${poke.id}.json`)
  return {
    id: poke.id,
    speciesId: poke.species_id,
    name: getPokemonName(poke),
    image,
    flavour: getFlavour(poke)
  }
}

function getTypes (poke) {
  let types = PokemonTypes
    .filter(pt => {
      return pt.pokemon_id === poke.id
    })
    .map(pt => {
      return typeNames.filter(tn => {
        return pt.type_id === tn.type_id
      })[0].name
    })
  return types
}

function getEggGroups (poke) {
  return PokemonEggGroups
    .filter(peg => {
      return peg.species_id === poke.speciesId
    })
    .map(peg => {
      return eggGroups.filter(eg => {
        return eg.egg_group_id === peg.egg_group_id
      })[0].name
    })
}

function getAbilities (poke) {
  return PokemonAbilities
    .filter(pa => {
      return pa.pokemon_id === poke.id
    })
    .map(pa => {
      let name = abilities.filter(a => {
        return a.ability_id === pa.ability_id
      })[0].name

      let prose = abilityProes.filter(a => {
        return a.ability_id === pa.ability_id
      })[0]
      let shortEffect = prose.short_effect
      let effect = prose.short_effect

      return {
        hidden: pa.is_hidden === '1',
        name,
        shortEffect,
        effect
      }
    })
}

function getPokemonDetails (name) {
  let poke = getPokemon(name)
  return {
    types: getTypes(poke),
    eggGroups: getEggGroups(poke),
    abilities: getAbilities(poke)
  }
}

function setGenerations (gens) {
  if (
    typeof gens === 'string' &&
    !generations.includes(gens) &&
    Object.keys(GENERATIONS).includes(gens.toUpperCase())
  ) generations.push(gens)
}

export default {
  generations: Object.keys(GENERATIONS),
  setGenerations,
  pokemon: getPokemon,
  pokemonDetails: getPokemonDetails,
  pokemonList
}
