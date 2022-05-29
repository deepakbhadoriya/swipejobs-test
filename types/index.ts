interface Alert {
  msg: string
  alertType: string
  id?: number
  timeOut?: number
}

type DispatchType = (args: { type: string; payload: any }) => void

interface JobDetail {
  jobId: string
  jobTitle: {
    name: string
    imageUrl: string
  }
  company: {
    name: string
    address: {
      formattedAddress: string
      zoneId: string
    }
    reportTo: {
      name: string
      phone: string
    }
  }
  wagePerHourInCents: number
  milesToTravel: number
  shifts: [
    {
      startDate: Date
      endDate: Date
    }
  ]
  branch: string
  branchPhoneNumber: string
  requirements: string[]
}

interface WorkerProfile {
  address: {
    formattedAddress: string
    zoneId: string
  }
  email: string
  firstName: string
  lastName: string
  maxJobDistance: number
  phoneNumber: string
  workerId: string
}

interface ReduxState {
  alert: { alerts: Alert[] }
  worker: {
    workerProfile: WorkerProfile
    workerMatchingJobs: JobDetail[]
  }
}

enum ButtonType {
  SOLID = 'solid',
  OUTLINE = 'outline',
}

export type {
  Alert,
  DispatchType,
  JobDetail,
  WorkerProfile,
  ReduxState,
  ButtonType,
}
