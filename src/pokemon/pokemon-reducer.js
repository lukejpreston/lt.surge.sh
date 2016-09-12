import reducer from '../reducer'

export default reducer({
  name: 'pokemon',
  initialState: {
    list: [],
    preview: {
      to: '/pokemon/lt.surge',
      image: require('../sprites/thunder-stone.json'),
      name: 'lt. Surge',
      flavour: 'This is probably the best pokedex you will find'
    }
  },
  reduce (state, action) {
    if (action.type === '@@router/LOCATION_CHANGE' && action.payload.pathname.includes('/pokemon/')) console.log(action.payload.pathname)
  }
})
