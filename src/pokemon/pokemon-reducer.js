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
    if (action.type === '@@router/LOCATION_CHANGE' && action.payload.pathname.includes('/pokemon/')) return {
      list: state.list,
      preview: {
        index: '001',
        name: 'Fletchfinder',
        flavour: 'This is Fletchfinder, he is a cool pokemon because his name is the longest name is the known universe, trust me it is super long, like longer than pikachu and everything!'
      }
    }
  }
})
