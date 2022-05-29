import React from 'react'
import { useSelector } from 'react-redux'
import type { ReduxState, Alert } from '../../types'

const Toaster = () => {
  const { alerts } = useSelector((state: ReduxState) => state.alert)

  const getAlertClassType = (alertType: string) => {
    if (alertType === 'success') return 'bg-green-500'
    else if (alertType === 'warning') return 'bg-red-500'
  }
  return (
    <div className="min-w-80 fixed top-16 right-5 z-10">
      {Array.isArray(alerts) &&
        alerts.map((alert: Alert) => (
          <div
            className={`${getAlertClassType(
              alert.alertType
            )} my-3 rounded-lg p-6 text-lg text-white`}
          >
            {alert.msg}
          </div>
        ))}
    </div>
  )
}

export default Toaster
