import reducer from '../reducer'
import pokemonDetails from '../data/pokemon-details.json'
let initialState = {
  list: pokemonDetails,
  preview: {
    to: '/pokemon/lt.surge',
    image: require('../sprites/thunder-stone.json'),
    name: 'LT. Surge',
    flavour: 'LT. Surge knows everything there is to know about pokemon. He is so cool because he has a Raichu. What is a "Raicu"? Use the list to the side to search for that little thing! Already got one? You must be pretty damn good to have a Raichu! Then select the pokeball to indicate you have caught one and then you can filter it out by only searching for "Uncaught" pokemon. Now you don\'t need to see that oversized electric rat no more.'
  }
}

export default reducer({
  name: 'pokemon',
  initialState,
  reduce (state, action) {
    if (action.type === '@@router/LOCATION_CHANGE') {
      let showPreview = action.payload.pathname.includes('/pokemon/preview')
      let showDetails = action.payload.pathname.includes('/pokemon/')
      let showDefault = action.payload.pathname === '/pokemon'

      if (showPreview) {
        let name = action.payload.pathname.replace('/pokemon/preview/', '').toLowerCase()
        let pokemon = pokemonDetails.filter(p => {
          return p.identifier === name
        })[0]
        return {
          list: state.list,
          preview: {
            to: `/pokemon/${name}`,
            image: pokemon.image,
            name: pokemon.name,
            flavour: pokemon.flavour
          }
        }
      } else if (showDetails) {
        let name = action.payload.pathname.replace('/pokemon/', '').toLowerCase()
        let pokemon = pokemonDetails.filter(p => {
          return p.identifier === name
        })[0]
        return {
          list: initialState.list,
          preview: initialState.preview,
          details: pokemon
        }
      } else if (showDefault) {
        return initialState
      }
    }
  }
})
