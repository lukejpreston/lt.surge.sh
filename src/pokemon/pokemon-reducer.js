import reducer from '../reducer'
import dexter from '../dexter'

let initialState = {
  list: dexter.pokemonList(),
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
        let pokemon = dexter.pokemon(name)
        return {
          list: state.list,
          preview: {
            to: `/pokemon/${name}`,
            image: require(`../sprites/${pokemon.sprite}.json`),
            name: pokemon.name,
            flavour: pokemon.flavour
          }
        }
      } else if (showDetails) {
        return {
          list: initialState.list,
          preview: initialState.preview,
          details: {
            generations: ['I', 'II']
          }
        }
      } else if (showDefault) {
        return initialState
      }
    }
  }
})
