import { SET_ALERT, REMOVE_ALERT } from '../actionTypes'
import type { Alert } from '../../types'

interface InitialState {
  alerts: Alert[]
}

const initialState: InitialState = {
  alerts: [],
}

const alertReducer = (
  state = initialState,
  action: { type: string; payload: Alert | number }
) => {
  const { type, payload } = action

  switch (type) {
    case SET_ALERT:
      return {
        ...state,
        alerts: [...state.alerts, payload],
      }
    case REMOVE_ALERT:
      return {
        ...state,
        alerts: state.alerts.filter((alert: Alert) => alert.id !== payload),
      }
    default:
      return state
  }
}

export default alertReducer
