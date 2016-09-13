import reducer from '../reducer'
import dexter from '../dexter'

export default reducer({
  name: 'pokemon',
  initialState: {
    list: dexter.pokemonList(),
    preview: {
      to: '/pokemon/lt.surge',
      image: require('../sprites/thunder-stone.json'),
      name: 'LT. Surge',
      flavour: 'LT. Surge knows everything there is to know about pokemon. He is so cool because he has a Raichu. What is a "Raicu"? Use the list to the side to search for that little thing! Already got one? You must be pretty damn good to have a Raichu! Then select the pokeball to indicate you have caught one and then you can filter it out by only searching for "Uncaught" pokemon. Now you don\'t need to see that oversized electric rat no more.'
    }
  },
  reduce (state, action) {
    if (action.type === '@@router/LOCATION_CHANGE' && action.payload.pathname.includes('/pokemon/preview')) {
      let name = action.payload.pathname.replace('/pokemon/preview/', '')
      console.log(name)
    }
  }
})
