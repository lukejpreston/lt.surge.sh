import { browserHistory } from 'react-router'

export default (dispatch) => {
  return {
    goBack () {
      browserHistory.goBack()
    }
  }
}
