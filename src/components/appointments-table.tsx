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
  <div className="bg-white rounded-lg shadow-sm border border-gray-200">
    {/* Header */}
    <div className="p-2 border-b border-gray-200 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center">
          <BiCalendar className="w-4 h-4 text-white" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900">Today&apos;s Appointments</h3>
      </div>
      <div className="flex items-center space-x-3">
        <span className="text-sm text-gray-500">{appointments.length} Total</span>
        <button className="text-blue-600 text-sm font-medium hover:text-blue-700">View All</button>
      </div>
    </div>

    {/* Table */}
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50 text-xs text-gray-500 uppercase">
          <tr>
            {['Patient Name', 'Doctor', 'Time', 'Status', 'Action'].map((head, i) => (
              <th key={i} className="px-4 py-3 text-left font-medium tracking-wider">{head}</th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 text-sm text-gray-900">
          {appointments.map((a, i) => (
            <tr key={i} className="hover:bg-gray-50">
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <span className="font-medium">{a.patientName}</span>
                  {a.urgent && (
                    <span className="ml-2 bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-medium">Urgent</span>
                  )}
                </div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">{a.doctor}</td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div>{a.time}</div>
                <div className="text-gray-500 text-xs">{a.type}</div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <span className={`px-2 py-1 rounded-2xl text-xs font-medium ${a.statusColor}`}>{a.status}</span>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <button className="text-gray-400 hover:text-gray-600">
                  <BsEye className="w-4 h-4" />
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
