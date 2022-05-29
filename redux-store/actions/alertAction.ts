import { SET_ALERT, REMOVE_ALERT } from '../actionTypes'
import { DispatchType, Alert } from '../../types'

export const setAlert =
  ({ msg, alertType, timeOut = 4000 }: Alert) =>
  (dispatch: DispatchType) => {
    const id = Math.floor(Math.random() * 1000 + 1)
    dispatch({
      type: SET_ALERT,
      payload: { msg, alertType, id },
    })
    setTimeout(() => {
      dispatch({ type: REMOVE_ALERT, payload: id })
    }, timeOut)
  }
