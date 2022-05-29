import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import {
  CalendarIcon,
  LocationMarkerIcon,
  UserCircleIcon,
} from '@heroicons/react/solid'
import { ChevronRightIcon, AdjustmentsIcon } from '@heroicons/react/outline'
import type { JobDetail } from '../../types'
import IconHeading from './IconHeading'
import Button from '../button'
import { Dispatch } from 'redux'
import { useDispatch } from 'react-redux'
import { workerAcceptJob, workerRejectJob } from '../../redux-store/actions'

dayjs.extend(advancedFormat)
dayjs.extend(utc)
dayjs.extend(timezone)

const JobCard = ({ jobDetails }: { jobDetails: JobDetail }) => {
  const dispatch: Dispatch<any> = useDispatch()

  const handleJobReject = (jobId: string) => {
    dispatch(workerRejectJob(jobId))
  }
  const handleJobAccept = (jobId: string) => {
    dispatch(workerAcceptJob(jobId))
  }
  return (
    <div key={jobDetails.jobId} className="mt-5 rounded-sm bg-white">
      <img
        className="h-auto w-full rounded-t-sm object-cover shadow-lg"
        src={jobDetails.jobTitle?.imageUrl}
        alt=""
      />

      <div className="p-5 text-gray-700">
        <h3 className="text-2xl font-bold ">{jobDetails.jobTitle?.name}</h3>
        <span className="text-lg font-semibold">
          {jobDetails.company?.name}
        </span>
      </div>

      <div className="flex justify-between bg-[#32d5ad] px-5 py-3">
        <div>
          <div className="text-md font-extrabold text-gray-700">Distance</div>
          <div className="text-3xl font-bold text-white">
            {jobDetails.milesToTravel} miles
          </div>
        </div>
        <div>
          <div className="text-md text-right font-extrabold text-gray-700">
            Hourly Rate
          </div>
          <div className="text-right text-3xl font-bold text-white">
            <sup className="text-xl">$</sup>{' '}
            {jobDetails.wagePerHourInCents / 100}
          </div>
        </div>
      </div>

      <IconHeading heading="Shift Dates" icon={<CalendarIcon />}>
        <div className="text-md max-h-12  overflow-auto font-light uppercase">
          {Array.isArray(jobDetails.shifts) &&
            jobDetails.shifts.map(({ startDate, endDate }, index) => (
              <div key={`${index} ${startDate}`}>
                {dayjs(startDate).format('MMM D, ddd HH:MM A')} -
                {dayjs(endDate).format('HH:MM A z')}
              </div>
            ))}
        </div>
      </IconHeading>

      <IconHeading heading="Location" icon={<LocationMarkerIcon />}>
        <div className="text-md w-100 relative flex flex-row font-light">
          {jobDetails.company?.address?.formattedAddress}
          <div className="absolute right-0 h-11 w-10">
            <ChevronRightIcon />
          </div>
        </div>
        <div className="text-xs">
          {jobDetails.milesToTravel} miles from your job search location
        </div>
      </IconHeading>

      {Array.isArray(jobDetails.requirements) && (
        <IconHeading heading="Requirements" icon={<AdjustmentsIcon />}>
          <div className="text-md w-100 font-light">
            {jobDetails.requirements.map((requirement: string) => (
              <div>- {requirement}</div>
            ))}
          </div>
        </IconHeading>
      )}

      <IconHeading
        heading="Report To"
        icon={<UserCircleIcon />}
        style={{ border: 'none' }}
      >
        <div className="text-md w-100 font-light">
          {jobDetails.company?.reportTo?.name}{' '}
          {jobDetails.company?.reportTo?.phone}
        </div>
      </IconHeading>

      <div className="flex justify-between p-5">
        <Button
          onClick={() => handleJobReject(jobDetails.jobId)}
          type="OUTLINE"
          title="No Thanks"
        />
        <Button
          onClick={() => handleJobAccept(jobDetails.jobId)}
          type="SOLID"
          title="I`ll Take it"
        />
      </div>
    </div>
  )
}

export default JobCard
