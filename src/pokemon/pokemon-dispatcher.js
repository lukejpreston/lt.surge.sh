export default (dispatch) => {
  return {
    changeTo (name) {
      dispatch({
        type: 'change',
        name
      })
    }
  }
}
