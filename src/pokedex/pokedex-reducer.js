import reducer from '../reducer'

export default reducer({
  name: 'pokedex',
  initialState: {
    status: 'closed'
  },
  reduce: (state, action) => {
    if (action.type === '@@router/LOCATION_CHANGE' && action.payload.pathname !== '/') return {
      status: 'open'
    }
    if (action.type === 'open') return {
      status: action.status
    }
  }
})
