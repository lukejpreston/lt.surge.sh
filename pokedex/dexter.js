const path = require('path')
const changeCase = require('change-case')
const dataOutput = path.join(__dirname, '../src/data')

const Pokemon = require(path.join(dataOutput, 'pokemon.json'))
const PokemonSpeciesNames = require(path.join(dataOutput, 'pokemon_species_names.json'))
const PokemonSpeciesFlavour = require(path.join(dataOutput, 'pokemon_species_flavor_text.json'))
const TypeNames = require(path.join(dataOutput, 'type_names.json'))
const PokemonTypes = require(path.join(dataOutput, 'pokemon_types.json'))
const EggGroups = require(path.join(dataOutput, 'egg_group_prose.json'))
const PokemonEggGroups = require(path.join(dataOutput, 'pokemon_egg_groups.json'))
const Abilities = require(path.join(dataOutput, 'ability_names.json'))
const AbilityProes = require(path.join(dataOutput, 'ability_prose.json'))
const PokemonAbilities = require(path.join(dataOutput, 'pokemon_abilities.json'))
const Evolution = require(path.join(dataOutput, 'pokemon_evolution.json'))
const EvolutionTrigger = require(path.join(dataOutput, 'evolution_trigger_prose.json'))
const PokemonSpecies = require(path.join(dataOutput, 'pokemon_species.json'))
const Encounters = require(path.join(dataOutput, 'encounters.json'))
const Locations = require(path.join(dataOutput, 'locations.json'))
const BaseStats = require(path.join(dataOutput, 'pokemon_stats.json'))
const Stats = require(path.join(dataOutput, 'stat_names.json'))

function filterLanguage (ls) {
  return ls.filter(l => {
    return l.local_language_id === '9' || l.language_id === '9'
  })
}

const pokemon = Pokemon.filter(p => {
  return p.id !== '' || p.id !== undefined
})

const pokemonSpeciesNames = filterLanguage(PokemonSpeciesNames)
const pokemonSpeciesFlavour = filterLanguage(PokemonSpeciesFlavour)
const typeNames = filterLanguage(TypeNames)
const eggGroups = filterLanguage(EggGroups)
const abilities = filterLanguage(Abilities)
const abilityProes = filterLanguage(AbilityProes)
const evolutionTrigger = filterLanguage(EvolutionTrigger)
const stats = filterLanguage(Stats)

let chains = []
PokemonSpecies.forEach(ps => {
  let chainId = parseInt(ps.evolution_chain_id, 10)
  chains[chainId] = chains[chainId] || []
  ps.order = parseInt(ps.evolves_from_species_id, 10) || -1
  if (ps.order === -1) chains[chainId] = [ps].concat(chains[chainId])
  else chains[chainId].push(ps)
})

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

const pokemonList = pokemon
  .filter(p => {
    return p.is_default === '1'
  })
  .map((p, index) => {
    let speciesName = getPokemonName(p)
    return {
      index: getIndex(index + 1),
      name: speciesName,
      href: p.identifier
    }
  })

function getPokemonByName (name) {
  let pByName = pokemonSpeciesNames.filter(p => {
    return p.name === name
  })[0]
  if (pByName === undefined) {
    console.log('boop', name)
    return {}
  }

  let poke = pokemon.filter(p => {
    return p.species_id === pByName.pokemon_species_id
  })[0]
  if (poke === undefined) {
    console.log(name)
    return {}
  }
  let image = require(path.join(dataOutput, `../sprites/${poke.id}.json`))
  return {
    identifier: poke.identifier,
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

function getEvolution (poke) {
  let chain = []
  chains.forEach((ch, index) => {
    ch.forEach(c => {
      if (c.id === poke.speciesId) chain = chains[index]
    })
  })
  let links = chain
    .map(c => {
      return Evolution.filter(e => {
        return e.evolved_species_id === c.id
      })[0]
    })
    .filter(c => {
      return c !== undefined
    })
    .map(c => {
      let trigger = evolutionTrigger.filter(et => {
        return et.evolution_trigger_id === c.evolution_trigger_id
      })[0].name

      let link = []
      Object.keys(c)
        .forEach(key => {
          if (c[key] !== '0' && c[key] !== '' && key !== 'evolved_species_id' && key !== 'evolution_trigger_id' && key !== 'id') link.push(c[key])
        })

      return `${trigger}: ${link.join(', ')}`
    })
  let pokes = chain.map(c => {
    let pok = pokemon.filter(p => {
      return p.id === c.id
    })[0]
    let name = pokemonSpeciesNames.filter(psn => {
      return psn.pokemon_species_id === pok.species_id
    })[0].name
    return getPokemonByName(name)
  })
  return {
    pokes,
    links
  }
}

function getEncounter (poke) {
  let encs = []
  Encounters
    .filter(e => {
      return e.pokemon_id === poke.id
    })
    .map(e => {
      let location = Locations.filter(l => {
        return l.id === e.location_area_id
      })[0]
      if (location) return changeCase.titleCase(location.identifier)
      return ''
    })
    .filter(e => {
      return e !== ''
    })
    .forEach(e => {
      if (!encs.includes(e)) encs.push(e)
    })
  return encs
}

function getStats (poke) {
  return BaseStats
    .filter(bs => {
      return bs.pokemon_id === poke.id
    })
    .map(bs => {
      let name = stats
        .filter(s => {
          return s.stat_id === bs.stat_id
        })
        .map(s => {
          return s
        })[0].name
      return {
        name,
        value: bs.base_stat
      }
    })
}

function getPokemonDetails (name) {
  let poke = getPokemonByName(name)

  let details = {
    types: getTypes(poke),
    eggGroups: getEggGroups(poke),
    abilities: getAbilities(poke),
    evolution: getEvolution(poke),
    encounters: getEncounter(poke),
    stats: getStats(poke)
  }

  return Object.assign({}, poke, details)
}

module.exports = {
  getPokemonDetails,
  pokemonList
}
