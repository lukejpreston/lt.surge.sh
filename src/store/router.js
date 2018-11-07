let currentRoute

const Router = (store) => (router) => {
  const newRoute = `${router.location.pathname}?${router.location.search}#${router.location.hash}`
  if (currentRoute !== newRoute) {
    Object.keys(store).forEach(key => {
      const value = store[key]
      if (value.hasOwnProperty('updateRoute')) value.updateRoute(router)
    })
    currentRoute = newRoute
  }
  return null
}

export default Router
