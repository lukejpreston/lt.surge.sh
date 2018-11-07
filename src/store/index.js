import Search from './search'
import Pokemon from './pokemon'
import Router from './router'

const Store = () => {
  const search = Search()
  const pokemon = Pokemon()

  const store = { pokemon, search }

  return {
    ...store,
    router: Router(store)
  }
}

export default Store
