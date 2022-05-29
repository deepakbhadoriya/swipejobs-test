import axios from 'axios'
import { BASE_URL } from '../../config/baseURL'
import {
  GET_WORKER_PROFILE,
  GET_WORKER_MATCHING_JOBS,
  SET_ALERT,
} from '../actionTypes'
import { setAlert } from './alertAction'
import { DispatchType } from '../../types'

const WORKER_ID = '7f90df6e-b832-44e2-b624-3143d428001f'

export const getWorkerProfile = () => async (dispatch: DispatchType) => {
  const res = await axios.get(`${BASE_URL}/worker/${WORKER_ID}/profile`)
  dispatch({
    type: GET_WORKER_PROFILE,
    payload: res.data,
  })
}

export const getWorkerMatchingJobs = () => async (dispatch: DispatchType) => {
  const res = await axios.get(`${BASE_URL}/worker/${WORKER_ID}/matches`)
  dispatch({
    type: GET_WORKER_MATCHING_JOBS,
    payload: res.data,
  })
}

export const workerAcceptJob =
  (jobId: string) => async (dispatch: Function) => {
    await axios.get(`${BASE_URL}/worker/${WORKER_ID}/job/${jobId}/accept`)
    dispatch(
      setAlert({ msg: 'You have accepted the JOB', alertType: 'success' })
    )
  }

export const workerRejectJob =
  (jobId: string) => async (dispatch: Function) => {
    await axios.get(`${BASE_URL}/worker/${WORKER_ID}/job/${jobId}/reject`)
    dispatch(
      setAlert({ msg: 'You have rejected the JOB', alertType: 'warning' })
    )
  }
