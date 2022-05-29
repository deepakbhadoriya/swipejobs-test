import React from 'react'
import JobCard from '../jobCard'
import type { JobDetail } from '../../types'

const JobCardCollection = ({ jobsData }: { jobsData: JobDetail[] }) => {
  if (Array.isArray(jobsData)) {
    return (
      <div>
        {jobsData.map((job: JobDetail) => (
          <JobCard key={job.jobId} jobDetails={job} />
        ))}
      </div>
    )
  }

  return null
}

export default JobCardCollection
