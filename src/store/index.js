import Search from './search'
import Pokemon from './pokemon'

const Store = () => {
  let router

  const search = Search()
  const pokemon = Pokemon()

  return {
    ...pokemon,
    ...search,
    router (newRouter) {
      router = newRouter
      search.setRouter(router)
      pokemon.setRouter(router)
      return null
    }
  }
}

export default Store
