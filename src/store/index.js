import Search from './search'
import Pokemon from './pokemon'

let currentRoute

const Store = () => {
  const search = Search()
  const pokemon = Pokemon()

  return {
    ...pokemon,
    ...search,
    router: (router) => {
      const newRoute = `${router.location.pathname}?${router.location.search}#${router.location.hash}`
      if (currentRoute !== newRoute) {
        search.setRouter(router)
        pokemon.setRouter(router)
        currentRoute = newRoute
      }

      return null
    }
  }
}

export default Store
