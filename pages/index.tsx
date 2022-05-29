import type { NextPage } from 'next'
import { useEffect } from 'react'
import { Dispatch } from 'redux'
import { useDispatch, useSelector } from 'react-redux'

import { getWorkerProfile, getWorkerMatchingJobs } from '../redux-store/actions'

import type { ReduxState } from '../types'
import HomePageContainer from '../components/homePageContainer'

const Home: NextPage = () => {
  const { workerProfile, workerMatchingJobs } = useSelector(
    (state: ReduxState) => state.worker
  )

  const dispatch: Dispatch<any> = useDispatch()

  useEffect(() => {
    dispatch(getWorkerProfile())
    dispatch(getWorkerMatchingJobs())
  }, [dispatch])

  return (
    <HomePageContainer
      workerProfile={workerProfile}
      jobsData={workerMatchingJobs}
    />
  )
}

export default Home
