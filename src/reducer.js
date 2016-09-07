export default (options) => {
  let reduce = options.reduce || function () {}
  let name = options.name
  let initialState = options.initialState || {}

  return function (state, action) {
    let result = state && state[name]
    result = result || state
    result = result || initialState
    if (action) return reduce(result, action) || result
    return result
  }
}
