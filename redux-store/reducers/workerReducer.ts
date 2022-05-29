import { GET_WORKER_PROFILE, GET_WORKER_MATCHING_JOBS } from '../actionTypes'
import type { WorkerProfile, JobDetail } from '../../types'

interface InitialState {
  workerProfile: []
  workerMatchingJobs: []
}

const initialState: InitialState = {
  workerProfile: [],
  workerMatchingJobs: [],
}

const alertReducer = (
  state = initialState,
  action: { type: string; payload: WorkerProfile | JobDetail }
) => {
  const { type, payload } = action

  switch (type) {
    case GET_WORKER_PROFILE:
      return {
        ...state,
        workerProfile: payload,
      }
    case GET_WORKER_MATCHING_JOBS:
      return {
        ...state,
        workerMatchingJobs: payload,
      }
    default:
      return state
  }
}

export default alertReducer
