import { browserHistory } from 'react-router'

export default (dispatch) => {
  return {
    open: () => {
      dispatch({
        type: 'open',
        status: 'open'
      })
      browserHistory.push('/menu')
    }
  }
}
