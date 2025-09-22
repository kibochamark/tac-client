// components/Dashboard/AppointmentsTable.tsx
'use client'

import { BiCalendar } from "react-icons/bi"
import { BsEye } from "react-icons/bs"

const appointments = [
  { patientName: 'John Doe', doctor: 'Dr. Michael Smith', time: '10:00 AM', type: 'Follow up', status: 'Scheduled', statusColor: 'bg-blue-100 text-blue-700', urgent: false },
  { patientName: 'Jane Smith', doctor: 'Dr. Michael Smith', time: '2:00 PM', type: 'Emergency', status: 'Scheduled', statusColor: 'bg-blue-100 text-blue-700', urgent: true },
  { patientName: 'Robert Johnson', doctor: 'Dr. Sarah Wilson', time: '3:30 PM', type: 'Surgery', status: 'Scheduled', statusColor: 'bg-blue-100 text-blue-700', urgent: false },
  { patientName: 'Mary Wilson', doctor: 'Dr. James Brown', time: '4:00 PM', type: 'Check-up', status: 'Completed', statusColor: 'bg-green-100 text-green-700', urgent: false }
]

const AppointmentsTable = () => (
  <div className="bg-white rounded-lg">
    {/* Header */}
    <div className="p-3 sm:p-4 border-b border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
      <div className="flex items-center space-x-2">
        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center">
          <BiCalendar className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
        </div>
        <h3 className="text-base sm:text-lg font-semibold text-gray-900">Today&apos;s Appointments</h3>
      </div>
      <div className="flex items-center space-x-2 sm:space-x-3">
        <span className="text-xs sm:text-sm text-gray-500">{appointments.length} Total</span>
        <button className="text-blue-600 text-xs sm:text-sm font-medium hover:text-blue-700">View All</button>
      </div>
    </div>

    {/* Table */}
    <div className="overflow-x-auto">
      <table className="w-full min-w-[600px]">
        <thead className="bg-gray-50 text-xs text-gray-500 uppercase">
          <tr>
            {['Patient Name', 'Doctor', 'Time', 'Status', 'Action'].map((head, i) => (
              <th key={i} className="px-2 sm:px-4 py-2 sm:py-3 text-left font-medium tracking-wider">{head}</th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 text-xs sm:text-sm text-gray-900">
          {appointments.map((a, i) => (
            <tr key={i} className="hover:bg-gray-50">
              <td className="px-2 sm:px-4 py-3 sm:py-4">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1">
                  <span className="font-medium truncate">{a.patientName}</span>
                  {a.urgent && (
                    <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-medium self-start">Urgent</span>
                  )}
                </div>
              </td>
              <td className="px-2 sm:px-4 py-3 sm:py-4">
                <span className="truncate block">{a.doctor}</span>
              </td>
              <td className="px-2 sm:px-4 py-3 sm:py-4">
                <div className="truncate">{a.time}</div>
                <div className="text-gray-500 text-xs truncate">{a.type}</div>
              </td>
              <td className="px-2 sm:px-4 py-3 sm:py-4">
                <span className={`px-2 py-1 rounded-2xl text-xs font-medium ${a.statusColor} inline-block`}>{a.status}</span>
              </td>
              <td className="px-2 sm:px-4 py-3 sm:py-4">
                <button className="text-gray-400 hover:text-gray-600 p-1">
                  <BsEye className="w-3 h-3 sm:w-4 sm:h-4" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
)

export default AppointmentsTable
